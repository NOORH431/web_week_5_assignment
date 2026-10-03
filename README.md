# Budget Tracker - Week 2 Upgrade

An interactive frontend dashboard built to log expenses, organize categories, and track personal finance data structures.

## Core Features Implemented
- **Structured Expense Matrix**: Built using semantic `<table>` syntax with distinct headers, dynamic zebra striping background rules, and interactive row highlight filters.
- **Upgraded Data Input Form**: Features structural input wrappers containing isolated field IDs paired with a 5-option category `<select>` element dropdown.
- **Multimedia Hooks**: Integrates localized brand branding assets using optimized asset handling alongside responsive financial management tip video iframes.
- **Advanced Selectors Routing**: Applies negation formatting paths, input target element highlight focus properties, and child alignment logic selectors.


# Budget Tracker - Visual Identity (Week 3)

A polished, user-friendly personal finance dashboard built using semantic HTML5 structures and advanced CSS styling. This project demonstrates intentional UI layout organization by grouping key expense features into modular card views.

## Key Features Implemented

### 1. Intentional Color Palette
* **Background Shade:** Applied a soft neutral tint (`#f8fafc`) across the body container to offer high text legibility and comfortable screen time.
* **Accent Theme Identity:** Structured focus targets like interactive buttons and active text fields around an energetic custom primary pink theme (`#D231A0`).
* **Hover Micro-interactions:** Buttons smoothly shift down to a deep contrast hue (`#b02484`) when targeted by pointer icons to provide visible feedback.

### 2. Typographic Presentation Hierarchy
* **Structural Headings:** Styled titles, sub-elements, table headers, and layout summaries in **Montserrat** (Weights: 600, 700) to ensure a modern, clean framing feel.
* **Content Body Data:** Leveraged **Merriweather** for tabular entries, form labels, and financial data grids to secure reading clarity.
* Loaded safely through fallback generic stack strings (`sans-serif` and `serif`) to handle bad network conditions smoothly.

### 3. Expense Matrix & Add-Expense Form Layout
* **Input Elements:** Configured fields with precise inner vertical spacing and focus states that display subtle glow responses when a user interacts with fields.
* **Tabular Log Matrix:** Formatted the logs database with balanced cell padding, distinct top accent boundaries, uppercase headers, and clean alternating zebra rows.

### 4. Box Model Application
* **Distinct Visual Cards:** Formatted the central header, collapsible instruction panel, input forms, and rows matrix using a unified container card blueprint.
* Integrated strict `box-sizing: border-box` definitions globally to guarantee padding and border expansions never break structural layout metrics.
* Softened hard structural lines using modern rounded borders (`border-radius: 12px`) and subtle drop-shadow elevations to create visual hierarchy.

## Project Directory Architecture
```text
├── index.html          # Semantic HTML structure 
├── style.css           # Intentional layout box model rules
└── cash-money-logo.png # Project brand graphic banner asset
```

# Web_week4_assignment
# SpendWise Dashboard Shell

This project acts as the foundational visual layout engine for the **SpendWise Capstone Application**. Built using modern CSS architectural paradigms, it balances flexible modularity with robust accessibility patterns.

## Architecture Decisions

### 1. Macro and Micro Layout Separation
* **Macro Layout (CSS Grid):** Utilized on the `<body>` viewport mapping layer to distinctly parse the viewport boundaries between the Navigation Sidebar panel and Main Workspaces without introducing erratic breaking structural points.
* **Micro Layout (Flexbox):** Selected across interior context configurations (Headers, Navigation lists, and inner Card tracking elements) where element structural distribution relies heavily on text scaling alignment.

### 2. Design System Tokens (CSS Custom Properties)
Theme metrics reside inside centralized variables scoped explicitly under the `:root` selector. The token matrix features standard variables handling backgrounds, surface boundaries, typography contrast weights, and elevation shadows. 

* **Dark Mode Stretch Goal Resolution:** Resolved using an alternative property override payload hooked natively into the `@media (prefers-color-scheme: dark)` system directive, instantly responding to native environmental OS toggling states without reliance on structural script execution dependencies.

### 3. Responsive Adaptability Strategies (< 768px)
Once tracking environments drop below the target `768px` structural container standard, structural patterns snap immediately into unified stacking sequences:
* The primary structural blueprint shifts gracefully from double columns to single stack rules.
* The Navigation cluster restructures layout flows using flex-row wraps to keep elements highly actionable within standard mobile device viewport constraints.

### 4. Interactive State Accessibility
Card modules incorporate explicit semantic `tabindex="0"` bindings. Micro-interaction animations utilize optimized physical property transitions (`transform`, `box-shadow`) operating beneath standard layout-repaint durations (configured exactly at `200ms`). State styling triggers seamlessly across desktop pointer interactions (`:hover`) and standard focus cycles (`:focus-visible`).


# web_week_5

## JavaScript Implementation Architecture

* **Variables & Data Types**: Employs `let` block declarations to hold dynamic financial state calculations, alongside `Number()` primitive castings to clean raw text inputs into accurate integer balances.
* **User Input Collection**: Intercepts structural inputs dynamically utilizing native browser `prompt()` window modals.
* **Reusable Logic Blocks**: Houses a custom `calculateBalance()` function architecture passing custom parameter vectors and returning mathematical differences using the `return` keyword.
* **Data Flow Processing**: Aggregates mathematical data structures, passing final evaluations out to the user console inside the inspector framework using clear visual labels.
