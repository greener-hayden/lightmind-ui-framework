import { ui } from "./registry-ui"
import { styles } from "./registry-styles"
import { categories } from "./registry-categories"
import type { RegistryItem, Registry } from "./schema"

export const registry: Registry = {
  items: ui,
}

export function getRegistryItem(name: string): RegistryItem | undefined {
  return registry.items.find((item) => item.name === name)
}

export function getRegistryItemsByCategory(category: string): RegistryItem[] {
  return registry.items.filter((item) => item.meta?.category === category)
}

export function getRegistryItemsByType(type: RegistryItem["type"]): RegistryItem[] {
  return registry.items.filter((item) => item.type === type)
}

export { ui, styles, categories }
export type { RegistryItem, Registry } from "./schema"