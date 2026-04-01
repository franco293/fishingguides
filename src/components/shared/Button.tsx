import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'a';
    href: string;
  };

type ButtonAsNextLink = BaseProps & {
  as: 'link';
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsNextLink;

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  children,
  className,
  as = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:ring-4 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-ocean-600 text-white hover:bg-ocean-700 focus:ring-ocean-300 shadow-md hover:shadow-lg',
    secondary:
      'bg-sunset-500 text-white hover:bg-sunset-600 focus:ring-sunset-300 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-ocean-600 text-ocean-600 hover:bg-ocean-50 focus:ring-ocean-300',
    ghost: 'text-ocean-600 hover:bg-ocean-50 focus:ring-ocean-300',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </>
  );

  if (as === 'link') {
    const { href } = props as ButtonAsNextLink;
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  if (as === 'a') {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} disabled={isLoading} {...rest}>
      {content}
    </button>
  );
}