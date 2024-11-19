# Metronic 9 | All-in-One Tailwind-Based React Template for Modern Web Applications

## Metronic v9.1.2 - November 20, 2024

#### New Features
- **Shadcn UI & Radix Integration**: Integrated the most popular React UI kits, Shadcn UI with Radix. [Learn more](https://ui.shadcn.com/).
- **DataGrid Enhancements**: Improved DataGrid with advanced features, including sortable headers, column visibility control, and integrated filters.
- **Date Picker**: Introduced a sleek and functional Date Picker component from Shadcn UI. [Learn more](https://ui.shadcn.com/docs/components/date-picker).
- **Select**: Added the Shadcn UI Select component for enhanced dropdown functionality. [Learn more](https://ui.shadcn.com/docs/components/select).
- **Modal**: Integrated the Shadcn UI Dialog component to replace existing modals, providing a better UI experience. [Learn more](https://ui.shadcn.com/docs/components/dialog).
- **Drawer**: Implemented the Shadcn UI Sheet component for smooth sliding drawer functionality. [Learn more](https://ui.shadcn.com/docs/components/sheet).
- **Toast Notifications**: Added toast notifications using the Shadcn UI Sonner component for intuitive feedback. [Learn more](https://ui.shadcn.com/docs/components/sonner).

#### Updates
- **Select**: Replaced all standard Select controls globally with the Shadcn UI Select component for a consistent experience. [Learn more](https://ui.shadcn.com/docs/components/select).
- **DataGrid**: Upgraded all DataGrid components with advanced sorting, column visibility controls, and filtering capabilities.
- **Modal**: Replaced all MUI modals with the Shadcn UI Dialog component to ensure compatibility and consistency across components.
- **Drawer**: Replaced all MUI drawers with the Shadcn UI Sheet component for better integration and functionality.
- **Menu**: Enhanced Menu component performance for smoother interactions.

#### Bug Fixes
- **Authentication**: Resolved the issue where multiple requests were sent during the first-time load.
- **Sticky Scrollspy Menu**: Fixed the sticky Scrollspy menu issue affecting the settings sidebar. [Preview](https://keenthemes.com/metronic/tailwind/react/demo1/account/home/settings-sidebar).
- **Menu Accordion Mode**: Corrected issues with the Menu component’s accordion mode functionality.


## Metronic v9.1.1 - October 29, 2024

### New Features
- **RTL (Right-to-Left) Support**: Added RTL support for seamless integration with right-to-left languages. [Learn more](https://keenthemes.com/metronic/tailwind/docs/changelog).
- **Language Switch**: Implemented a custom `useLanguage` hook for dynamic language switching.
- **Language Translation**: Integrated `react-intl` and `FormatJS` for robust multi-language support.
- **Alert Component**: Introduced a new `Alert` component to display contextual messages with icons.
- **Password Reset**: [Metronic-Pulse](https://keenthemes.com/products/metronic-pulse) reset password API implementation.

### Updates
- **Global CSS Enhancements**: Updated global CSS classes to fully support RTL direction. [Learn more](https://keenthemes.com/metronic/tailwind/docs/changelog).
- **Password Reset Flow**: Improved the user experience and security of the password reset flow.
- **Form Validation Alerts**: Added alert messages for form validation errors to provide clearer feedback.

### Bug Fixes
- **toAbsoluteUrl()**: Fixed a bug in `toAbsoluteUrl()` that occurred when Vite's `base` property was set to `"/"`.

## Metronic v9.1.0 - October 17, 2024

- **Initial Release**