'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var React6 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var DialogPrimitive = require('@radix-ui/react-dialog');
var lucideReact = require('lucide-react');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var LabelPrimitive = require('@radix-ui/react-label');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SelectPrimitive = require('@radix-ui/react-select');
var SwitchPrimitive = require('@radix-ui/react-switch');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React6__namespace = /*#__PURE__*/_interopNamespace(React6);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
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
var Button = React6__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var Card = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var CardDescription = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
var Input = React6__namespace.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var badgeVariants = classVarianceAuthority.cva(
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var dialogContentVariants = classVarianceAuthority.cva(
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
var DialogContent = React6__namespace.forwardRef(({ className, children, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsxs(
    DialogPrimitive__namespace.Content,
    {
      ref,
      className: cn(dialogContentVariants({ size, className })),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var DialogTitle = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var tooltipContentVariants = classVarianceAuthority.cva(
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
var TooltipContent = React6__namespace.forwardRef(({ className, sideOffset = 4, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(tooltipContentVariants({ variant, size, className })),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var TooltipArrow = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  TooltipPrimitive__namespace.Arrow,
  {
    ref,
    className: cn("fill-popover", className),
    ...props
  }
));
TooltipArrow.displayName = TooltipPrimitive__namespace.Arrow.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var dropdownMenuContentVariants = classVarianceAuthority.cva(
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
var DropdownMenuContent = React6__namespace.forwardRef(({ className, sideOffset = 4, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Content,
  {
    ref,
    sideOffset,
    className: cn(dropdownMenuContentVariants({ size, className })),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React6__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Item,
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
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React6__namespace.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React6__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React6__namespace.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Label,
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var DropdownMenuSubTrigger = React6__namespace.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  DropdownMenuPrimitive__namespace.SubTrigger,
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
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DropdownMenuPrimitive__namespace.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverAnchor = PopoverPrimitive__namespace.Anchor;
var PopoverClose = PopoverPrimitive__namespace.Close;
var popoverContentVariants = classVarianceAuthority.cva(
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
var PopoverContent = React6__namespace.forwardRef(({ className, align = "center", sideOffset = 4, size, variant, showClose = false, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
  PopoverPrimitive__namespace.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(popoverContentVariants({ size, variant, className })),
    ...props,
    children: [
      showClose && /* @__PURE__ */ jsxRuntime.jsxs(PopoverPrimitive__namespace.Close, { className: "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
      ] }),
      children
    ]
  }
) }));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var PopoverArrow = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  PopoverPrimitive__namespace.Arrow,
  {
    ref,
    className: cn("fill-popover border-t border-l border-border", className),
    ...props
  }
));
PopoverArrow.displayName = PopoverPrimitive__namespace.Arrow.displayName;
var PopoverHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var PopoverTitle = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h4",
  {
    ref,
    className: cn("font-medium leading-none", className),
    ...props
  }
));
PopoverTitle.displayName = "PopoverTitle";
var PopoverDescription = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
}) => /* @__PURE__ */ jsxRuntime.jsx(
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
var alertVariants = classVarianceAuthority.cva(
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
var Alert = React6__namespace.forwardRef(
  ({ className, variant, size, dismissible = false, onDismiss, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React6__namespace.useState(true);
    const handleDismiss = React6__namespace.useCallback(() => {
      setIsVisible(false);
      onDismiss?.();
    }, [onDismiss]);
    if (!isVisible) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        role: "alert",
        className: cn(alertVariants({ variant, size }), className),
        ...props,
        children: [
          children,
          dismissible && /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              type: "button",
              onClick: handleDismiss,
              className: "absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
              "aria-label": "Dismiss alert",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";
var labelVariants = classVarianceAuthority.cva(
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
var Label2 = React6__namespace.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn(labelVariants({ variant, size, className })),
    ...props
  }
));
Label2.displayName = LabelPrimitive__namespace.Root.displayName;
var checkboxVariants = classVarianceAuthority.cva(
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
var checkboxIconVariants = classVarianceAuthority.cva("flex items-center justify-center text-current", {
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
var Checkbox = React6__namespace.forwardRef(({ className, size, indeterminate, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  CheckboxPrimitive__namespace.Root,
  {
    ref,
    className: cn(checkboxVariants({ size, className })),
    ...props,
    "data-state": indeterminate ? "indeterminate" : props.checked ? "checked" : "unchecked",
    children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: cn("flex items-center justify-center text-current"), children: indeterminate ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: cn(checkboxIconVariants({ size })) }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: cn(checkboxIconVariants({ size })) }) })
  }
));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var radioGroupVariants = classVarianceAuthority.cva(
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
var radioGroupItemVariants = classVarianceAuthority.cva(
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
var radioGroupIndicatorVariants = classVarianceAuthority.cva(
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
var RadioGroup2 = React6__namespace.forwardRef(({ className, orientation, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    {
      className: cn(radioGroupVariants({ orientation, className })),
      ...props,
      ref
    }
  );
});
RadioGroup2.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React6__namespace.forwardRef(({ className, size, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    {
      ref,
      className: cn(radioGroupItemVariants({ size, className })),
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: cn(radioGroupIndicatorVariants({ size }), "fill-current text-current") }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var selectTriggerVariants = classVarianceAuthority.cva(
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
var selectContentVariants = classVarianceAuthority.cva(
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
var SelectTrigger = React6__namespace.forwardRef(({ className, children, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Trigger,
  {
    ref,
    className: cn(selectTriggerVariants({ size, className })),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React6__namespace.forwardRef(({ className, children, position = "popper", size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Content,
  {
    ref,
    className: cn(selectContentVariants({ size, className })),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntime.jsx(
        SelectPrimitive__namespace.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React6__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
  SelectPrimitive__namespace.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SelectPrimitive__namespace.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var textareaVariants = classVarianceAuthority.cva(
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
var Textarea = React6__namespace.forwardRef(
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
    const [internalValue, setInternalValue] = React6__namespace.useState(value || "");
    const textareaRef = React6__namespace.useRef(null);
    const mergedRef = React6__namespace.useMemo(
      () => (node) => {
        textareaRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref && "current" in ref) {
          ref.current = node;
        }
      },
      [ref]
    );
    const adjustHeight = React6__namespace.useCallback(() => {
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
    const handleChange = React6__namespace.useCallback(
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
    React6__namespace.useEffect(() => {
      if (autoResize) {
        adjustHeight();
      }
    }, [autoResize, adjustHeight, value]);
    React6__namespace.useEffect(() => {
      if (value !== void 0) {
        setInternalValue(value);
      }
    }, [value]);
    const currentValue = value !== void 0 ? value : internalValue;
    const charCount = typeof currentValue === "string" ? currentValue.length : 0;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
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
      characterCount && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "absolute bottom-2 right-2 text-xs text-muted-foreground", children: [
        charCount,
        maxLength && `/${maxLength}`
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";
var switchVariants = classVarianceAuthority.cva(
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
var switchThumbVariants = classVarianceAuthority.cva(
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
var switchIconVariants = classVarianceAuthority.cva(
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
var Switch = React6__namespace.forwardRef(({ className, size, variant, checkedIcon, uncheckedIcon, checked, ...props }, ref) => {
  const [isChecked, setIsChecked] = React6__namespace.useState(checked || false);
  React6__namespace.useEffect(() => {
    if (checked !== void 0) {
      setIsChecked(checked);
    }
  }, [checked]);
  const handleCheckedChange = (newChecked) => {
    setIsChecked(newChecked);
    props.onCheckedChange?.(newChecked);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SwitchPrimitive__namespace.Root,
    {
      className: cn(switchVariants({ size, variant }), className),
      checked,
      onCheckedChange: handleCheckedChange,
      ...props,
      ref,
      children: [
        checkedIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          switchIconVariants({
            size,
            state: isChecked ? "checked" : "unchecked"
          }),
          "left-1 text-primary-foreground"
        ), children: checkedIcon }),
        uncheckedIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(
          switchIconVariants({
            size,
            state: isChecked ? "unchecked" : "checked"
          }),
          "right-1 text-muted-foreground"
        ), children: uncheckedIcon }),
        /* @__PURE__ */ jsxRuntime.jsx(
          SwitchPrimitive__namespace.Thumb,
          {
            className: cn(switchThumbVariants({ size }))
          }
        )
      ]
    }
  );
});
Switch.displayName = SwitchPrimitive__namespace.Root.displayName;
var tableVariants = classVarianceAuthority.cva(
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
var tableHeaderVariants = classVarianceAuthority.cva(
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
var tableBodyVariants = classVarianceAuthority.cva(
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
var tableRowVariants = classVarianceAuthority.cva(
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
var tableHeadVariants = classVarianceAuthority.cva(
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
var tableCellVariants = classVarianceAuthority.cva(
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
var Table = React6__namespace.forwardRef(
  ({ className, size, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
    "table",
    {
      ref,
      className: cn(tableVariants({ size, variant, className })),
      ...props
    }
  ) })
);
Table.displayName = "Table";
var TableHeader = React6__namespace.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "thead",
    {
      ref,
      className: cn(tableHeaderVariants({ size, className })),
      ...props
    }
  )
);
TableHeader.displayName = "TableHeader";
var TableBody = React6__namespace.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "tbody",
    {
      ref,
      className: cn(tableBodyVariants({ size, className })),
      ...props
    }
  )
);
TableBody.displayName = "TableBody";
var TableFooter = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var TableRow = React6__namespace.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      ref,
      className: cn(tableRowVariants({ variant, className })),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
var TableHead = React6__namespace.forwardRef(
  ({ className, size, sortable, sortDirection, onSort, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        children,
        sortable && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "svg",
            {
              className: cn(
                "h-3 w-3 transition-colors",
                sortDirection === "asc" ? "text-foreground" : "text-muted-foreground/50"
              ),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsxRuntime.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "svg",
            {
              className: cn(
                "h-3 w-3 -mt-1 transition-colors",
                sortDirection === "desc" ? "text-foreground" : "text-muted-foreground/50"
              ),
              fill: "currentColor",
              viewBox: "0 0 20 20",
              children: /* @__PURE__ */ jsxRuntime.jsx(
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
var TableCell = React6__namespace.forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    {
      ref,
      className: cn(tableCellVariants({ size, className })),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
var TableCaption = React6__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Input = Input;
exports.Label = Label2;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverArrow = PopoverArrow;
exports.PopoverClose = PopoverClose;
exports.PopoverContent = PopoverContent;
exports.PopoverDescription = PopoverDescription;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverTitle = PopoverTitle;
exports.PopoverTrigger = PopoverTrigger;
exports.RadioGroup = RadioGroup2;
exports.RadioGroupItem = RadioGroupItem;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Textarea = Textarea;
exports.Tooltip = Tooltip;
exports.TooltipArrow = TooltipArrow;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.alertVariants = alertVariants;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.checkboxVariants = checkboxVariants;
exports.cn = cn;
exports.labelVariants = labelVariants;
exports.popoverContentVariants = popoverContentVariants;
exports.radioGroupItemVariants = radioGroupItemVariants;
exports.radioGroupVariants = radioGroupVariants;
exports.selectContentVariants = selectContentVariants;
exports.selectTriggerVariants = selectTriggerVariants;
exports.switchVariants = switchVariants;
exports.tableCellVariants = tableCellVariants;
exports.tableHeadVariants = tableHeadVariants;
exports.tableVariants = tableVariants;
exports.textareaVariants = textareaVariants;
exports.tooltipContentVariants = tooltipContentVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map