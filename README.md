# Energy Pulse

A responsive website built for my internship assessment, showcasing energy monitoring products and services. Energy Pulse is a fictional company created for this project.

## Live website

**Vercel URL:** [Energy Pulse](https://energy-management-website.vercel.app/)

## Tech stack

Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. GitHub is used for the code submission, with Vercel as the deployment platform.

## Pages

- **Home:** introduction, key features, and contact links.
- **Products:** descriptions, icons, and specifications.
- **About:** company overview, mission, and a fictional team.
- **Contact:** name, email, and message fields with basic validation.

Each page has a title, meta description, and Open Graph metadata.

## Run locally
You'll need Node.js and npm installed.
```bash
git clone https://github.com/SeasonThapa10/energy-management-website.git energy-management-website
cd energy-management-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design decisions

- I chose a dark background with green accents to suit the energy theme.
- Standard Tailwind classes keep the styling straightforward to edit.
- Layouts adapt to mobile and desktop, with subtle scroll and hover animations that respect reduced motion preferences.

## Contact form

The form checks required fields and email format, then shows a demo confirmation. It does not send emails or save messages.

## Content reference

Content and product information are based on [Apollo Green Solutions](https://www.apollo-gs.com/), with my own layout and fictional team profiles.
