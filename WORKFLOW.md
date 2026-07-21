# 🛠 New Project Workflow (Elite Standard)

Follow these exact steps to initialize a new niche homepage project. This ensures 1000% consistency and scalability across the entire portfolio factory.

## Phase 1: Initialization
1.  **Create Folder**: `mkdir niche-[name]`
2.  **Initialize Next.js**: 
    ```bash
    npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
    ```
3.  **Install Core Libraries**:
    ```bash
    npm install framer-motion lucide-react clsx tailwind-merge
    ```

## Phase 2: Elite Directory Organization
Every project MUST follow this absolute organization standard:

### 📁 Source Structure (`/src`)
- `src/components/ui`: Atomic, reusable UI components (Buttons, Inputs, etc.).
- `src/components/sections`: The major building blocks of the homepage (Hero, Features, Footer).
- `src/components/layout`: Shared layout elements (Navbar, Global Layout).
- `src/lib/hooks`: Custom React hooks.
- `src/lib/utils`: Helper functions (e.g., `cn` for tailwind).
- `src/lib/constants`: Configuration, site data, and niche-specific constants.
- `src/styles`: Global CSS and theme extensions.

### 📁 Public Assets (`/public`)
- `public/assets/fonts`: Custom typography files.
- `public/assets/images`: Photography, mockups, and large visuals.
- `public/assets/icons`: SVG icons and brand logos.
- `public/assets/videos`: Background videos and motion assets.

## Phase 3: Documentation Setup
1.  **Copy Blueprints**: Copy all files from `.trae/templates/` into the new niche folder.
2.  **Strategy First**: Fill out `CONTEXT.md` before writing a single line of UI code.
3.  **Initialize Log**: Set up `DESIGN_LOG.md` with the current phase status.

## Phase 4: The "Blank Canvas" (Wiping Boilerplate)
1.  **Move & Clear `globals.css`**: Move `src/app/globals.css` to `src/styles/globals.css` and remove all default styles except Tailwind directives:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
2.  **Update `layout.tsx`**: Update the import path to `import "../styles/globals.css";`.
3.  **Reset `page.tsx`**: Create a clean entry point.

## Phase 5: Theme & Section Build
- **Theme Definition**: Update `tailwind.config.ts` with niche-specific colors and fonts.
- **Section-by-Section**: Build starting with the **Hero Section** (Post 1 focus).
- **Mobile Perfection**: Audit and refine for mobile (Post 2 focus).
- **Case Study**: Finalize the story in `CASE_STUDY.md` (Post 3 focus).
