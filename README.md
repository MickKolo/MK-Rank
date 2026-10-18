# MK Rank website

Static site for MK Rank, local SEO for trades businesses in Dorset. Plain HTML and one CSS file, no build step. Hosted on GitHub Pages.

## Placeholders to replace before launch

Search the repo for these and replace every instance:

| Placeholder | What to put in |
|---|---|
| `[DOMAIN]` | Your domain without `https://` (e.g. `mkrank.co.uk`). Used in canonicals, Open Graph, schema, sitemap.xml and robots.txt |
| `[PHONE]` | Phone number (use `+44...` format inside `tel:` links) |
| `[EMAIL]` | Contact email |
| `[CALENDLY_URL]` | Full Calendly booking link |
| `[FORMSPREE_ID]` | Formspree form ID (contact/index.html) |
| `[PRICE_FIXUP]`, `[PRICE_SETUP]`, `[PRICE_MONTHLY]` | Prices. On the page write e.g. `£295`; inside the JSON-LD `"price"` fields use the number only, e.g. `295` |
| `[NUMBER]` | Number of area/service pages included in the local SEO setup |
| `[TURNAROUND]` | Fix-up turnaround in working days |
| `[LINKEDIN_URL]` | LinkedIn profile (about page and schema) |
| `[DATE]` | Privacy notice date |
| `assets/mick-placeholder.svg` | Replace with a real photo (keep the alt text) |
| `[TESTIMONIALS]` | HTML comment on the home page: add real reviews only |

## GitHub Pages

Settings > Pages > deploy from branch `main`, folder `/`. Add a custom domain there (it creates a `CNAME` file). The 404 page and canonical URLs assume the site is served from the domain root, so use a custom domain rather than `mickkolo.github.io/mk-rank/`.

After launch: submit `https://[DOMAIN]/sitemap.xml` in Google Search Console, and test pages with Google's Rich Results Test.
