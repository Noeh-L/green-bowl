import { fakeMenu } from "@/fakeData/fakeMenu";
import { MenuProduct } from "@/types/Product";

export function patchOldMenu(menu: MenuProduct[]): MenuProduct[] {
  // Check if the menu product's keys are up to date (calories, description, etc...); ('lazy migration').
  const isUpToDate = menu.every(
    (product) =>
      (typeof product.calories === "number" || product.calories === null) &&
      typeof product.description === "string",
  );

  if (isUpToDate) return menu;

  return menu.map((product) => {
    // If the product is one of the "default" product (i.e. products in fakeMenu), use its data (calories, description,...) value from fakeMenu.
    const matchingProductFromDefaultMenu = fakeMenu.LARGE.find(
      (defaultProduct) => defaultProduct.id === product.id,
    );

    return {
      ...product,
      calories: matchingProductFromDefaultMenu
        ? matchingProductFromDefaultMenu.calories
        : null,
      description: matchingProductFromDefaultMenu
        ? matchingProductFromDefaultMenu.description
        : "",
    };
  });
}
