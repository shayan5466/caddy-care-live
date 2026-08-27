# Caddy Care Live

hii lcone this repo "https://github.com/ZAYATTT90/caddy-care-clinic" and let craft something carzy animated 3d good looking and best clinic solution make its footer mroe caddy and create e login and signup page with high animationa nd 3d glassy and proifle fullsutup with detailed login   for patieht and can save thier repots an ddocter can see tie history alsoa nd proper notification sysytema nd  straek gracph folowback  and also animate to ques sysyte whichis loking still boring context "i am buiding a  aproduct to later resall to differet kin of clicnic to help them in daily problems Build the home screen for "Caddy Care" — a premium doctor/dentist

appointment booking app — with HIGH-END ANIMATED 3D MOTION as the

centerpiece. This must feel alive and premium, not static.

TECH REQUIREMENTS:

- Use Framer Motion for all animations (motion.div, AnimatePresence,

  spring-based transitions — no linear/basic CSS transitions, everything

  should feel physics-based and fluid).

- Add a 3D animated Caddy mascot/avatar as the hero centerpiece of the

  home screen. Implement this using either:

  (a) react-three-fiber + drei (a lightweight animated 3D model or

      procedural 3D shape — e.g. a soft-shaded floating glass/orb-based

      character — with continuous idle animation: gentle floating/bobbing

      motion, slow rotation, breathing scale-pulse), OR

  (b) if a full 3D model is too heavy for this stage, use a high-quality

      Lottie animation or an animated SVG/CSS 3D-transform character as a

      fallback — but the react-three-fiber approach is preferred for a

      genuinely "3D" feel, not just a 2D animation pretending to be 3D.

  Pick whichever is more feasible to implement well right now, but

  clearly tell me which one you used and why.

HOME SCREEN LAYOUT & MOTION SPEC:

1. HERO SECTION:

   - The animated 3D Caddy mascot floats center-stage with continuous

     idle motion (subtle up-down float using a sine-wave-like easing,

     slow ambient rotation, soft glow pulse behind it using a blurred

     radial gradient that scales in sync with a breathing rhythm).

   - Caddy should have a subtle parallax reaction to mouse movement /

     device tilt (on mobile) — it should feel like it's gently tracking

     the user, not rigid.

   - A glassmorphic greeting card fades and slides up beneath/beside

     Caddy using Framer Motion's `initial/animate` with a spring

     transition (staggered entrance — greeting text appears first, then

     the search/specialization pills stagger in one after another with a

     short delay between each, using `staggerChildren`).

2. SPECIALIZATION PILLS (Dentist, General Physician, Skin Specialist, etc):

   - Each pill is a glass chip with a small 3D-styled icon.

   - On scroll into view, animate each pill in with `whileInView` +

     staggered delay, sliding up + fading in.

   - On hover/tap: `whileHover` scale-up (1.05) with a soft glow-shadow

     transition, `whileTap` slight scale-down (0.97) for tactile press

     feedback.

3. FEATURED DOCTORS CAROUSEL:

   - Horizontally scrollable glass cards, each with the doctor's photo in

     a soft-glowing circular frame.

   - Implement drag-to-scroll using Framer Motion's `drag="x"` with

     `dragConstraints`, and add subtle 3D tilt on the card closest to

     center (like a coverflow effect) using a scroll-linked transform

     (`useScroll` + `useTransform` to map scroll position to rotateY).

4. LIVE QUEUE TEASER CARD (if the patient has an active appointment):

   - A glass card with an animated glowing number for queue position

     that count-transitions smoothly when it changes (animate the number

     value itself, not just fade — use a spring-animated counter).

5. SCROLL-TRIGGERED REVEALS:

   - Use `whileInView` + `viewport={{ once: true }}` throughout the page

     so sections animate in the first time they scroll into view, not

     repeatedly.

MOTION QUALITY BAR:

- Every transition should use spring physics (`type: "spring", stiffness,

  damping`) rather than simple ease curves — this is what makes it feel

  premium/alive instead of generic.

- No animation should feel abrupt — entrances should overshoot very

  slightly and settle (natural spring behavior), not snap into place.

- Respect `prefers-reduced-motion` — provide a reduced-motion fallback

  that keeps the layout but removes/simplifies the continuous idle

  animations, for accessibility.

Confirm which 3D approach you used for the Caddy mascot (react-three-fiber

vs Lottie/SVG fallback) and show me the result before wiring any real

backend data into this screen — this is a pure UI/motion pass first."

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2f616b5d-52ab-4a67-8201-de3c9547d5a9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
