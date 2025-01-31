SRC
|   App.css
|   App.jsx
|   index.css
|   main.jsx
|   
+---assets
|       react.svg
|       
+---auth
|   |   AuthPage.jsx
|   |   index.js
|   |   RequireAuth.jsx
|   |   useAuthContext.js
|   |   _helpers.js
|   |   _models.js
|   |   
|   +---pages
|   |   \---jwt
|   |       |   AddMember.jsx
|   |       |   CheckEmail.jsx
|   |       |   index.js
|   |       |   Login.jsx
|   |       |   TwoFactorAuth.jsx
|   |       |   
|   |       \---reset-password
|   |               index.js
|   |               ResetPassword.jsx
|   |               ResetPasswordChange.jsx
|   |               ResetPasswordChanged.jsx
|   |               ResetPasswordCheckEmail.jsx
|   |               ResetPasswordEnterEmail.jsx
|   |               
|   \---providers
|           JWTProvider.jsx
|           
+---components
|   |   index.js
|   |   
|   +---accordion
|   |       Accordion.jsx
|   |       AccordionItem.jsx
|   |       index.js
|   |       
|   +---alert
|   |       Alert.jsx
|   |       index.js
|   |       
|   +---badge
|   +---container
|   |       Container.jsx
|   |       index.js
|   |       
|   +---data-grid
|   |       DataGrid.jsx
|   |       DataGridColumnFilter.jsx
|   |       DataGridColumnHeader.jsx
|   |       DataGridColumnVisibility.jsx
|   |       DataGridContext.jsx
|   |       DataGridEmpty.jsx
|   |       DataGridInner.jsx
|   |       DataGridLoader.jsx
|   |       DataGridPagination.jsx
|   |       DataGridRowSelect.jsx
|   |       DataGridRowSelectAll.jsx
|   |       DataGridTable.jsx
|   |       DataGridToolbar.jsx
|   |       index.js
|   |       
|   +---drawer
|   |       Drawer.jsx
|   |       index.js
|   |       
|   +---image-input
|   |       ImageInput.jsx
|   |       index.js
|   |       utils.js
|   |       
|   +---keenicons
|   |   |   index.js
|   |   |   KeenIcons.jsx
|   |   |   
|   |   \---assets
|   |       |   styles.css
|   |       |   
|   |       +---duotone
|   |       |   |   demo.html
|   |       |   |   Read Me.txt
|   |       |   |   selection.json
|   |       |   |   style.css
|   |       |   |   
|   |       |   +---demo-files
|   |       |   |       demo.css
|   |       |   |       demo.js
|   |       |   |       
|   |       |   \---fonts
|   |       |           keenicons-duotone.svg
|   |       |           keenicons-duotone.ttf
|   |       |           keenicons-duotone.woff
|   |       |           
|   |       +---filled
|   |       |   |   demo.html
|   |       |   |   Read Me.txt
|   |       |   |   selection.json
|   |       |   |   style.css
|   |       |   |   
|   |       |   +---demo-files
|   |       |   |       demo.css
|   |       |   |       demo.js
|   |       |   |       
|   |       |   \---fonts
|   |       |           keenicons-filled.svg
|   |       |           keenicons-filled.ttf
|   |       |           keenicons-filled.woff
|   |       |           
|   |       +---outline
|   |       |   |   demo.html
|   |       |   |   Read Me.txt
|   |       |   |   selection.json
|   |       |   |   style.css
|   |       |   |   
|   |       |   +---demo-files
|   |       |   |       demo.css
|   |       |   |       demo.js
|   |       |   |       
|   |       |   \---fonts
|   |       |           keenicons-outline.svg
|   |       |           keenicons-outline.ttf
|   |       |           keenicons-outline.woff
|   |       |           
|   |       \---solid
|   |           |   demo.html
|   |           |   Read Me.txt
|   |           |   selection.json
|   |           |   style.css
|   |           |   
|   |           +---demo-files
|   |           |       demo.css
|   |           |       demo.js
|   |           |       
|   |           \---fonts
|   |                   keenicons-solid.svg
|   |                   keenicons-solid.ttf
|   |                   keenicons-solid.woff
|   |                   
|   +---loaders
|   |       ContentLoader.jsx
|   |       index.js
|   |       ProgressBarLoader.jsx
|   |       ScreenLoader.jsx
|   |       
|   +---menu
|   |   |   index.js
|   |   |   Menu.jsx
|   |   |   MenuArrow.jsx
|   |   |   MenuBadge.jsx
|   |   |   MenuBullet.jsx
|   |   |   MenuHeading.jsx
|   |   |   MenuIcon.jsx
|   |   |   MenuItem.jsx
|   |   |   MenuLabel.jsx
|   |   |   MenuLink.jsx
|   |   |   MenuSeparator.jsx
|   |   |   MenuSub.jsx
|   |   |   MenuTitle.jsx
|   |   |   MenuToggle.jsx
|   |   |   utils.js
|   |   |   
|   |   \---hooks
|   |           useMenuBreadcrumbs.js
|   |           useMenuChildren.js
|   |           useMenuCurrentItem.js
|   |           
|   +---modal
|   |       index.js
|   |       Modal.jsx
|   |       ModalBackdrop.jsx
|   |       ModalBody.jsx
|   |       ModalContent.jsx
|   |       ModalHeader.jsx
|   |       ModalTitle.jsx
|   |       
|   +---scrollspy
|   |       index.js
|   |       Scrollspy.jsx
|   |       
|   +---snackbar
|   |       index.js
|   |       SolidSnackbar.jsx
|   |       
|   +---tabs
|   |       index.js
|   |       Tab.jsx
|   |       TabPanel.jsx
|   |       Tabs.jsx
|   |       TabsList.jsx
|   |       
|   +---tooltip
|   |       index.js
|   |       Tooltip.jsx
|   |       
|   \---ui
|           avatar.jsx
|           badge.jsx
|           breadcrumb.jsx
|           button.jsx
|           calendar.jsx
|           card.jsx
|           checkbox.jsx
|           collapsible.jsx
|           command.jsx
|           dialog.jsx
|           dropdown-menu.jsx
|           input.jsx
|           popover.jsx
|           scroll-area.jsx
|           select.jsx
|           separator.jsx
|           sheet.jsx
|           skeleton.jsx
|           slider.jsx
|           sonner.jsx
|           switch.jsx
|           table.jsx
|           textarea.jsx
|           tooltip.jsx
|           
+---config
|       general.config.js
|       index.js
|       menu.config.jsx
|       settings.config.js
|       
+---constants
|       userRole.js
|       validation.js
|       
+---errors
|       Error404Page.jsx
|       Error500Page.jsx
|       ErrorsRouting.jsx
|       index.js
|       
+---hooks
|       index.js
|       useBodyClasses.js
|       useIsMounted.js
|       useMatchPath.js
|       useMediaQuery.js
|       useResponsive.js
|       useResponsiveProp.js
|       useScrollPosition.js
|       useViewport.js
|       
+---i18n
|   |   config.jsx
|   |   index.js
|   |   
|   \---messages
|           ar.json
|           en.json
|           fr.json
|           zh.json
|           
+---layouts
|   +---auth
|   |       AuthLayout.jsx
|   |       AuthLayoutConfig.js
|   |       AuthLayoutProvider.jsx
|   |       index.js
|   |       
|   +---auth-branded
|   |       AuthBrandedLayout.jsx
|   |       AuthBrandedLayoutConfig.js
|   |       AuthBrandedLayoutProvider.jsx
|   |       index.js
|   |       
|   +---demo1
|   |   |   Demo1Layout.jsx
|   |   |   Demo1LayoutConfig.js
|   |   |   Demo1LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---breadcrumbs
|   |   |       Breadcrumbs.jsx
|   |   |       index.js
|   |   |       
|   |   +---content
|   |   |       Content.jsx
|   |   |       index.js
|   |   |       
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---mega-menu
|   |   |       index.js
|   |   |       MegaMenu.jsx
|   |   |       MegaMenuInner.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarContent.jsx
|   |   |       SidebarHeader.jsx
|   |   |       SidebarMenu.jsx
|   |   |       SidebarToggle.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo10
|   |   |   Demo10Layout.jsx
|   |   |   Demo10LayoutConfig.js
|   |   |   Demo10LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarFooter.jsx
|   |   |       SidebarHeader.jsx
|   |   |       SidebarMenu.jsx
|   |   |       SidebarMenuPrimary.jsx
|   |   |       SidebarMenuSecondary.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           ToolbarMenu.jsx
|   |           
|   +---demo2
|   |   |   Demo2Layout.jsx
|   |   |   Demo2LayoutConfig.js
|   |   |   Demo2LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---navbar
|   |   |       index.js
|   |   |       Navbar.jsx
|   |   |       NavbarLinks.jsx
|   |   |       NavbarMenu.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo3
|   |   |   Demo3Layout.jsx
|   |   |   Demo3LayoutConfig.js
|   |   |   Demo3LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---navbar
|   |   |       index.js
|   |   |       Navbar.jsx
|   |   |       NavbarLinks.jsx
|   |   |       NavbarMenu.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo4
|   |   |   Demo4Layout.jsx
|   |   |   Demo4LayoutConfig.js
|   |   |   Demo4LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarMenuDashboard.jsx
|   |   |       SidebarMenuDefault.jsx
|   |   |       SidebarPrimary.jsx
|   |   |       SidebarSecondary.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo5
|   |   |   Demo5Layout.jsx
|   |   |   Demo5LayoutConfig.js
|   |   |   Demo5LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---navbar
|   |   |       index.js
|   |   |       Navbar.jsx
|   |   |       NavbarMenu.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarMenuDashboard.jsx
|   |   |       SidebarMenuDefault.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo6
|   |   |   Demo6Layout.jsx
|   |   |   Demo6LayoutConfig.js
|   |   |   Demo6LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarFooter.jsx
|   |   |       SidebarHeader.jsx
|   |   |       SidebarMenu.jsx
|   |   |       SidebarMenuPrimary.jsx
|   |   |       SidebarMenuSecondary.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           ToolbarMenu.jsx
|   |           
|   +---demo7
|   |   |   Demo7Layout.jsx
|   |   |   Demo7LayoutConfig.js
|   |   |   Demo7LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---mega-menu
|   |   |       index.js
|   |   |       MegaMenu.jsx
|   |   |       MegaMenuInner.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo8
|   |   |   Demo8Layout.jsx
|   |   |   Demo8LayoutConfig.js
|   |   |   Demo8LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---sidebar
|   |   |       index.js
|   |   |       Sidebar.jsx
|   |   |       SidebarMenu.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   +---demo9
|   |   |   Demo9Layout.jsx
|   |   |   Demo9LayoutConfig.js
|   |   |   Demo9LayoutProvider.jsx
|   |   |   index.js
|   |   |   
|   |   +---footer
|   |   |       Footer.jsx
|   |   |       index.js
|   |   |       
|   |   +---header
|   |   |       Header.jsx
|   |   |       HeaderLogo.jsx
|   |   |       HeaderSearch.jsx
|   |   |       HeaderTopbar.jsx
|   |   |       index.js
|   |   |       
|   |   +---main
|   |   |       index.js
|   |   |       Main.jsx
|   |   |       
|   |   +---mega-menu
|   |   |       index.js
|   |   |       MegaMenu.jsx
|   |   |       MegaMenuInner.jsx
|   |   |       
|   |   +---navbar
|   |   |       index.js
|   |   |       Navbar.jsx
|   |   |       
|   |   \---toolbar
|   |           index.js
|   |           Toolbar.jsx
|   |           ToolbarActions.jsx
|   |           ToolbarBreadcrumbs.jsx
|   |           ToolbarHeading.jsx
|   |           
|   \---errors
|           ErrorsLayout.jsx
|           ErrorsLayoutConfig.js
|           ErrorsLayoutProvider.jsx
|           index.js
|           
+---lib
|       helpers.js
|       utils.js
|       
+---pages
|   +---account
|   |   |   index.js
|   |   |   PageNavbar.jsx
|   |   |   
|   |   +---activity
|   |   |       AccountActivityContent.jsx
|   |   |       AccountActivityPage.jsx
|   |   |       index.js
|   |   |       
|   |   +---api-keys
|   |   |   |   AccountApiKeysContent.jsx
|   |   |   |   AccountApiKeysPage.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |       |   index.js
|   |   |       |   Webhooks.jsx
|   |   |       |   
|   |   |       \---api-integrations
|   |   |               ApiIntegrations.jsx
|   |   |               ApiIntegrationsData.jsx
|   |   |               index.js
|   |   |               
|   |   +---appearance
|   |   |   |   AccountAppearanceContent.jsx
|   |   |   |   AccountAppearancePage.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |       |   Accessibility.jsx
|   |   |       |   DisableDefaultBrand.jsx
|   |   |       |   index.js
|   |   |       |   Webhooks.jsx
|   |   |       |   
|   |   |       \---api-integrations
|   |   |               ApiIntegrations.jsx
|   |   |               ApiIntegrationsData.jsx
|   |   |               index.js
|   |   |               
|   |   +---billing
|   |   |   |   index.js
|   |   |   |   
|   |   |   +---basic
|   |   |   |   |   AccountBasicContent.jsx
|   |   |   |   |   AccountBasicPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           Details.jsx
|   |   |   |           index.js
|   |   |   |           Invoicing.jsx
|   |   |   |           PaymentMethods.jsx
|   |   |   |           Plan.jsx
|   |   |   |           
|   |   |   +---enterprise
|   |   |   |   |   AccountEnterpriseContent.jsx
|   |   |   |   |   AccountEnterprisePage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           BillingInvoicing.jsx
|   |   |   |           CompanyProfile.jsx
|   |   |   |           index.js
|   |   |   |           LatestPayment.jsx
|   |   |   |           NextPayment.jsx
|   |   |   |           Upgrade.jsx
|   |   |   |           
|   |   |   +---history
|   |   |   |   |   AccountHistoryContent.jsx
|   |   |   |   |   AccountHistoryPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |       |   index.js
|   |   |   |       |   
|   |   |   |       \---invoicing
|   |   |   |               index.js
|   |   |   |               Invoicing.jsx
|   |   |   |               InvoicingData.jsx
|   |   |   |               
|   |   |   \---plans
|   |   |       |   AccountPlansContent.jsx
|   |   |       |   AccountPlansPage.jsx
|   |   |       |   index.js
|   |   |       |   
|   |   |       \---blocks
|   |   |               index.js
|   |   |               Plans.jsx
|   |   |               
|   |   +---home
|   |   |   |   index.js
|   |   |   |   
|   |   |   +---company-profile
|   |   |   |   |   AccountCompanyProfileContent.jsx
|   |   |   |   |   AccountCompanyProfilePage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           AccountSettings.jsx
|   |   |   |           Branding.jsx
|   |   |   |           DataImport.jsx
|   |   |   |           GeneralInfo.jsx
|   |   |   |           index.js
|   |   |   |           Members.jsx
|   |   |   |           
|   |   |   +---get-started
|   |   |   |   |   AccountGetStartedContent.jsx
|   |   |   |   |   AccountGetStartedPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           index.js
|   |   |   |           Options.jsx
|   |   |   |           
|   |   |   +---settings-enterprise
|   |   |   |   |   AccountSettingsEnterpriseContent.jsx
|   |   |   |   |   AccountSettingsEnterprisePage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           Account.jsx
|   |   |   |           AuthTwoFactor.jsx
|   |   |   |           Connections.jsx
|   |   |   |           index.js
|   |   |   |           PaymentHistory.jsx
|   |   |   |           SetGoal.jsx
|   |   |   |           Upgrade.jsx
|   |   |   |           YourCurrentPlan.jsx
|   |   |   |           
|   |   |   +---settings-modal
|   |   |   |       AccountSettingsModal.jsx
|   |   |   |       AccountSettingsModalPage.jsx
|   |   |   |       AccountSettingsModal_.jsx
|   |   |   |       index.js
|   |   |   |       
|   |   |   +---settings-plain
|   |   |   |   |   AccountSettingsPlainContent.jsx
|   |   |   |   |   AccountSettingsPlainPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           BasicSettings.jsx
|   |   |   |           index.js
|   |   |   |           Password.jsx
|   |   |   |           
|   |   |   +---settings-sidebar
|   |   |   |   |   AccountSettingsSidebar.jsx
|   |   |   |   |   AccountSettingsSidebarContent.jsx
|   |   |   |   |   AccountSettingsSidebarPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           AdvancedSettingsAddress.jsx
|   |   |   |           AdvancedSettingsAppearance.jsx
|   |   |   |           AdvancedSettingsNotifications.jsx
|   |   |   |           AdvancedSettingsPreferences.jsx
|   |   |   |           AuthEmail.jsx
|   |   |   |           AuthPassword.jsx
|   |   |   |           AuthSingleSingOn.jsx
|   |   |   |           AuthSocialSignIn.jsx
|   |   |   |           AuthTwoFactor.jsx
|   |   |   |           BasicSettings.jsx
|   |   |   |           DeleteAccount.jsx
|   |   |   |           ExternalServicesIntegrations.jsx
|   |   |   |           ExternalServicesManageApi.jsx
|   |   |   |           index.js
|   |   |   |           
|   |   |   \---user-profile
|   |   |       |   AccountUserProfileContent.jsx
|   |   |       |   AccountUserProfilePage.jsx
|   |   |       |   index.js
|   |   |       |   
|   |   |       \---blocks
|   |   |               BasicSettings.jsx
|   |   |               CalendarAccounts.jsx
|   |   |               CommunityBadges.jsx
|   |   |               Connections.jsx
|   |   |               index.js
|   |   |               PersonalInfo.jsx
|   |   |               StartNow.jsx
|   |   |               Work.jsx
|   |   |               
|   |   +---integrations
|   |   |   |   AccountIntegrationsContent.jsx
|   |   |   |   AccountIntegrationsPage.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |           index.js
|   |   |           Integrations.jsx
|   |   |           
|   |   +---invite-a-friend
|   |   |   |   AccountInviteAFriendContent.jsx
|   |   |   |   AccountInviteAFriendPage.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |       |   index.js
|   |   |       |   InvitePeople.jsx
|   |   |       |   
|   |   |       \---invites
|   |   |               index.js
|   |   |               Invites.jsx
|   |   |               InvitesData.jsx
|   |   |               
|   |   +---members
|   |   |   |   index.js
|   |   |   |   
|   |   |   +---import-members
|   |   |   |   |   AccountImportMembersContent.jsx
|   |   |   |   |   AccountImportMembersPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           Import.jsx
|   |   |   |           index.js
|   |   |   |           
|   |   |   +---members-starter
|   |   |   |       AccountMembersStarterContent.jsx
|   |   |   |       AccountMembersStarterPage.jsx
|   |   |   |       index.js
|   |   |   |       
|   |   |   +---permissions-check
|   |   |   |   |   AccountPermissionsCheckContent.jsx
|   |   |   |   |   AccountPermissionsCheckPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           index.js
|   |   |   |           PermissionsCheck.jsx
|   |   |   |           
|   |   |   +---permissions-toggle
|   |   |   |   |   AccountPermissionsToggleContent.jsx
|   |   |   |   |   AccountPermissionsTogglePage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |       |   index.js
|   |   |   |       |   PermissionsToggle.jsx
|   |   |   |       |   
|   |   |   |       \---members
|   |   |   |               index.js
|   |   |   |               Members.jsx
|   |   |   |               MembersData.jsx
|   |   |   |               
|   |   |   +---roles
|   |   |   |   |   AccountRolesContent.jsx
|   |   |   |   |   AccountRolesPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |           index.js
|   |   |   |           Roles.jsx
|   |   |   |           
|   |   |   +---team-info
|   |   |   |   |   AccountTeamInfoContent.jsx
|   |   |   |   |   AccountTeamInfoPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |       |   ConnectedProfiles.jsx
|   |   |   |       |   index.js
|   |   |   |       |   Seats.jsx
|   |   |   |       |   TeamInfo.jsx
|   |   |   |       |   
|   |   |   |       \---members
|   |   |   |               index.js
|   |   |   |               Members.jsx
|   |   |   |               MembersData.jsx
|   |   |   |               
|   |   |   +---team-members
|   |   |   |   |   AccountTeamMembersContent.jsx
|   |   |   |   |   AccountTeamMembersPage.jsx
|   |   |   |   |   index.js
|   |   |   |   |   
|   |   |   |   \---blocks
|   |   |   |       |   index.js
|   |   |   |       |   InvitePeople.jsx
|   |   |   |       |   InviteWithLink.jsx
|   |   |   |       |   
|   |   |   |       \---members
|   |   |   |               index.js
|   |   |   |               Members.jsx
|   |   |   |               MembersData.jsx
|   |   |   |               
|   |   |   +---team-starter
|   |   |   |       AccountTeamsStarterContent.jsx
|   |   |   |       AccountTeamsStarterPage.jsx
|   |   |   |       index.js
|   |   |   |       
|   |   |   \---teams
|   |   |       |   AccountTeamsContent.jsx
|   |   |       |   AccountTeamsPage.jsx
|   |   |       |   index.js
|   |   |       |   
|   |   |       \---blocks
|   |   |           |   index.js
|   |   |           |   
|   |   |           \---teams
|   |   |                   index.js
|   |   |                   Teams.jsx
|   |   |                   TeamsData.jsx
|   |   |                   
|   |   +---notifications
|   |   |   |   AccountNotificationsContent.jsx
|   |   |   |   AccountNotificationsPage.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |           Channels.jsx
|   |   |           DoNotDistrub.jsx
|   |   |           index.js
|   |   |           OtherNotifications.jsx
|   |   |           
|   |   \---security
|   |       |   index.js
|   |       |   
|   |       +---allowed-ip-addresses
|   |       |   |   AccountAllowedIPAddressesContent.jsx
|   |       |   |   AccountAllowedIPAddressesPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |       |   index.js
|   |       |       |   
|   |       |       \---ip-addresses
|   |       |               index.js
|   |       |               IPAddresses.jsx
|   |       |               IPAddressesData.jsx
|   |       |               
|   |       +---backup-and-recovery
|   |       |   |   AccountBackupAndRecoveryContent.jsx
|   |       |   |   AccountBackupAndRecoveryPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |       |   BackupSettings.jsx
|   |       |       |   index.js
|   |       |       |   
|   |       |       \---backups
|   |       |               Backup.jsx
|   |       |               BackupData.jsx
|   |       |               index.js
|   |       |               
|   |       +---current-sessions
|   |       |   |   AccountCurrentSessionsContent.jsx
|   |       |   |   AccountCurrentSessionsPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |       |   index.js
|   |       |       |   
|   |       |       \---current-sessions
|   |       |               CurrentSessions.jsx
|   |       |               CurrentSessionsData.jsx
|   |       |               index.js
|   |       |               
|   |       +---device-management
|   |       |   |   AccountDeviceManagementContent.jsx
|   |       |   |   AccountDeviceManagementPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |       |   index.js
|   |       |       |   
|   |       |       \---device
|   |       |               device.jsx
|   |       |               deviceData.js
|   |       |               index.js
|   |       |               
|   |       +---get-started
|   |       |       AccountSecurityGetStartedContent.jsx
|   |       |       AccountSecurityGetStartedPage.jsx
|   |       |       index.js
|   |       |       
|   |       +---overview
|   |       |   |   AccountOverviewContent.jsx
|   |       |   |   AccountOverviewPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |           Authentification.jsx
|   |       |           GeneralSettings.jsx
|   |       |           index.js
|   |       |           LoginSessions.jsx
|   |       |           ProductInsight.jsx
|   |       |           QuickSettings.jsx
|   |       |           TrustedDevices.jsx
|   |       |           
|   |       +---privacy-settings
|   |       |   |   AccountPrivacySettingsContent.jsx
|   |       |   |   AccountPrivacySettingsPage.jsx
|   |       |   |   index.js
|   |       |   |   
|   |       |   \---blocks
|   |       |           BlockList.jsx
|   |       |           index.js
|   |       |           ManageData.jsx
|   |       |           PrivacySettings.jsx
|   |       |           ReportSettings.jsx
|   |       |           
|   |       \---security-log
|   |           |   AccountSecurityLogContent.jsx
|   |           |   AccountSecurityLogPage.jsx
|   |           |   index.js
|   |           |   
|   |           \---blocks
|   |               |   index.js
|   |               |   
|   |               \---security-log
|   |                       index.js
|   |                       SecurityLog.jsx
|   |                       SecurityLogData.jsx
|   |                       
|   +---authentication
|   |   |   index.js
|   |   |   
|   |   +---account-deactivated
|   |   |       AuthenticationAccountDeactivatedPage.jsx
|   |   |       index.js
|   |   |       
|   |   +---get-started
|   |   |       AuthenticationGetStartedPage.jsx
|   |   |       index.js
|   |   |       
|   |   \---welcome-message
|   |           AuthenticationWelcomeMessagePage.jsx
|   |           index.js
|   |           
|   +---dashboards
|   |   |   index.js
|   |   |   
|   |   +---DashboardOverview
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---dark-sidebar
|   |   |       |   DashboardOverviewContent.jsx
|   |   |       |   DashboardOverviewPage.jsx
|   |   |       |   
|   |   |       \---blocks
|   |   |           |   ChannelStats.jsx
|   |   |           |   EarningsChart.jsx
|   |   |           |   EntryCallout.jsx
|   |   |           |   Highlights.jsx
|   |   |           |   index.js
|   |   |           |   TeamMeeting.jsx
|   |   |           |   
|   |   |           \---teams
|   |   |                   index.js
|   |   |                   Teams.jsx
|   |   |                   TeamUsers.jsx
|   |   |                   
|   |   +---default
|   |   |       DefaultPage.jsx
|   |   |       index.js
|   |   |       
|   |   +---demo2
|   |   |   |   Demo2Content.jsx
|   |   |   |   Demo2Page.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |           index.js
|   |   |           Integrations.jsx
|   |   |           ManageData.jsx
|   |   |           MyBalance.jsx
|   |   |           Options.jsx
|   |   |           
|   |   +---demo3
|   |   |   |   Demo3Content.jsx
|   |   |   |   Demo3Page.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---blocks
|   |   |           index.js
|   |   |           Integrations.jsx
|   |   |           
|   |   +---demo4
|   |   |       Demo4Content.jsx
|   |   |       Demo4Page.jsx
|   |   |       index.js
|   |   |       
|   |   \---demo5
|   |       |   Demo5Content.jsx
|   |       |   Demo5Page.jsx
|   |       |   index.js
|   |       |   
|   |       \---blocks
|   |               index.js
|   |               Options.jsx
|   |               
|   +---network
|   |   |   index.js
|   |   |   
|   |   +---get-started
|   |   |   |   index.js
|   |   |   |   NetworkGetStartedContent.jsx
|   |   |   |   NetworkGetStartedPage.jsx
|   |   |   |   
|   |   |   \---blocks
|   |   |           index.js
|   |   |           Options.jsx
|   |   |           
|   |   +---user-cards
|   |   |   |   index.js
|   |   |   |   
|   |   |   +---author
|   |   |   |       index.js
|   |   |   |       NetworkAuthorContent.jsx
|   |   |   |       NetworkAuthorPage.jsx
|   |   |   |       
|   |   |   +---mini-cards
|   |   |   |       index.js
|   |   |   |       NetworkMiniCardsContent.jsx
|   |   |   |       NetworkMiniCardsPage.jsx
|   |   |   |       
|   |   |   +---nft
|   |   |   |       index.js
|   |   |   |       NetworkNFTContent.jsx
|   |   |   |       NetworkNFTPage.jsx
|   |   |   |       
|   |   |   +---social
|   |   |   |       index.js
|   |   |   |       NetworkSocialContent.jsx
|   |   |   |       NetworkSocialPage.jsx
|   |   |   |       
|   |   |   \---team-crew
|   |   |           index.js
|   |   |           NetworkUserCardsTeamCrewContent.jsx
|   |   |           NetworkUserCardsTeamCrewPage.jsx
|   |   |           
|   |   \---user-table
|   |       |   index.js
|   |       |   
|   |       +---app-roster
|   |       |   |   index.js
|   |       |   |   NetworkAppRosterContent.jsx
|   |       |   |   NetworkAppRosterPage.jsx
|   |       |   |   
|   |       |   \---blocks
|   |       |       \---users
|   |       |               index.js
|   |       |               Users.jsx
|   |       |               UsersData.jsx
|   |       |               
|   |       +---market-authors
|   |       |   |   index.js
|   |       |   |   NetworkMarketAuthorsContent.jsx
|   |       |   |   NetworkMarketAuthorsPage.jsx
|   |       |   |   
|   |       |   \---blocks
|   |       |       \---users
|   |       |               index.js
|   |       |               Users.jsx
|   |       |               UsersData.jsx
|   |       |               
|   |       +---saas-users
|   |       |   |   index.js
|   |       |   |   NetworkSaasUsersContent.jsx
|   |       |   |   NetworkSaasUsersPage.jsx
|   |       |   |   
|   |       |   \---blocks
|   |       |       \---users
|   |       |               index.js
|   |       |               Users.jsx
|   |       |               UsersData.jsx
|   |       |               
|   |       +---store-clients
|   |       |   |   index.js
|   |       |   |   NetworkStoreClientsContent.jsx
|   |       |   |   NetworkStoreClientsPage.jsx
|   |       |   |   
|   |       |   \---blocks
|   |       |       \---store-clients
|   |       |               index.js
|   |       |               StoreClients.jsx
|   |       |               StoreClientsData.jsx
|   |       |               
|   |       +---team-crew
|   |       |   |   index.js
|   |       |   |   NetworkUserTableTeamCrewContent.jsx
|   |       |   |   NetworkUserTableTeamCrewPage.jsx
|   |       |   |   
|   |       |   \---blocks
|   |       |       \---users
|   |       |               index.js
|   |       |               Users.jsx
|   |       |               UsersData.jsx
|   |       |               
|   |       \---visitors
|   |           |   index.js
|   |           |   NetworkVisitorsContent.jsx
|   |           |   NetworkVisitorsPage.jsx
|   |           |   
|   |           \---blocks
|   |               \---visitors
|   |                       index.js
|   |                       Visitors.jsx
|   |                       VisitorsData.jsx
|   |                       
|   \---public-profile
|       |   index.js
|       |   PageMenu.jsx
|       |   
|       +---activity
|       |       index.js
|       |       ProfileActivityContent.jsx
|       |       ProfileActivityPage.jsx
|       |       
|       +---campaigns
|       |   |   index.js
|       |   |   
|       |   +---card
|       |   |       CampaignsCardPage.jsx
|       |   |       CampaignsContent.jsx
|       |   |       index.js
|       |   |       
|       |   \---list
|       |           CampaignsListPage.jsx
|       |           
|       +---empty
|       |   |   index.js
|       |   |   ProfileEmptyPage.jsx
|       |   |   
|       |   \---blocks
|       |           Empty.jsx
|       |           index.js
|       |           
|       +---network
|       |   |   index.js
|       |   |   ProfileNetworkPage.jsx
|       |   |   
|       |   \---blocks
|       |           index.js
|       |           Network.jsx
|       |           
|       +---profiles
|       |   |   index.js
|       |   |   
|       |   +---blogger
|       |   |   |   index.js
|       |   |   |   ProfileBloggerContent.jsx
|       |   |   |   ProfileBloggerPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           Activity.jsx
|       |   |           Collaborate.jsx
|       |   |           index.js
|       |   |           Posts.jsx
|       |   |           Replies.jsx
|       |   |           
|       |   +---company
|       |   |   |   index.js
|       |   |   |   ProfileCompanyContent.jsx
|       |   |   |   ProfileCompanyPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           CompanyProfile.jsx
|       |   |           Highlights.jsx
|       |   |           index.js
|       |   |           Locations.jsx
|       |   |           Network.jsx
|       |   |           OpenJobs.jsx
|       |   |           Statistics.jsx
|       |   |           
|       |   +---creator
|       |   |   |   index.js
|       |   |   |   ProfileCreatorContent.jsx
|       |   |   |   ProfileCreatorPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           Activities.jsx
|       |   |           FeaturesHighlight.jsx
|       |   |           index.js
|       |   |           Statistics.jsx
|       |   |           Summary.jsx
|       |   |           Tags.jsx
|       |   |           UpcomingEvents.jsx
|       |   |           Users.jsx
|       |   |           Works.jsx
|       |   |           
|       |   +---crm
|       |   |   |   index.js
|       |   |   |   ProfileCRMContent.jsx
|       |   |   |   ProfileCRMPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           Activity.jsx
|       |   |           ApiCredentials.jsx
|       |   |           Attributes.jsx
|       |   |           Deals.jsx
|       |   |           GeneralInfo.jsx
|       |   |           index.js
|       |   |           RecentInvoices.jsx
|       |   |           
|       |   +---default
|       |   |   |   index.js
|       |   |   |   ProfileDefaultContent.jsx
|       |   |   |   ProfileDefaultPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           About.jsx
|       |   |           CommunityBadges.jsx
|       |   |           Connections.jsx
|       |   |           Contributions.jsx
|       |   |           Contributors.jsx
|       |   |           index.js
|       |   |           MediaUploads.jsx
|       |   |           Projects.jsx
|       |   |           RecentUploads.jsx
|       |   |           SalesOverview.jsx
|       |   |           Tags.jsx
|       |   |           UnlockPartnerships.jsx
|       |   |           WorkExperience.jsx
|       |   |           
|       |   +---feeds
|       |   |   |   index.js
|       |   |   |   ProfileFeedsContent.jsx
|       |   |   |   ProfileFeedsPage.jsx
|       |   |   |   
|       |   |   +---blocks
|       |   |   |       index.js
|       |   |   |       Post1.jsx
|       |   |   |       Post2.jsx
|       |   |   |       Post3.jsx
|       |   |   |       Post4.jsx
|       |   |   |       
|       |   |   \---post
|       |   |           Comments.jsx
|       |   |           Heading.jsx
|       |   |           index.js
|       |   |           Likes.jsx
|       |   |           Saves.jsx
|       |   |           Tabs.jsx
|       |   |           
|       |   +---gamer
|       |   |   |   index.js
|       |   |   |   ProfileGamerContent.jsx
|       |   |   |   ProfileGamerPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           About.jsx
|       |   |           Activity.jsx
|       |   |           FavoriteGames.jsx
|       |   |           index.js
|       |   |           NowPlaying.jsx
|       |   |           Statistics.jsx
|       |   |           Tournaments.jsx
|       |   |           
|       |   +---modal
|       |   |       index.js
|       |   |       ProfileModalContent.jsx
|       |   |       ProfileModalPage.jsx
|       |   |       
|       |   +---nft
|       |   |   |   index.js
|       |   |   |   ProfileNFTContent.jsx
|       |   |   |   ProfileNFTPage.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           About.jsx
|       |   |           Assets.jsx
|       |   |           index.js
|       |   |           Network.jsx
|       |   |           Tokens3dArt.jsx
|       |   |           TokensCollected.jsx
|       |   |           TokensCreated.jsx
|       |   |           
|       |   \---plain
|       |       |   index.js
|       |       |   ProfilePlainContent.jsx
|       |       |   ProfilePlainPage.jsx
|       |       |   
|       |       \---blocks
|       |               AboutMe.jsx
|       |               GettingStarted.jsx
|       |               index.js
|       |               OpenToWork.jsx
|       |               
|       +---projects
|       |   |   index.js
|       |   |   
|       |   +---2-columns
|       |   |   |   index.js
|       |   |   |   ProjectColumn2Page.jsx
|       |   |   |   
|       |   |   \---blocks
|       |   |           index.js
|       |   |           Projects.jsx
|       |   |           
|       |   \---3-columns
|       |       |   index.js
|       |       |   ProjectColumn3Page.jsx
|       |       |   
|       |       \---blocks
|       |               index.js
|       |               Projects2.jsx
|       |               
|       +---teams
|       |   |   index.js
|       |   |   ProfileTeamsPage.jsx
|       |   |   
|       |   \---blocks
|       |           index.js
|       |           Teams.jsx
|       |           
|       \---works
|           |   index.js
|           |   ProfileWorksPage.jsx
|           |   
|           +---blocks
|           |       index.js
|           |       Works.jsx
|           |       
|           \---cards
|                   index.js
|                   Offer.jsx
|                   OfferRow.jsx
|                   
+---partials
|   +---activities
|   |   \---items
|   |           ActivitiesAnniversary.jsx
|   |           ActivitiesBlogAnniversary.jsx
|   |           ActivitiesBloggingConference.jsx
|   |           ActivitiesDesignerWelcome.jsx
|   |           ActivitiesFollowersMilestone.jsx
|   |           ActivitiesInterview.jsx
|   |           ActivitiesLogin.jsx
|   |           ActivitiesNewArticle.jsx
|   |           ActivitiesNewProduct.jsx
|   |           ActivitiesNewTeam.jsx
|   |           ActivitiesPhotographyWorkshop.jsx
|   |           ActivitiesProductSpecific.jsx
|   |           ActivitiesProductWebinar.jsx
|   |           ActivitiesProjectStatus.jsx
|   |           ActivitiesUpcomingContent.jsx
|   |           ActivitiesVirtualTeam.jsx
|   |           index.js
|   |           
|   +---cards
|   |       CardAddNew.jsx
|   |       CardAddNewRow.jsx
|   |       CardAuthor.jsx
|   |       CardAuthorRow.jsx
|   |       CardCampaign.jsx
|   |       CardCampaignRow.jsx
|   |       CardConnection.jsx
|   |       CardConnectionRow.jsx
|   |       CardIntegration.jsx
|   |       CardLocation.jsx
|   |       CardNFT.jsx
|   |       CardNFT2.jsx
|   |       CardNFT2Row.jsx
|   |       CardNotification.jsx
|   |       CardNowPlaying.jsx
|   |       CardPost.jsx
|   |       CardProject.jsx
|   |       CardProjectExtended.jsx
|   |       CardProjectExtendedRow.jsx
|   |       CardProjectRow.jsx
|   |       CardRole.jsx
|   |       CardTeam.jsx
|   |       CardTeamRow.jsx
|   |       CardTournament.jsx
|   |       CardUserMini.jsx
|   |       CardUserSocial.jsx
|   |       CardUserSocialRow.jsx
|   |       CardWork.jsx
|   |       CardWorkRow.jsx
|   |       index.js
|   |       
|   +---common
|   |       CommonAvatar.jsx
|   |       CommonAvatars.jsx
|   |       CommonHexagonBadge.jsx
|   |       CommonRating.jsx
|   |       index.js
|   |       
|   +---crud
|   |       CrudAvatarUpload.jsx
|   |       CrudCardFooter.jsx
|   |       CrudDatatableToolbar.jsx
|   |       index.js
|   |       
|   +---dropdowns
|   |   +---apps
|   |   |       DropdownApps.jsx
|   |   |       index.js
|   |   |       
|   |   +---chat
|   |   |       DropdownChat.jsx
|   |   |       DropdownChatMessageIn.jsx
|   |   |       DropdownChatMessageOut.jsx
|   |   |       index.js
|   |   |       types.jsx
|   |   |       
|   |   +---general
|   |   |       DropdownCard1.jsx
|   |   |       DropdownCard2.jsx
|   |   |       DropdownCardItem1.jsx
|   |   |       DropdownCardItem2.jsx
|   |   |       DropdownCrud1.jsx
|   |   |       DropdownCrud2.jsx
|   |   |       DropdownCrudItem1.jsx
|   |   |       DropdownCrudItem2.jsx
|   |   |       index.js
|   |   |       
|   |   +---notifications
|   |   |   |   DropdownNotifications.jsx
|   |   |   |   DropdownNotificationsAll.jsx
|   |   |   |   DropdownNotificationsFollowing.jsx
|   |   |   |   DropdownNotificationsInbox.jsx
|   |   |   |   DropdownNotificationsTeam.jsx
|   |   |   |   index.js
|   |   |   |   
|   |   |   \---items
|   |   |           DropdownNotificationsItem1.jsx
|   |   |           DropdownNotificationsItem10.jsx
|   |   |           DropdownNotificationsItem11.jsx
|   |   |           DropdownNotificationsItem12.jsx
|   |   |           DropdownNotificationsItem13.jsx
|   |   |           DropdownNotificationsItem14.jsx
|   |   |           DropdownNotificationsItem15.jsx
|   |   |           DropdownNotificationsItem16.jsx
|   |   |           DropdownNotificationsItem17.jsx
|   |   |           DropdownNotificationsItem2.jsx
|   |   |           DropdownNotificationsItem3.jsx
|   |   |           DropdownNotificationsItem4.jsx
|   |   |           DropdownNotificationsItem5.jsx
|   |   |           DropdownNotificationsItem6.jsx
|   |   |           DropdownNotificationsItem7.jsx
|   |   |           DropdownNotificationsItem8.jsx
|   |   |           DropdownNotificationsItem9.jsx
|   |   |           index.js
|   |   |           
|   |   \---user
|   |           DropdownUser.jsx
|   |           DropdownUserLanguages.jsx
|   |           index.js
|   |           
|   +---heros
|   |       index.js
|   |       UserProfileHero.jsx
|   |       
|   +---menu
|   |   |   index.js
|   |   |   NavbarMenu.jsx
|   |   |   ScrollspyMenu.jsx
|   |   |   
|   |   \---mega-menu
|   |       |   index.js
|   |       |   MegaMenuSubAccount.jsx
|   |       |   MegaMenuSubAuth.jsx
|   |       |   MegaMenuSubHelp.jsx
|   |       |   MegaMenuSubNetwork.jsx
|   |       |   MegaMenuSubProfiles.jsx
|   |       |   
|   |       \---components
|   |               index.js
|   |               MegaMenuFooter.jsx
|   |               MegaMenuSubDefault.jsx
|   |               MegaMenuSubDropdown.jsx
|   |               MegaMenuSubHighlighted.jsx
|   |               
|   +---misc
|   |       index.js
|   |       MiscCreateTeam.jsx
|   |       MiscEngage.jsx
|   |       MiscFaq.jsx
|   |       MiscHelp.jsx
|   |       MiscHelp2.jsx
|   |       MiscHighlightedPosts.jsx
|   |       MiscStarter.jsx
|   |       
|   +---modals
|   |   +---account-deactivated
|   |   |       index.js
|   |   |       ModalAccountDeactivated.jsx
|   |   |       
|   |   +---give-award
|   |   |       index.js
|   |   |       ModalGiveAward.jsx
|   |   |       
|   |   +---profile
|   |   |       index.js
|   |   |       ModalProfile.jsx
|   |   |       
|   |   +---report-user
|   |   |       index.js
|   |   |       ModalReportUser.jsx
|   |   |       
|   |   +---search
|   |   |       index.js
|   |   |       ModalSearch.jsx
|   |   |       ModalSearchDocs.jsx
|   |   |       ModalSearchEmpty.jsx
|   |   |       ModalSearchIntegrations.jsx
|   |   |       ModalSearchMixed.jsx
|   |   |       ModalSearchNoResults.jsx
|   |   |       ModalSearchSettings.jsx
|   |   |       ModalSearchSettingsItems.jsx
|   |   |       ModalSearchUsers.jsx
|   |   |       
|   |   +---share-profile
|   |   |       index.js
|   |   |       ModalShareProfile.jsx
|   |   |       ModalShareProfileSettings.jsx
|   |   |       ModalShareProfileUsers.jsx
|   |   |       ModalShareProfileViaEmail.jsx
|   |   |       ModalShareProfileViaLink.jsx
|   |   |       
|   |   \---welcome-message
|   |           index.js
|   |           ModalWelcomMessage.jsx
|   |           
|   +---navbar
|   |       index.js
|   |       Navbar.jsx
|   |       NavbarActions.jsx
|   |       NavbarDropdown.jsx
|   |       
|   +---timelines
|   |   \---default
|   |       \---item
|   |               index.js
|   |               _TimelinesWrapper.jsx
|   |               
|   \---toolbar
|           index.js
|           Toolbar.jsx
|           ToolbarActions.jsx
|           ToolbarDescription.jsx
|           ToolbarHeading.jsx
|           ToolbarPageTitle.jsx
|           
+---plugins
|   |   plugin.js
|   |   
|   \---components
|           accordion.js
|           apexcharts.js
|           badge.js
|           breakpoints.js
|           btn-group.js
|           btn.js
|           card.js
|           checkbox.js
|           container.js
|           drawer.js
|           dropdown.js
|           file-input.js
|           image-input.js
|           input-group.js
|           input.js
|           leaflet.js
|           menu.js
|           modal.js
|           pagination.js
|           popover.js
|           progress.js
|           radio.js
|           range.js
|           rating.js
|           scrollable.js
|           select.js
|           switch.js
|           table.js
|           tabs.js
|           textarea.js
|           theme.js
|           tooltip.js
|           typography.js
|           
+---providers
|       index.js
|       LayoutProvider.jsx
|       LoadersProvider.jsx
|       MenusProvider.jsx
|       PathnameProvider.jsx
|       ProvidersWrapper.jsx
|       SettingsProvider.jsx
|       SnackbarProvider.jsx
|       TranslationProvider.jsx
|       
+---routing
|       AppRouting.jsx
|       AppRoutingSetup.jsx
|       index.js
|       ProtectedRoute.jsx
|       
+---styles
|   |   globals.css
|   |   shadcn.ui.css
|   |   
|   \---demos
|           demo1.css
|           
\---utils
        Assets.js
        Common.js
        Data.js
        Date.js
        Devices.js
        Dom.js
        index.js
        LocalStorage.js
        Router.js
        String.js
        
