import * as React from 'react'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // shadcn base class configurations
    const baseStyles =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'

    // Map variant values to shadcn style variables
    const variants = {
      primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      outline:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground text-foreground',
      danger: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    }

    // shadcn size specifications
    const sizes = {
      sm: 'h-8 rounded-md px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 rounded-md px-8 text-base',
    }

    const classes = [baseStyles, variants[variant], sizes[size], className]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={classes}
        {...props}
      >
        {isLoading && (
          <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin text-current" aria-hidden="true" />
        )}
        {!isLoading && leftIcon && (
          <span className="mr-1 inline-flex items-center justify-center" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="ml-1 inline-flex items-center justify-center" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
