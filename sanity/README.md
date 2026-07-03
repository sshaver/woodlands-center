# Sanity CMS Setup

This folder contains the schema layer for managing The Pavilion website content in Sanity while keeping HubSpot focused on forms, CRM capture and marketing workflows.

## Local Studio Setup

1. Create a Sanity project and dataset.
2. Install Sanity Studio dependencies in this project or a sibling Studio project:

   ```sh
   npm create sanity@latest
   ```

3. Copy `sanity/sanity.config.example.mjs` to the Studio `sanity.config.mjs`.
4. Copy or import `sanity/schemaTypes` into the Studio project.
5. Set:

   ```sh
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```

## Public Site Connection

The static build reads Sanity only when these variables are present:

```sh
SANITY_PROJECT_ID=y8zl4q1a
SANITY_DATASET=production
SANITY_API_VERSION=2025-02-19
SANITY_READ_TOKEN=optional-read-token
```

If those are missing, the site uses `src/content/site-data.mjs` fixtures so local development and previews do not break.

Current Sanity project:

- Project name: `woodlandscenter.org`
- Project ID: `y8zl4q1a`
- Dataset: `production`
- Manage URL: `https://www.sanity.io/manage/project/y8zl4q1a`

## Run the Studio

A local Studio is scaffolded in `sanity/studio` and imports the shared schema from `sanity/schemaTypes`.

```sh
cd sanity/studio
npm run dev
```

If the dev server hits a local file-watcher limit, use the built preview instead:

```sh
cd sanity/studio
npm run build
npx sanity preview --host 127.0.0.1 --port 3334
```

## Seeding Content

Run:

```sh
npm run cms:seed
```

That writes `sanity/seed/cwmp-content.ndjson`, which can be imported into Sanity with the Sanity CLI.
