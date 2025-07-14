"use client";
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  Label: () => Label2,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverArrow: () => PopoverArrow,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverDescription: () => PopoverDescription,
  PopoverFooter: () => PopoverFooter,
  PopoverHeader: () => PopoverHeader,
  PopoverTitle: () => PopoverTitle,
  PopoverTrigger: () => PopoverTrigger,
  RadioGroup: () => RadioGroup2,
  RadioGroupItem: () => RadioGroupItem,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  Tooltip: () => Tooltip,
  TooltipArrow: () => TooltipArrow,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  alertVariants: () => alertVariants,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  checkboxVariants: () => checkboxVariants,
  cn: () => cn,
  labelVariants: () => labelVariants,
  popoverContentVariants: () => popoverContentVariants,
  radioGroupItemVariants: () => radioGroupItemVariants,
  radioGroupVariants: () => radioGroupVariants,
  selectContentVariants: () => selectContentVariants,
  selectTriggerVariants: () => selectTriggerVariants,
  switchVariants: () => switchVariants,
  tableCellVariants: () => tableCellVariants,
  tableHeadVariants: () => tableHeadVariants,
  tableVariants: () => tableVariants,
  textareaVariants: () => textareaVariants,
  tooltipContentVariants: () => tooltipContentVariants
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/input.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/badge.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/dialog.tsx
var React4 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var dialogContentVariants = (0, import_class_variance_authority3.cva)(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[95vw] max-h-[95vh]"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var DialogContent = React4.forwardRef(({ className, children, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(dialogContentVariants({ size, className })),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/tooltip.tsx
var React5 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var tooltipContentVariants = (0, import_class_variance_authority4.cva)(
  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border",
        inverse: "bg-primary text-primary-foreground border-primary",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-green-600 text-white border-green-600",
        warning: "bg-yellow-600 text-white border-yellow-600"
      },
      size: {
        sm: "px-2 py-1 text-xs",
        default: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var TooltipContent = React5.forwardRef(({ className, sideOffset = 4, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(tooltipContentVariants({ variant, size, className })),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var TooltipArrow = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  TooltipPrimitive.Arrow,
  {
    ref,
    className: cn("fill-popover", className),
    ...props
  }
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

// src/components/dropdown-menu.tsx
var React6 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react2 = require("lucide-react");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime7 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var dropdownMenuContentVariants = (0, import_class_variance_authority5.cva)(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "min-w-[6rem] text-xs",
        default: "min-w-[8rem] text-sm",
        lg: "min-w-[12rem] text-sm"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var DropdownMenuContent = React6.forwardRef(({ className, sideOffset = 4, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(dropdownMenuContentVariants({ size, className })),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React6.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React6.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React6.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-muted-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var DropdownMenuSubTrigger = React6.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

// src/components/popover.tsx
var React7 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_lucide_react3 = require("lucide-react");
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverClose = PopoverPrimitive.Close;
var popoverContentVariants = (0, import_class_variance_authority6.cva)(
  "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "w-56 p-3",
        default: "w-72 p-4",
        lg: "w-80 p-5",
        xl: "w-96 p-6",
        auto: "w-auto min-w-56 p-4"
      },
      variant: {
        default: "bg-popover text-popover-foreground border",
        card: "bg-card text-card-foreground border shadow-lg",
        accent: "bg-accent text-accent-foreground border-accent",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-green-50 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-100 dark:border-green-800",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-100 dark:border-yellow-800",
        info: "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950 dark:text-blue-100 dark:border-blue-800"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
var PopoverContent = React7.forwardRef(({ className, align = "center", sideOffset = 4, size, variant, showClose = false, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(popoverContentVariants({ size, variant, className })),
    ...props,
    children: [
      showClose && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(PopoverPrimitive.Close, { className: "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.X, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "sr-only", children: "Close" })
      ] }),
      children
    ]
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var PopoverArrow = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  PopoverPrimitive.Arrow,
  {
    ref,
    className: cn("fill-popover border-t border-l border-border", className),
    ...props
  }
));
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;
var PopoverHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "div",
  {
    className: cn(
      "mb-4 space-y-2",
      className
    ),
    ...props
  }
);
PopoverHeader.displayName = "PopoverHeader";
var PopoverTitle = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "h4",
  {
    ref,
    className: cn("font-medium leading-none", className),
    ...props
  }
));
PopoverTitle.displayName = "PopoverTitle";
var PopoverDescription = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
PopoverDescription.displayName = "PopoverDescription";
var PopoverFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "div",
  {
    className: cn(
      "mt-4 flex items-center justify-end space-x-2",
      className
    ),
    ...props
  }
);
PopoverFooter.displayName = "PopoverFooter";

// src/components/alert.tsx
var React8 = __toESM(require("react"));
var import_class_variance_authority7 = require("class-variance-authority");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority7.cva)(
  "relative w-full rounded-lg border p-4 transition-all duration-200 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10",
        warning: "border-yellow-500/50 text-yellow-900 dark:text-yellow-100 dark:border-yellow-500 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30",
        success: "border-green-500/50 text-green-900 dark:text-green-100 dark:border-green-500 [&>svg]:text-green-600 dark:[&>svg]:text-green-400 bg-green-50 dark:bg-green-950/30",
        info: "border-blue-500/50 text-blue-900 dark:text-blue-100 dark:border-blue-500 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
      },
      size: {
        default: "p-4",
        sm: "p-3 text-sm",
        lg: "p-6 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Alert = React8.forwardRef(
  ({ className, variant, size, dismissible = false, onDismiss, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React8.useState(true);
    const handleDismiss = React8.useCallback(() => {
      setIsVisible(false);
      onDismiss?.();
    }, [onDismiss]);
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ variant, size }), className),
        ...props,
        children: [
          children,
          dismissible && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "button",
            {
              type: "button",
              onClick: handleDismiss,
              className: "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
              "aria-label": "Dismiss alert",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react4.X, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/label.tsx
var React9 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime10 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority8.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        secondary: "text-muted-foreground",
        muted: "text-muted-foreground/80",
        destructive: "text-destructive"
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Label2 = React9.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants({ variant, size, className })),
    ...props
  }
));
Label2.displayName = LabelPrimitive.Root.displayName;

// src/components/checkbox.tsx
var React10 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react5 = require("lucide-react");
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime11 = require("react/jsx-runtime");
var checkboxVariants = (0, import_class_variance_authority9.cva)(
  "peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var checkboxIconVariants = (0, import_class_variance_authority9.cva)("flex items-center justify-center text-current", {
  variants: {
    size: {
      sm: "h-2.5 w-2.5",
      default: "h-3.5 w-3.5",
      lg: "h-4 w-4"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var Checkbox = React10.forwardRef(({ className, size, indeterminate, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(checkboxVariants({ size, className })),
    ...props,
    "data-state": indeterminate ? "indeterminate" : props.checked ? "checked" : "unchecked",
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Minus, { className: cn(checkboxIconVariants({ size })) }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react5.Check, { className: cn(checkboxIconVariants({ size })) }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/radio-group.tsx
var React11 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_lucide_react6 = require("lucide-react");
var import_class_variance_authority10 = require("class-variance-authority");
var import_jsx_runtime12 = require("react/jsx-runtime");
var radioGroupVariants = (0, import_class_variance_authority10.cva)(
  "grid gap-2",
  {
    variants: {
      orientation: {
        vertical: "grid-cols-1",
        horizontal: "grid-flow-col grid-cols-none"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
var radioGroupItemVariants = (0, import_class_variance_authority10.cva)(
  "aspect-square rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var radioGroupIndicatorVariants = (0, import_class_variance_authority10.cva)(
  "flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-1.5 w-1.5",
        default: "h-2 w-2",
        lg: "h-2.5 w-2.5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var RadioGroup2 = React11.forwardRef(({ className, orientation, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    RadioGroupPrimitive.Root,
    {
      className: cn(radioGroupVariants({ orientation, className })),
      ...props,
      ref
    }
  );
});
RadioGroup2.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React11.forwardRef(({ className, size, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(radioGroupItemVariants({ size, className })),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Circle, { className: cn(radioGroupIndicatorVariants({ size }), "fill-current text-current") }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/select.tsx
var React12 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react7 = require("lucide-react");
var import_class_variance_authority11 = require("class-variance-authority");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var selectTriggerVariants = (0, import_class_variance_authority11.cva)(
  "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var selectContentVariants = (0, import_class_variance_authority11.cva)(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "min-w-[6rem] text-xs",
        default: "min-w-[8rem] text-sm",
        lg: "min-w-[12rem] text-base"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var SelectTrigger = React12.forwardRef(({ className, children, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(selectTriggerVariants({ size, className })),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React12.forwardRef(({ className, children, position = "popper", size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(selectContentVariants({ size, className })),
    position,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/textarea.tsx
var React13 = __toESM(require("react"));
var import_class_variance_authority12 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
var textareaVariants = (0, import_class_variance_authority12.cva)(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        default: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base"
      },
      resize: {
        none: "resize-none",
        both: "resize",
        horizontal: "resize-x",
        vertical: "resize-y"
      }
    },
    defaultVariants: {
      size: "default",
      resize: "vertical"
    }
  }
);
var Textarea = React13.forwardRef(
  ({
    className,
    size,
    resize,
    autoResize = false,
    minRows = 3,
    maxRows,
    characterCount = false,
    maxLength,
    value,
    onChange,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React13.useState(value || "");
    const textareaRef = React13.useRef(null);
    const mergedRef = React13.useMemo(
      () => (node) => {
        textareaRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref && "current" in ref) {
          ;
          ref.current = node;
        }
      },
      [ref]
    );
    const adjustHeight = React13.useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea || !autoResize) return;
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      let newHeight = scrollHeight;
      if (minRows) {
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const minHeight = lineHeight * minRows;
        newHeight = Math.max(newHeight, minHeight);
      }
      if (maxRows) {
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const maxHeight = lineHeight * maxRows;
        newHeight = Math.min(newHeight, maxHeight);
      }
      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);
    const handleChange = React13.useCallback(
      (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange?.(e);
        if (autoResize) {
          setTimeout(adjustHeight, 0);
        }
      },
      [onChange, autoResize, adjustHeight]
    );
    React13.useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [autoResize, adjustHeight, value]);
    React13.useEffect(() => {
      if (value !== void 0) {
        setInternalValue(value);
      }
    }, [value]);
    const currentValue = value !== void 0 ? value : internalValue;
    const charCount = typeof currentValue === "string" ? currentValue.length : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "textarea",
        {
          className: cn(
            textareaVariants({ size, resize: autoResize ? "none" : resize }),
            autoResize && "overflow-hidden",
            className
          ),
          ref: mergedRef,
          value: currentValue,
          onChange: handleChange,
          maxLength,
          ...props
        }
      ),
      characterCount && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "absolute bottom-2 right-2 text-xs text-muted-foreground", children: [
        charCount,
        maxLength && `/${maxLength}`
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/switch.tsx
var React14 = __toESM(require("react"));
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));
var import_class_variance_authority13 = require("class-variance-authority");
var import_jsx_runtime15 = require("react/jsx-runtime");
var switchVariants = (0, import_class_variance_authority13.cva)(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        default: "h-6 w-11",
        lg: "h-7 w-12"
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        destructive: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success: "data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-input"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
var switchThumbVariants = (0, import_class_variance_authority13.cva)(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        default: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-5 w-5 data-[state=checked]:translate-x-5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var switchIconVariants = (0, import_class_variance_authority13.cva)(
  "absolute inset-0 flex items-center justify-center transition-opacity",
  {
    variants: {
      size: {
        sm: "text-[8px]",
        default: "text-xs",
        lg: "text-sm"
      },
      state: {
        checked: "opacity-100",
        unchecked: "opacity-0"
      }
    },
    defaultVariants: {
      size: "default",
      state: "unchecked"
    }
  }
);
var Switch = React14.forwardRef(({ className, size, variant, checkedIcon, uncheckedIcon, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = React14.useState(checked || false);
  React14.useEffect(() => {
    if (checked !== void 0) {
      setIsChecked(checked);
    }
  }, [checked]);
  const handleCheckedChange = (newChecked) => {
    setIsChecked(newChecked);
    props.onCheckedChange?.(newChecked);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    SwitchPrimitive.Root,
    {
      className: cn(switchVariants({ size, variant }), className),
      checked,
      onCheckedChange: handleCheckedChange,
      ...props,
      ref,
      children: [
        checkedIcon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn(
          switchIconVariants({
            size,
            state: isChecked ? "checked" : "unchecked"
          }),
          "left-1 text-primary-foreground"
        ), children: checkedIcon }),
        uncheckedIcon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn(
          switchIconVariants({
            size,
            state: isChecked ? "unchecked" : "checked"
          }),
          "right-1 text-muted-foreground"
        ), children: uncheckedIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          SwitchPrimitive.Thumb,
          {
            className: cn(switchThumbVariants({ size }))
          }
        )
      ]
    }
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;

// src/components/table.tsx
var React15 = __toESM(require("react"));
var import_class_variance_authority14 = require("class-variance-authority");
var import_jsx_runtime16 = require("react/jsx-runtime");
var tableVariants = (0, import_class_variance_authority14.cva)(
  "w-full caption-bottom text-sm",
  {
    variants: {
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base"
      },
      variant: {
        default: "",
        striped: "[&_tbody_tr:nth-child(odd)]:bg-muted/50",
        bordered: "border border-border"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
);
var tableHeaderVariants = (0, import_class_variance_authority14.cva)(
  "",
  {
    variants: {
      size: {
        sm: "[&_tr]:h-8",
        default: "[&_tr]:h-10",
        lg: "[&_tr]:h-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var tableBodyVariants = (0, import_class_variance_authority14.cva)(
  "",
  {
    variants: {
      size: {
        sm: "[&_tr]:h-8",
        default: "[&_tr]:h-10",
        lg: "[&_tr]:h-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var tableRowVariants = (0, import_class_variance_authority14.cva)(
  "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border-l border-r border-border first:border-l-0 last:border-r-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var tableHeadVariants = (0, import_class_variance_authority14.cva)(
  "text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
  {
    variants: {
      size: {
        sm: "h-8 px-2",
        default: "h-10 px-4",
        lg: "h-12 px-6"
      },
      sortable: {
        true: "cursor-pointer select-none hover:text-foreground",
        false: ""
      }
    },
    defaultVariants: {
      size: "default",
      sortable: false
    }
  }
);
var tableCellVariants = (0, import_class_variance_authority14.cva)(
  "align-middle [&:has([role=checkbox])]:pr-0",
  {
    variants: {
      size: {
        sm: "p-2",
        default: "p-4",
        lg: "p-6"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var Table = React15.forwardRef(
  ({ className, size, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "table",
    {
      ref,
      className: cn(tableVariants({ size, variant, className })),
      ...props
    }
  ) })
);
Table.displayName = "Table";
var TableHeader = React15.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "thead",
    {
      ref,
      className: cn(tableHeaderVariants({ size, className })),
      ...props
    }
  )
);
TableHeader.displayName = "TableHeader";
var TableBody = React15.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "tbody",
    {
      ref,
      className: cn(tableBodyVariants({ size, className })),
      ...props
    }
  )
);
TableBody.displayName = "TableBody";
var TableFooter = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React15.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "tr",
    {
      ref,
      className: cn(tableRowVariants({ variant, className })),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React15.forwardRef(
  ({ className, size, sortable, sortDirection, onSort, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "th",
    {
      ref,
      className: cn(tableHeadVariants({ size, sortable, className })),
      onClick: sortable ? onSort : void 0,
      role: sortable ? "button" : void 0,
      tabIndex: sortable ? 0 : void 0,
      onKeyDown: sortable ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSort?.();
        }
      } : void 0,
      "aria-sort": sortable ? sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : "none" : void 0,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex items-center gap-2", children: [
        children,
        sortable && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "svg",
            {
              className: cn(
                "h-3 w-3 transition-colors",
                sortDirection === "asc" ? "text-foreground" : "text-muted-foreground/50"
              ),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "svg",
            {
              className: cn(
                "h-3 w-3 -mt-1 transition-colors",
                sortDirection === "desc" ? "text-foreground" : "text-muted-foreground/50"
              ),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        ] })
      ] })
    }
  )
);
TableHead.displayName = "TableHead";
var TableCell = React15.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "td",
    {
      ref,
      className: cn(tableCellVariants({ size, className })),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
var TableCaption = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Label,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  alertVariants,
  badgeVariants,
  buttonVariants,
  checkboxVariants,
  cn,
  labelVariants,
  popoverContentVariants,
  radioGroupItemVariants,
  radioGroupVariants,
  selectContentVariants,
  selectTriggerVariants,
  switchVariants,
  tableCellVariants,
  tableHeadVariants,
  tableVariants,
  textareaVariants,
  tooltipContentVariants
});
//# sourceMappingURL=index.js.map