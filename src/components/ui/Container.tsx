import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  padding = true,
  className,
  children,
  ...props
}) => {
  const baseClasses = 'mx-auto';
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  
  return (
    <div
      className={cn(
        baseClasses,
        sizes[size],
        paddingClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
