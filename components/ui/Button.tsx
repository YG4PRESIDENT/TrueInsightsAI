import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Variants
          {
            "bg-black text-white hover:bg-gray-800 active:scale-95": variant === "primary",
            "bg-white text-black border border-gray-300 hover:bg-gray-50 active:scale-95": variant === "secondary",
            "border-2 border-black text-black hover:bg-black hover:text-white": variant === "outline",
            "text-gray-700 hover:text-black hover:bg-gray-100": variant === "ghost",
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

