import { type RegistryItem } from "./schema"

export const ui: RegistryItem[] = [
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a button or a component that looks like a button.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["button", "interactive", "action"],
    },
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a card with header, content, and footer.",
      category: "display",
      complexity: "simple",
      status: "stable",
      tags: ["card", "container", "layout"],
    },
  },
  {
    name: "input",
    type: "registry:ui",
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a form input field or a component that looks like an input field.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["input", "form", "text"],
    },
  },
  {
    name: "badge",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a badge or a component that looks like a badge.",
      category: "display",
      complexity: "simple",
      status: "stable",
      tags: ["badge", "label", "tag"],
    },
  },
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a callout for user attention.",
      category: "feedback",
      complexity: "simple",
      status: "stable",
      tags: ["alert", "notification", "message"],
    },
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A window overlaid on primary content, rendering content underneath inert.",
      category: "feedback",
      complexity: "medium",
      status: "stable",
      tags: ["dialog", "modal", "overlay"],
    },
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      category: "display",
      complexity: "simple",
      status: "stable",
      tags: ["tooltip", "hover", "popup"],
    },
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: [
      {
        path: "ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
      category: "navigation",
      complexity: "medium",
      status: "stable",
      tags: ["dropdown", "menu", "navigation"],
    },
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays rich content in a portal, triggered by a button.",
      category: "display",
      complexity: "medium",
      status: "stable",
      tags: ["popover", "popup", "overlay"],
    },
  },
  {
    name: "label",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-label"],
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Renders an accessible label associated with controls.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["label", "form", "accessibility"],
    },
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A control that allows the user to toggle between checked and not checked.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["checkbox", "form", "input"],
    },
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["radio", "form", "input"],
    },
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-select"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a list of options for the user to pick from—triggered by a button.",
      category: "form",
      complexity: "medium",
      status: "stable",
      tags: ["select", "form", "dropdown"],
    },
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "Displays a form textarea or a component that looks like a textarea.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["textarea", "form", "input"],
    },
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-switch"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A control that allows the user to toggle between checked and not checked.",
      category: "form",
      complexity: "simple",
      status: "stable",
      tags: ["switch", "toggle", "form"],
    },
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A responsive table component with consistent styling.",
      category: "display",
      complexity: "medium",
      status: "stable",
      tags: ["table", "data", "grid"],
    },
  },
  {
    name: "access-matrix",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    registryDependencies: ["button", "dropdown-menu", "table"],
    files: [
      {
        path: "ui/access-matrix.tsx",
        type: "registry:ui",
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              "access-allowed": "hsl(var(--access-allowed))",
              "access-denied": "hsl(var(--access-denied))",
              "access-partial": "hsl(var(--access-partial))",
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        "access-allowed": "142.1 76.2% 36.3%",
        "access-denied": "0 84.2% 60.2%",
        "access-partial": "47.9 95.8% 53.1%",
      },
      dark: {
        "access-allowed": "142.1 70.6% 45.3%",
        "access-denied": "0 72.2% 50.6%",
        "access-partial": "47.9 95.8% 53.1%",
      },
    },
    meta: {
      description: "A component for displaying and managing access permissions in a matrix format.",
      category: "layout",
      complexity: "complex",
      status: "stable",
      tags: ["access", "permissions", "matrix", "security"],
    },
  },
  {
    name: "stat-card",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    registryDependencies: ["card"],
    files: [
      {
        path: "ui/stat-card.tsx",
        type: "registry:ui",
      },
    ],
    meta: {
      description: "A card component for displaying statistics with trends and icons.",
      category: "display",
      complexity: "simple",
      status: "stable",
      tags: ["statistics", "dashboard", "analytics", "metrics"],
    },
  },
]