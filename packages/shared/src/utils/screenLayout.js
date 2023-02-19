export function getScreenTypeLayout({
  width,
  desktopComponent,
  tabletComponent,
  mobileComponent,
}) {
  const isDesktop = width > 850
  const isTablet = width > 600 && width <= 850

  return isDesktop
    ? desktopComponent
    : isTablet
    ? tabletComponent
    : mobileComponent
}
