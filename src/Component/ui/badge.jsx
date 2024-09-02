import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 py-[5px]",
  {
    variants: {
      variant: {
        first:
          "border-transparent bg-[#D9D46B] text-black hover:bg-yellow-300 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
        second:
          "border-transparent bg-serene-purple hover:bg-[#ABA3C6] text-slate-900 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80 ",
        third:
          "border-transparent bg-serene-ash text-black hover:bg-[#B3AEA6] dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
        fourth:
          "text-black bg-serene-blue hover:bg-blue-300 dark:text-slate-50 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
