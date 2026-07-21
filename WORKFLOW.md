# 🛠 New Project Workflow (Elite Standard)

Follow these exact steps to initialize a new niche homepage project using the **Elite Starter Template**. This ensures 1000% consistency and scalability.

## Phase 1: High-Speed Initialization
1.  **Copy Template**: 
    ```bash
    cp -r .trae/templates/template-website niche-[name]
    ```
2.  **Install Dependencies**:
    ```bash
    cd niche-[name]
    npm install
    ```
3.  **Renaming**: Update the folder name and internal placeholders (`{{BRAND_NAME}}`, etc.) in documentation and code.

## Phase 2: Elite Directory Organization
Every project MUST follow this absolute organization standard (already pre-built in the template):

### 📁 Source Structure (`/src`)
- `src/components/ui`: Atomic, reusable UI components.
- `src/components/sections`: The major building blocks of the homepage.
- `src/components/layout`: Shared layout elements (Navbar, Global Layout).
- `src/lib/hooks`, `src/lib/utils`, `src/lib/constants`: Logic and config layer.
- `src/styles`: Global CSS (Tailwind base).

### 📁 Public Assets (`/public`)
- `public/assets/fonts`, `images`, `icons`, `videos`: Niche-specific media.

## Phase 3: Documentation & Strategy
1.  **Strategy First**: Fill out `CONTEXT.md` in the niche folder.
2.  **Initialize Log**: Set up `DESIGN_LOG.md`.

## Phase 4: Customization
1.  **Metadata**: Update `src/app/layout.tsx` with niche-specific SEO data.
2.  **Theme**: Update `tailwind.config.ts` with the color palette and fonts.
3.  **Hero Section**: Start building the Hero (Post 1 focus) in `src/components/sections/Hero.tsx`.

## Phase 5: Deployment & Handoff
- **Mobile Perfection**: Audit for mobile responsiveness (Post 2 focus).
- **Case Study**: Finalize the story in `CASE_STUDY.md` (Post 3 focus).
