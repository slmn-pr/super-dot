export const isRouteActive = (href: string, pathname: string) => {
  if (href === "/app") {
    return pathname === "/app";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};
