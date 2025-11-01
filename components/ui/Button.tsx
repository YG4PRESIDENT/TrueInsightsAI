import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Variants
          {
            "bg-black text-white hover:bg-gray-800 hover:shadow-blue-200 hover:shadow-lg active:scale-95": variant === "primary",
            "bg-blue-50 text-black border border-blue-200 hover:bg-blue-100 hover:border-blue-300 active:scale-95": variant === "secondary",
            "border-2 border-blue-300 text-blue-600 hover:bg-blue-300 hover:text-white": variant === "outline",
            "text-gray-700 hover:text-blue-600 hover:bg-blue-50": variant === "ghost",
          },
          
          // Sizes
          {
            "px-4 py-2 text-sm rounded-lg": size === "sm",
            "px-6 py-3 text-base rounded-lg": size === "md",
            "px-8 py-4 text-lg rounded-xl": size === "lg",
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

