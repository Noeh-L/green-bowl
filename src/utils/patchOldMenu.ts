import { MenuProduct } from "@/types/Product";

export function patchOldMenu(menu: MenuProduct[]): MenuProduct[] {
  // Check if the menu product's keys are up to date (calories, description, etc...); This is a 'lazy migration'.
  const isUpToDate = menu.every(
    (product) =>
      typeof product.calories === "number" || product.calories === null,
  );

  if (isUpToDate) return menu;

  return menu.map((product) => ({
    ...product,
    calories: product.calories === undefined ? null : product.calories,
  }));
}
