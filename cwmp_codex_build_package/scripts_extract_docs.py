from docx import Document
from pathlib import Path
import json

BASE = Path('/mnt/data')
OUT = BASE / 'cwmp_codex_build_package'


def para_level(p):
    pPr = p._p.pPr
    if pPr is not None and pPr.numPr is not None:
        ilvl = pPr.numPr.ilvl
        numId = pPr.numPr.numId
        return (int(ilvl.val) if ilvl is not None else None, int(numId.val) if numId is not None else None)
    return (None, None)


def extract(path):
    doc = Document(path)
    rows = []
    current_section = None
    for i, p in enumerate(doc.paragraphs):
        text = p.text.strip()
        if not text:
            continue
        level, num_id = para_level(p)
        style = p.style.name if p.style else None
        if level is None and i != 0:
            current_section = text
        rows.append({
            'paragraph_index': i,
            'text': text,
            'style': style,
            'list_level': level,
            'numbering_id': num_id,
            'section': current_section,
        })
    return rows


def write_markdown_outline(rows, out_path, title=None):
    lines = []
    first = True
    for row in rows:
        text = row['text']
        lvl = row['list_level']
        idx = row['paragraph_index']
        if lvl is None:
            if first:
                lines.append(f"# {text}\n")
                first = False
            else:
                lines.append(f"\n## {text}\n")
        else:
            indent = '  ' * lvl
            lines.append(f"{indent}- {text}")
    out_path.write_text('\n'.join(lines) + '\n', encoding='utf-8')


def write_plain_text(rows, out_path):
    out_path.write_text('\n'.join(r['text'] for r in rows) + '\n', encoding='utf-8')

full_rows = extract(BASE / 'Full Outline.docx')
rp_rows = extract(BASE / 'Request for Proposal 01.docx')
(OUT / 'data' / 'full_outline_paragraphs.json').write_text(json.dumps(full_rows, indent=2, ensure_ascii=False), encoding='utf-8')
(OUT / 'data' / 'rfp_paragraphs.json').write_text(json.dumps(rp_rows, indent=2, ensure_ascii=False), encoding='utf-8')
write_markdown_outline(full_rows, OUT / 'docs' / 'SITE_OUTLINE_EXACT.md')
write_plain_text(full_rows, OUT / 'data' / 'full_outline_text.txt')
write_plain_text(rp_rows, OUT / 'data' / 'rfp_text.txt')

# basic image manifest
from PIL import Image
imgs=[]
for p in sorted((OUT / 'assets' / 'reference-designs').glob('*.jpg')):
    with Image.open(p) as im:
        imgs.append({'file': p.name, 'width': im.width, 'height': im.height})
(OUT / 'data' / 'design_image_manifest.json').write_text(json.dumps(imgs, indent=2), encoding='utf-8')
print('[OK] extracted docs and image manifest')
