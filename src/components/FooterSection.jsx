import symbol from "../assets/Symbol.svg";
import logoPng from "../assets/iJustPaid Logo 11 1.png";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

export default function FooterSection({ logoUrl = logoPng }) {
    return (
        <footer className="mt-[6rem] bg-[#FBFBFB] ">
            <Container>
                <div className="grid gap-10 border-b border-slate-200 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                    <div>
                        <img
                            src={logoUrl}
                            alt="Ijustpaid"
                            className="h-24 w-auto"
                        />
                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                            Lorem ipsum dolor sit amet consectetur. Porta arcu
                            commodo purus pellentesque commodo amet clim ac.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-slate-800">
                            Company
                        </div>
                        <div className="mt-4 grid gap-2 text-sm text-slate-500">
                            <a href="#" className="hover:text-slate-700">
                                About Us
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                App
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Download
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Blog
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Features
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-slate-800">
                            Support
                        </div>
                        <div className="mt-4 grid gap-2 text-sm text-slate-500">
                            <a href="#" className="hover:text-slate-700">
                                Contact Us
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Faqs
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-slate-700">
                                Terms and Condition
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-slate-800">
                            Get In Touch
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <path d="M4 4h16v16H4z" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                            <span>support@ijp.com</span>
                        </div>
                        <div className="mt-6 flex items-center gap-3 text-slate-500">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-slate-700"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3.1-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 2.9h-1.8v7A10 10 0 0022 12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-slate-700"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.4.9A3.6 3.6 0 0012.8 8c0 .3 0 .5.1.8A10.2 10.2 0 013 4.8a3.6 3.6 0 001.1 4.8c-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.5 1.8 2.6 3.4 2.6A7.3 7.3 0 012 17.4a10.3 10.3 0 005.6 1.7c6.7 0 10.4-5.7 10.4-10.6v-.5c.7-.6 1.3-1.2 1.8-2z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-slate-700"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M4.98 3.5A2.5 2.5 0 105 8.5a2.5 2.5 0 000-5zM3 21h4V9H3v12zM9 9h3.8v1.6h.1c.5-1 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path d="M16.4 13.2c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.6.8-3.3.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.2-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.6 2.3 2.8 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.6 1.2-2.7-.1 0-2.3-.9-2.3-3.3z" />
                                <path d="M14.7 4.3c.6-.8 1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.9-.9 3 1.1.1 2.2-.6 2.8-1.5z" />
                            </svg>
                            Download for iOS
                        </button>
                        <button
                            type="button"
                            className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700"
                        >
                            <img src={symbol} alt="" className="h-4 w-4" />
                            Download for Android
                        </button>
                    </div>

                    <div className="text-xs text-slate-400">
                        Copyright © 2025 ijustpaid. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
