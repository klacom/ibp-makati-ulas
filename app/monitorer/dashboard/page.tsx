import React from "react";
import Sidebar from "@/components/ui/sidebar";

const Page = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>

                <div className="mt-4">
                    {/* Your dashboard content goes here */}
                </div>
            </main>
        </div>
    );
};

export default Page;