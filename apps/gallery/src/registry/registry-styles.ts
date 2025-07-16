export const styles = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "new-york",
    label: "New York",
  },
  {
    name: "lightmind",
    label: "LightMind",
  },
] as const

export type Style = (typeof styles)[number]