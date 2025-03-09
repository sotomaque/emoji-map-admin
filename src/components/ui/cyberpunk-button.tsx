'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  children: React.ReactNode;
}

export function CyberpunkButton({
  className,
  variant = 'primary',
  size = 'md',
  glowing = false,
  children,
  ...props
}: CyberpunkButtonProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 dark:from-blue-500 dark:to-purple-600 dark:hover:from-blue-600 dark:hover:to-purple-700 text-white',
    secondary: 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white',
    outline: 'bg-transparent border border-purple-600 hover:border-cyan-500 text-purple-600 hover:text-cyan-500 dark:border-purple-500 dark:hover:border-cyan-400 dark:text-purple-400 dark:hover:text-cyan-400',
    danger: 'bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-700 hover:to-pink-800 dark:from-red-500 dark:to-pink-600 dark:hover:from-red-600 dark:hover:to-pink-700 text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const glowingClass = glowing
    ? variant === 'outline'
      ? 'shadow-[0_0_10px_rgba(147,51,234,0.3)] dark:shadow-[0_0_10px_rgba(168,85,247,0.5)]'
      : 'shadow-[0_0_15px_rgba(79,70,229,0.3)] dark:shadow-[0_0_15px_rgba(79,70,229,0.5)]'
    : '';

  return (
    <button
      className={cn(
        'relative rounded-md font-medium transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        glowingClass,
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-md overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-white transition-opacity"></div>
      </div>
    </button>
  );
} 