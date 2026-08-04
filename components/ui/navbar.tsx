import React from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="w-full border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="" className="text-2xl font-bold">
                    Logo
                </a>

                {/* Navigation Links */}
                <ul className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="transition-colors hover:text-blue-600"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <button className="rounded-md border px-4 py-2 hover:bg-gray-100">
                        <a href="/login">Login</a>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;