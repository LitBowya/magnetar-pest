// components/Navbar.js
'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Menu,
    X,
    Sprout,
    Shield,
    Home,
    Warehouse,
    Image,
    Phone,
    ShoppingCart,
    Briefcase,
    Info,
    ChevronDown, BugOff,
} from 'lucide-react';
import Logo from "@/components/Logo";

export default function Navbar() {
    const HOVER_CLOSE_DELAY = 350; // ms delay before closing desktop dropdown

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpenMobile, setIsProductsOpenMobile] = useState(false);
    const [isProductsOpenDesktop, setIsProductsOpenDesktop] = useState(false);

    const hoverTimeoutRef = useRef(null);
    const productsRef = useRef(null); // parent wrapper for desktop products (button + dropdown)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((v) => !v);
        // close mobile product submenu when closing whole menu
        if (isMobileMenuOpen) setIsProductsOpenMobile(false);
    };

    const toggleProductsMobile = () => setIsProductsOpenMobile((v) => !v);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: Home },
        { name: "Products", href: "/product", icon: Briefcase },
        { name: "Gallery", href: "/gallery", icon: Info },
        { name: "Contact", href: "/contact", icon: Phone },
    ];

    // --- Desktop hover handlers with delay ---
    const openProductsDesktop = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsProductsOpenDesktop(true);
    };

    const scheduleCloseProductsDesktop = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setIsProductsOpenDesktop(false);
            hoverTimeoutRef.current = null;
        }, HOVER_CLOSE_DELAY);
    };

    const cancelCloseProductsDesktop = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
    };

    // keyboard accessibility: open on focus, schedule close on blur (only when focus leaves productsRef)
    const handleProductsBlur = (e) => {
        // relatedTarget may be null in some cases; treat null as leave
        const related = e.relatedTarget;
        if (productsRef.current && related && productsRef.current.contains(related)) {
            // focus moved inside the products area - don't close
            return;
        }
        scheduleCloseProductsDesktop();
    };

    const handleProductsFocus = () => {
        openProductsDesktop();
    };

    // cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        };
    }, []);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Logo size={'xl'} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) =>
                            item.children ? (
                                // products parent (desktop) — wrapped so we can track mouse enter/leave and focus/blur
                                <div
                                    key={item.name}
                                    ref={productsRef}
                                    className="relative"
                                    onMouseEnter={openProductsDesktop}
                                    onMouseLeave={scheduleCloseProductsDesktop}
                                    onFocus={handleProductsFocus}       // for keyboard users
                                    onBlur={handleProductsBlur}         // for keyboard users
                                >
                                    <button
                                        type="button"
                                        aria-haspopup="menu"
                                        aria-expanded={isProductsOpenDesktop}
                                        onClick={() => setIsProductsOpenDesktop((v) => !v)} // also allow click to toggle
                                        className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
                                    >
                                        {item.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>

                                    {/* Desktop dropdown — visibility controlled by state */}
                                    <div
                                        role="menu"
                                        aria-label="Products submenu"
                                        className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-opacity duration-150 ${
                                            isProductsOpenDesktop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                        }`}
                                        onMouseEnter={cancelCloseProductsDesktop} // keep open when hovering the dropdown
                                        onMouseLeave={scheduleCloseProductsDesktop}
                                    >
                                        <div className="py-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 text-sm"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="px-4 pt-5 pb-2 flex justify-between items-center border-b">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Logo size={'xl'} />
                        </Link>
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="p-1 rounded-md text-gray-700 hover:text-primary-600"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="px-4 pt-4 pb-8">
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            if (item.children) {
                                return (
                                    <div key={item.name}>
                                        <button
                                            onClick={toggleProductsMobile}
                                            className="flex items-center w-full text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                                            aria-expanded={isProductsOpenMobile}
                                            aria-controls="mobile-products-submenu"
                                        >
                                            <Icon className="h-5 w-5 mr-3" />
                                            {item.name}
                                            <ChevronDown
                                                className={`ml-auto h-4 w-4 transition-transform ${isProductsOpenMobile ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        {isProductsOpenMobile && (
                                            <div id="mobile-products-submenu" className="ml-8 mt-2 flex flex-col space-y-3">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        onClick={() => {
                                                            // close mobile menu after selecting child
                                                            setIsMobileMenuOpen(false);
                                                            setIsProductsOpenMobile(false);
                                                        }}
                                                        className="flex items-center text-gray-600 hover:text-primary-600 text-sm"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                                >
                                    <Icon className="h-5 w-5 mr-3" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </nav>
    );
}
