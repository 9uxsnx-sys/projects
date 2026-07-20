# 🛠 New Project Workflow

Follow these exact steps to initialize a new niche homepage project. This ensures 1000% consistency across the entire portfolio factory.

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

## Phase 2: Documentation Setup
1.  **Copy Blueprints**: Copy all files from `.trae/templates/` into the new niche folder.
2.  **Strategy First**: Fill out `CONTEXT.md` before writing a single line of UI code.
3.  **Initialize Log**: Set up `DESIGN_LOG.md` with the Phase 1 & 2 tasks.

## Phase 3: The "Blank Canvas" (Wiping Boilerplate)
1.  **Clear `globals.css`**: Remove all default styles except the Tailwind directives:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
2.  **Reset `page.tsx`**: Create a clean, white background entry point:
    ```tsx
    export default function Home() {
      return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center">
          <h1 className="text-black font-bold text-2xl">[Niche Name] Homepage - Ready for Content</h1>
        </main>
      );
    }
    ```
3.  **Clean `layout.tsx`**: Remove default Google Fonts if you plan to use custom ones in the next phase.

## Phase 4: Theme Definition
1.  **Define Palette**: Update `tailwind.config.ts` with the niche-specific color system defined in `CONTEXT.md`.
2.  **Set Typography**: Configure primary and secondary font pairings.

## Phase 5: Section-by-Section Build
- Build the **Hero Section** first (Post 1 focus).
- Build the **Features/Value Prop** section.
- Build the **Mobile Optimization** (Post 2 focus).
- Finalize the **Case Study** (Post 3 focus) in `CASE_STUDY.md`.
