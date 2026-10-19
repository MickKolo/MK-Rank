# MK Rank website

Static site for MK Rank, local SEO for trades businesses in Dorset. Plain HTML and one CSS file, no build step. Hosted on GitHub Pages.

## Filled in

- Prices: SEO fix-up £200, local SEO setup £200, monthly retainer £150 per month, SEO-ready starter website £500, optional website care plan £60 per month, WordPress website on quote (schema prices are plain numbers: 200, 200, 150, 500, 60)
- Schema `priceRange` on the home page: `£60–£500`
- Phone: 07469 886043, linked as `tel:+447469886043`, schema `+447469886043`
- Experience wording (approved): "5 years in digital marketing, specialising in SEO". Adapt naturally, e.g. "Five years in digital marketing, specialising in local SEO for trades". Never mention Mick's current role or employer, and never claim 5 years of SEO specifically
- Site URL: `https://mk-rank.co.uk/` (canonicals, Open Graph, schema, sitemap.xml, robots.txt). The `CNAME` file at the repo root holds `mk-rank.co.uk`

## Placeholders still to do

Each one sits inside an HTML comment, so visitors never see raw bracket text. Search the repo for the placeholder, fill it in and remove the comment markers.

| Placeholder | Where | What to do |
|---|---|---|
| `[CALENDLY_URL]` | contact/index.html | Uncomment the "Book a call online" block. All "Contact options" buttons already lead to the contact page |
| `[LINKEDIN_URL]` | about/index.html | Uncomment the link and add `"sameAs"` to the Person schema |
| `[TESTIMONIALS]` | index.html | Add real reviews only |
| `[NUMBER]` | services/local-seo-setup/ | Number of pages included in the setup |
| `[TURNAROUND]` | services/seo-fix-up/ | Fix-up turnaround. Update the FAQ answer in both the visible text and the FAQPage JSON-LD |

## GitHub Pages and the domain

Settings > Pages > Deploy from a branch > `main`, `/ (root)`. The site is served at **https://mk-rank.co.uk/** through the `CNAME` file. DNS is on Cloudflare: four GitHub Pages A records for `@` and a `www` CNAME to `mickkolo.github.io`, both set to DNS only (grey cloud). Tick "Enforce HTTPS" in Pages settings once GitHub has issued the certificate.

Page and asset links are relative. Only `404.html` uses root-absolute links (`/...`), because GitHub serves it at any missing path.

The switch from `https://mickkolo.github.io/MK-Rank/` to `https://mk-rank.co.uk/` is done: canonicals, Open Graph and Twitter tags, JSON-LD, sitemap.xml, robots.txt and the 404 links all use the new domain. The old github.io address redirects to the custom domain.

Next: add a Domain property for mk-rank.co.uk in Google Search Console and submit `https://mk-rank.co.uk/sitemap.xml`. robots.txt is now at the host root, so crawlers will read it.

If you also buy `mkrank.co.uk`, redirect it to `https://mk-rank.co.uk/` at the registrar (for example a Cloudflare redirect rule). Don't add it as a second Pages domain.
