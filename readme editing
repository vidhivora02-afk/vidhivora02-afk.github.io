# How to edit your site

Your site is 5 files. You'll only ever need to touch 3 of them regularly.

| File | What it's for | Edit often? |
|---|---|---|
| `index.html` | Page structure & text (hero, about, contact) | Sometimes |
| `projects-data.js` | Your case studies / projects list | **Yes — most common edit** |
| `videos-data.js` | Your future ACCA video library | Yes, once you start publishing |
| `style.css` | Colors, fonts, layout | Rarely |
| `script.js` | Interactive behaviour (filters, popups, animations) | Rarely — you shouldn't need to |

## 1. Add a new project / case study
Open `projects-data.js`. Copy one `{ ... }` block, paste it into the list, and
change the text. That's it — the filter buttons and the ledger on the
homepage update automatically, no HTML editing needed.

```js
{
  title: "Your project title",
  category: "Valuation",     // or "M&A", "Risk Advisory", "Financial Modelling", "Research" — or a brand new category
  year: "2024",
  summary: "One sentence describing the project.",
  details: [
    "First key point / step",
    "Second key point / step"
  ],
  link: ""   // optional — paste a Google Drive / PDF link to the full write-up
}
```

## 2. Add your first ACCA video
Open `videos-data.js` and follow the instructions in the comments at the top
of the file — you just paste in your YouTube video ID. The site will
automatically switch from "coming soon" to a real video grid.

## 3. Update your contact details
In `index.html`, use Find & Replace (Ctrl+F / Cmd+F) for:
- `YOUR_EMAIL@example.com` → your real email (appears 4 times)
- `YOUR-LINKEDIN` → your LinkedIn username (appears 2 times)

## 4. Swap the resume
Replace `resume.pdf` in the repo with your actual résumé, keeping the same
filename — or update the `href="resume.pdf"` link in `index.html` if you
rename it.

## 5. Change colors / fonts
Open `style.css` and look at the top of the file under `:root { ... }`.
Everything — every color, every font — is controlled from those few lines.
For example, to change the gold accent color, edit `--brass: #A9812D;`.

## 6. Deploying (GitHub Pages)
Since your repo is already named `vidhivora02-afk.github.io`, GitHub Pages is
already serving it. Just:
1. Replace the old `index.html` and `style.css` with these new versions.
2. Add `script.js`, `projects-data.js`, and `videos-data.js` to the same folder.
3. Commit and push (or upload via the GitHub web UI: **Add file → Upload
   files**).
4. Wait ~1 minute, then refresh `https://vidhivora02-afk.github.io`.

## 7. About the contact form
Right now the "Send Message" button opens the visitor's email app with a
pre-filled message — this works with zero setup because the site is static
(no backend server). If you'd like messages to submit directly without
opening email, sign up for a free plan at **formspree.io**, and I can wire
the form to submit there instead — just ask.

## 8. Want a second page for full case-study write-ups?
Right now clicking a case study opens a pop-up. If you'd rather each one
open as its own full page (useful if you want to share a direct link to one
project), let me know — it's a straightforward addition.
