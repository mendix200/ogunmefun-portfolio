# Halilulahi Ogunmefun — Professional Portfolio

Responsive personal portfolio with a charcoal and orange design, professional profile, education, certifications, experience, and detailed DrinkStore NG and MechanicSolution case studies.

Live site: https://halilulahi-ogunmefun-portfolio-t12yo3.v2.appdeploy.ai/

Figma: https://www.figma.com/design/Hja452GqJ6yMZUx5b3oz8i

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Update the portfolio

- Edit `index.html` for profile, qualifications, links and project case studies.
- Edit `src/styles.css` for layout, colours and responsive styling.
- Edit `src/main.ts` for CV download, photo fallback and print behaviour.
- Replace `public/resources/portrait.png` and `public/resources/cv.pdf` to update the photo and CV, preserving the filenames.
- `tests/tests.json` contains the AppDeploy browser-check scenarios.

The project descriptions acknowledge AI-assisted development. Do not add qualifications, project results or employment claims without supporting evidence.

## Hosting

AppDeploy currently hosts the website. Pushing to this repository does not automatically update AppDeploy. Its photo and CV uploads are managed separately through the AppDeploy Resources panel.

The included portrait and CV are the portfolio owner's personal assets; no reuse licence is granted.