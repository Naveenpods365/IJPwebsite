import logoPng from "../assets/iJustPaid Logo 11 1.png";
import { NavLink } from "react-router-dom";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

function HeaderLink({ to, children }) {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 ${
                    isActive ? "text-brand-dark" : ""
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {children}
                    {isActive ? (
                        <span className="absolute -bottom-1 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-brand" />
                    ) : null}
                </>
            )}
        </NavLink>
    );
}

export default function Header({ logoUrl = logoPng }) {
    return (
        <header className="border-b border-slate-200 bg-white ">
            <Container>
                <div className="flex items-center justify-between py-8">
                    <div className="flex items-center gap-3">
                        <div className=" mt-[2.6rem] grid h-28 w-28 place-items-center  rounded-full bg-white  absolute z-10">
                            <img
                                src={logoUrl}
                                alt="JustPaid"
                                className="h-13 w-13 object-contain "
                            />
                        </div>
                    </div>

                    <nav className="hidden items-center gap-7 lg:flex ml-[5rem]">
                        <HeaderLink to="/">Home</HeaderLink>
                        <a
                            href="#"
                            className="relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                            Contests
                        </a>
                        <HeaderLink to="/about">About Us</HeaderLink>
                        <a
                            href="#"
                            className="relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                            Best Deals
                        </a>
                        <a
                            href="#"
                            className="relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                            Blogs
                        </a>
                        <a
                            href="#"
                            className="relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="relative px-1 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                            Contact Us
                        </a>
                    </nav>

                    <a
                        href="#"
                        className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-brand-dark"
                    >
                        Download Now
                    </a>
                </div>
            </Container>
        </header>
    );
}
