import React from "react";

const Page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl  p-8 shadow-lg">
                {/* Title */}
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Welcome Back
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Sign in to your account
                </p>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-blue-500"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a
                            href="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </button>

                    <p className="text-center opacity-50 text-xs">ULAS</p>
                </form>
            </div>
        </div>
    );
};

export default Page;