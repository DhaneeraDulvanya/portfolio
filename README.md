# Dhaneera Dulvanya Portfolio

A responsive personal portfolio built with React, Vite and Tailwind CSS.

## Run locally

1. Install Node.js (v16 or newer).
2. Install dependencies with `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Build for production with `npm run build`. Vite writes the site to `dist`.

The React app entry is `src/main.jsx`; page sections are composed in `src/App.jsx` and implemented in `src/components/`. Shared styling lives in `src/index.css`. Vite uses the `/portfolio/` base path for the existing GitHub Pages deployment.

## Personal files and content

- Replace `public/images/pic.png` with your profile image, or update the image path in `src/components/Hero.jsx`.
- Add your CV as `public/assets/Dhaneera_Resume.pdf`. The header and hero download links already point to that path.
- Update personal details and projects in the corresponding components in `src/components/`.
- Only the CAPCC repository link is currently published. Add project source or live-demo links to `src/components/Projects.jsx` after those links are verified; concept cards intentionally have no source or demo links.

## EmailJS contact form

The contact form uses the existing `@emailjs/browser` dependency. In `src/components/Contact.jsx`, replace `YOUR_EMAILJS_SERVICE_ID`, `YOUR_EMAILJS_TEMPLATE_ID` and `YOUR_EMAILJS_PUBLIC_KEY` with the values from your EmailJS account. Configure the template with the form fields `from_name`, `from_email`, `subject`, and `message`, as well as `to_name` and `reply_to`. The UI shows success only when EmailJS returns HTTP status 200. Until the placeholders are replaced, the form directs visitors to the published email address.

## GitHub Pages

Run `npm run deploy` from `main` to build the site and publish the contents of `dist` to the `gh-pages` branch. The `predeploy` script runs `npm run build` before deployment.
