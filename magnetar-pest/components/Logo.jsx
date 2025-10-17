"use client";

import React, { forwardRef } from "react";
import Image from "next/image";

// Simple, reusable Logo component for Next.js (JavaScript)
// - Supports preset sizes (sm/md/lg/xl) or numeric size (px)
// - Accepts explicit width/height for non-square logos
// - Uses next/image for optimization

const PRESET_MAP = {
    sm: 24,
    md: 48,
    lg: 96,
    xl: 128,
};

const DEFAULT_SRC = "/images/logo.jpeg";
const DEFAULT_ALT = "Site logo";

const Logo = forwardRef(function Logo(
    {
        src = DEFAULT_SRC,
        alt = DEFAULT_ALT,
        size = "md", // number (px) or preset: 'sm' | 'md' | 'lg' | 'xl'
        width, // explicit width override
        height, // explicit height override
        className = "",
        quality = 75,
        priority = false,
        ...rest
    },
    ref
) {
    const resolvedSize = typeof size === "number" ? size : PRESET_MAP[size || "md"];
    const resolvedWidth = width ?? resolvedSize;
    const resolvedHeight = height ?? resolvedSize;

    return (
        <div
            ref={ref}
            role="img"
            aria-label={alt}
            className={`inline-block overflow-hidden ${className}`}
            {...rest}
        >
            <Image
                src={src}
                alt={alt}
                width={resolvedWidth}
                height={resolvedHeight}
                quality={quality}
                priority={priority}
            />
        </div>
    );
});

export default Logo;


/* Usage examples:

// Small preset (24px)
<Logo size="sm" />

// Numeric size (square)
<Logo size={80} />

// Non-square explicit width & height
<Logo width={160} height={40} />

// Custom src and tailwind classes
<Logo src="/branding/my-logo.svg" size="lg" className="rounded-md shadow-sm" />

*/