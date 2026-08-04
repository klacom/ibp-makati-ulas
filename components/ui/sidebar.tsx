import React from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    FolderKanban,
    FileText,
    Settings,
    LogOut,
} from "lucide-react";

const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Lawyers",
        href: "/lawyers",
        icon: Users,
    },
    {
        title: "Attendance",
        href: "/attendance",
        icon: FolderKanban,
    },
    {
        title: "Reports",
        href: "/reports",
        icon: FileText,
    },
];

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen text-white flex flex-col border-r">
            {/* Logo */}
            <div className="h-16 flex items-center px-6 border-b">
                <h1 className="text-xl font-bold">My Dashboard</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-5">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.title}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-3 rounded-lg px-4 py-3 transition"
                                >
                                    <Icon size={20} />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="border-t p-3">
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-red-600">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;