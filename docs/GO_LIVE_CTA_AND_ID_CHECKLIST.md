# Go-Live CTA and ID Checklist

## Platform Access

- Cloudflare account access: `sshaver@woodlandscenter.org` created
- Production Git repository URL: `git@github.com:sshaver/woodlands-center.git`
- Production branch for staging: `staging`
- Production domain after approval: `woodlandscenter.org` and `www.woodlandscenter.org`
- Staging domain: `preview.woodlandscenter.org`
- Staging access: Basic Auth enabled by `STAGING_BASIC_AUTH_PASSWORD`; username `cwmp`; store the shared password in Cloudflare, not in Git
- Build failure notifications: `sshaver@woodlandscenter.org`
- Sanity admin access: needed for deploy webhook setup

## Analytics

- GTM Container ID: `GTM-5N77WWN6`
- GA4 Measurement ID, if not managed inside GTM:
- Confirm HubSpot tracking location:
  - `gtm`

## HubSpot

- HubSpot Portal ID: `49060964`
- Contact form ID: `250191b5-b73c-43bd-bf66-f68af4c6802c`
- Get Emails form ID: `a8d79233-3e27-40d3-8049-ec9b844b709a`
- Season Seats Interest form ID: `1c82a8a1-5f2a-4332-a59d-68c90681dc2b`
- Mission Seekers / Arts Outreach signup form ID: `49ba2210-9592-44b9-bf40-bb5a742c79db`
- Program Reminder form ID: `6988d41c-6dcd-4106-b2ad-ac487b58b055`
- Grants form ID: `63965007-2942-49bc-bc13-c18ca02d4f1d`

## External CTAs

- Ticketmaster base URL: `https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-sponsored-tickets-woodlands/venue/98413`
- Per-event ticket URLs: needed later if each show should point to its own listing
- Account Manager / SS Holder login URL: `https://am.ticketmaster.com/woodlands/`
- Parking purchase URL: `https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-sponsored-tickets-woodlands/venue/98413`
- Lawn chair rental URL: `https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-sponsored-tickets-woodlands/venue/98413`
- Hotel partner URL: `https://hotels.visitthewoodlands.com/affiliate?Code=live-nation&lang=en&Checkin=&Checkout=&Rooms=a2-c0&Pets=&PromoCode=&affiliate=&GuestsAdult=&GuestsChildren=`
- DonorPerfect donation URL: `https://wl.donorperfect.net/weblink/weblink.aspx?name=E333870&id=56`
- Foundant grant application URL: `https://www.grantinterface.com/Home/Logon?urlkey=woodlandscenter`
- Acceptd application URL: `https://app.getacceptd.com/woodlandscenter`
- Paycom jobs URL: `https://www.paycomonline.net/v4/ats/web.php/portal/7A49DACE0D1DB8C334B6809498FC517D/career-page`
- Google Sheets / public workflow URL: intentionally blank for now. Use only if a public registration/signup CTA later points to a Google Form or Sheet-backed workflow instead of HubSpot, Foundant, Acceptd or another system.
- Staff login URL: `https://staff.woodlandscenter.org/`
- Chamberfest URL: `https://www.thewoodlandschamberfest.com/`
- Tarvia story video: `https://www.youtube.com/watch?v=r1MWnchjmKY`
- Donation / support video: `https://www.youtube.com/watch?v=al_R1CG-vlw`
- General mission video: `https://www.youtube.com/watch?v=s_Ub7bkFfEk`

## Redirects

- Current production URL inventory:
- Required legacy redirects:
- Preferred apex/www behavior: support both `woodlandscenter.org` and `www.woodlandscenter.org`
