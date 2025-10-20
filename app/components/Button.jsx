import React from 'react'

export default function Button({text, variant, outline, lg, className, type}) {
    const variantStyles = {
      primary: outline ? "border-primary border-2 bg-transparent text-primary" : "text-white bg-primary",
      secondary: outline ? "border-secondary border-2 bg-transparent text-secondary" : "text-primary bg-secondary",
      light: outline ? "border-white border-2 bg-transparent text-white" : "text-primary bg-white",
    };

    const sizeStyles = {
      lg: lg
        ? "py-3 px-10 md:px-14 md:py-4 text-base md:text-xl rounded-[56px]"
        : "px-10 py-2 text-base rounded-3xl",
    };

    return (
      <button
        className={`${sizeStyles["lg"]} font-bold w-full md:w-auto  ${variantStyles[variant]} ${className}`}
        type= {type ||  'button'}
      >
        {text}
      </button>
    );
}
