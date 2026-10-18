# MK Rank website

Static site for MK Rank, local SEO for trades businesses in Dorset. Plain HTML and one CSS file, no build step. Hosted on GitHub Pages.

## Filled in

- Prices: SEO fix-up £200, local SEO setup £200, monthly retainer £150 per month, SEO-ready starter website £500, optional website care plan £60 per month, WordPress website on quote (schema prices are plain numbers: 200, 200, 150, 500, 60)
- Schema `priceRange` on the home page: `£60–£500`
- Phone: 07469 886043, linked as `tel:+447469886043`, schema `+447469886043`
- Experience wording (approved): "5 years in digital marketing, now working day to day as an SEO account manager at a UK agency, managing SEO for multiple client accounts." Short form: "5 years in digital marketing, now an agency SEO account manager". Never name the agency or claim 5 years of SEO specifically
- Site URL: `https://mickkolo.github.io/MK-Rank/` (canonicals, Open Graph, schema, sitemap.xml, robots.txt)

## Placeholders still to do

Each one sits inside an HTML comment, so visitors never see raw bracket text. Search the repo for the placeholder, fill it in and remove the comment markers.

| Placeholder | Where | What to do |
|---|---|---|
| `[EMAIL]` | Footer of every page, contact page | No email shown yet. Add the `mailto:` link from the comment, and add `"email"` to the ProfessionalService schema on the home page. Also mention email on the privacy page |
| `[CALENDLY_URL]` | contact/index.html | Uncomment the "Book a call online" block. All "Contact options" buttons already lead to the contact page |
| `[FORMSPREE_ID]` | contact/index.html | Replace the ID and uncomment the form |
| `[LINKEDIN_URL]` | about/index.html | Uncomment the link and add `"sameAs"` to the Person schema |
| `[PHOTO]` | about/index.html | Add a real photo (for example `assets/mick.jpg`) and uncomment the `<img>` |
| `[TESTIMONIALS]` | index.html | Add real reviews only |
| `[NUMBER]` | services/local-seo-setup/ | Number of pages included in the setup |
| `[TURNAROUND]` | services/seo-fix-up/ | Fix-up turnaround. Update the FAQ answer in both the visible text and the FAQPage JSON-LD |

## GitHub Pages

Settings > Pages > Deploy from a branch > `main`, `/ (root)`. The site is served at `https://mickkolo.github.io/MK-Rank/`.

Page and asset links are relative, so they work on both the subpath and a custom domain. Only `404.html` uses absolute `/MK-Rank/...` links, because GitHub serves it at any missing path.

Note: search engines only read `robots.txt` at the root of a host, so `/MK-Rank/robots.txt` is ignored while the site is on github.io. Submit the sitemap in Google Search Console instead, using a URL-prefix property for `https://mickkolo.github.io/MK-Rank/`.

## Switching to mkrank.co.uk later

1. In Settings > Pages, set the custom domain to `mkrank.co.uk` (GitHub adds a `CNAME` file) and follow GitHub's DNS instructions. Tick "Enforce HTTPS".
2. Replace every `https://mickkolo.github.io/MK-Rank` with `https://mkrank.co.uk` across all files. This covers canonicals, Open Graph, JSON-LD, sitemap.xml and robots.txt.
3. In `404.html`, replace `/MK-Rank/` with `/`.
4. Add a Domain property for mkrank.co.uk in Search Console and resubmit `https://mkrank.co.uk/sitemap.xml`.
