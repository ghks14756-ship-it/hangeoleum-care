---
name: Precision Dashboard
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5b403e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#8f6f6d'
  outline-variant: '#e4beba'
  surface-tint: '#b91a24'
  primary: '#b61722'
  on-primary: '#ffffff'
  primary-container: '#da3437'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ad'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#006765'
  on-tertiary: '#ffffff'
  tertiary-container: '#008280'
  on-tertiary-container: '#f3fffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#87f4f0'
  tertiary-fixed-dim: '#69d8d4'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for high-performance desktop environments where data density and clarity are paramount. The brand personality is authoritative, precise, and utilitarian, aiming to evoke a sense of organized control and professional reliability. 

The aesthetic follows a **Corporate Modern** approach with **Minimalist** sensibilities. It prioritizes function over decoration, utilizing generous whitespace to prevent cognitive overload while using a striking primary red to highlight critical actions and status changes. The interface feels like a high-end tool—efficient, responsive, and uncompromisingly clean.

## Colors
The palette is dominated by a clean white background and a sophisticated range of neutral grays to establish a clear visual hierarchy. 

- **Primary Red (#EF4444):** Reserved for primary actions, alerts, and active status indicators. Its high vibrancy ensures immediate user attention against the neutral backdrop.
- **Secondary Grays:** Used for secondary text, icons, and UI borders to create soft distinctions without adding visual noise.
- **Background/Surface:** A pure white base is complemented by light gray surfaces (Slate-50/100) to define card containers and sidebar regions.

## Typography
**Inter** is the sole typeface for the design system, chosen for its exceptional legibility in data-heavy contexts and its systematic, neutral character. 

- **Headlines:** Use tighter letter-spacing and heavier weights to provide strong anchors for page sections.
- **Body Text:** Optimized for readability with a standard 1.5x line height.
- **Data Labels:** Utilizes a medium weight and slight tracking (letter-spacing) to differentiate metadata from primary content. 
- **Monospace Alternative:** While not defined as a primary font, numeric data should utilize tabular lining (tnum) features of Inter to ensure vertical alignment in tables.

## Layout & Spacing
The design system employs a **12-column fluid grid** for the main content area, constrained by a maximum width of 1440px for optimal readability on large displays.

- **Spacing Rhythm:** An 8px base unit (1rem = 16px) governs all padding and margins. 
- **Gutter & Margins:** A consistent 24px gutter provides breathing room between cards, while 32px outer margins ensure the layout feels balanced.
- **Desktop vs Tablet:** On desktop, the sidebar remains fixed at 280px. On tablet, the sidebar collapses into an icon-only rail or a hamburger menu, and the 12-column grid reflows to 6 or 8 columns.
- **Alignment:** All elements must snap to the 8px grid to maintain visual rigor.

## Elevation & Depth
Hierarchy is established through **Tonal Layering** and **Ambient Shadows**.

- **Level 0 (Background):** Pure white (#FFFFFF) or ultra-light gray (#F8FAFC).
- **Level 1 (Cards/Surface):** White cards sit on Level 0 surfaces. They are defined by a 1px border in a light neutral gray (#E2E8F0).
- **Level 2 (Active/Hover):** When a card or element is interacted with, a soft, diffused shadow is applied (0px 4px 12px rgba(0, 0, 0, 0.05)) to suggest lift.
- **Overlays:** Modals and dropdowns use a more pronounced shadow (0px 10px 25px rgba(0, 0, 0, 0.1)) to separate them clearly from the underlying grid.

## Shapes
The shape language is **Soft** and disciplined. 

- **Components:** Buttons, input fields, and small tags use a 0.25rem (4px) radius. This sharp-but-not-harsh aesthetic reinforces the professional tone.
- **Containers:** Large dashboard cards and modals use a 0.5rem (8px) radius to provide a subtle visual containerization that feels modern.
- **Special Elements:** Status indicators and circular progress bars are the only exceptions, utilizing a full "pill" or 50% radius to contrast against the geometric grid.

## Components
- **Buttons:** Primary buttons use the Primary Red background with white text. Secondary buttons use a white background with a light gray border. Use 4px corner radius and "label-md" typography.
- **Dashboard Cards:** The core building block. Cards feature a 1px border, 8px radius, and 24px internal padding. They should have a clear title in "headline-md".
- **Circular Progress:** Used for KPIs. The active track uses Primary Red, while the background track uses a light neutral gray. The central text displays the percentage in "headline-lg".
- **Input Fields:** Clean, 1px bordered boxes that turn red on focus. Labels sit strictly above the field in "label-sm" gray text.
- **Lists:** Data tables and lists should use alternating row colors (zebra striping) only if the data density is extreme; otherwise, use thin 1px horizontal dividers.
- **Chips/Status:** Small indicators for "Active," "Pending," or "Error." Use low-opacity tints of the status color for the background and high-opacity for the text (e.g., light red background with dark red text).