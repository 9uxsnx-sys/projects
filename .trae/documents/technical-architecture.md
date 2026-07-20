## 1. Architecture Design

```mermaid
graph TD
    "Root[/]" --> "N1[niche-ai-saas/]"
    "Root" --> "N2[niche-luxury-real-estate/]"
    "Root" --> "T[.trae/templates/]"
    "Root" --> "S[shared/]"
    "N1" --> "F1[React/Vite App]"
    "T" --> "C1[CONTEXT.md Template]"
    "T" --> "C2[CASE_STUDY.md Template]"
    "S" --> "C[Common Components]"
    "S" --> "P[Tailwind Presets]"
```

## 2. Technology Description
- **Frontend**: React@18 + Tailwind CSS @3 + Framer Motion + Vite
- **Styling**: Tailwind CSS with industry-specific config extensions.
- **Animations**: Framer Motion for high-end micro-interactions and scroll-triggered effects.
- **Imagery**: High-quality text-to-image AI assets tailored to each niche.

## 3. Directory Organization Policy
- **Isolation**: Each `niche-*` folder is a standalone Vite project.
- **Mandatory Docs**: Every niche folder MUST contain `CONTEXT.md`, `DESIGN_LOG.md`, and `CASE_STUDY.md`.
- **Handoff Readiness**: Any developer should be able to enter a niche folder, read the docs, and understand the project's logic and status with 1000% accuracy.

## 4. Shared Asset Strategy
- **`shared/`**: Contains reusable UI atoms (buttons, inputs) and custom Tailwind plugins to speed up the "10x" production sprint.
- **Deployment**: Each niche homepage can be deployed independently as a sub-path or separate domain.
