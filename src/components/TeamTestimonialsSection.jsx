import team1Png from "../assets/team1.png";
import team2Png from "../assets/team2.png";

function Container({ children, className = "" }) {
    return (
        <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}

function Stars({ value = 4.6 }) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                <span className="text-orange-400">★</span>
                <span className="text-orange-400">★</span>
                <span className="text-orange-400">★</span>
                <span className="text-orange-400">★</span>
                <span className="text-orange-200">★</span>
            </div>
            <span className="text-xs font-semibold text-slate-500">
                {value}
            </span>
        </div>
    );
}

function SideCard() {
    return (
        <div className="shrink-0 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/60 px-6 py-6 mt-9">
            <div className="flex h-full">
                <img
                    src={team2Png}
                    alt="Team"
                    className="h-44 w-36 rounded-3xl object-cove mr-6"
                />
                <div className="">
                    <h3 className="text-base font-800 text-slate-800">
                        Ramanyer Donnel
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">Founder CEO</p>
                    <div className="mt-2">
                        <Stars />
                    </div>
                    <p className="mt-3 max-w-[220px] text-xs leading-5 text-slate-500">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born
                    </p>
                </div>
            </div>
        </div>
    );
}

function CenterCard() {
    return (
        <div className="shrink-0 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/60">
            <div className="flex h-full flex-col gap-6 p-6 sm:flex-row sm:items-center">
                <img
                    src={team1Png}
                    alt="Team"
                    className="h-60 w-full rounded-2xl object-cover sm:h-56 sm:w-56"
                />
                <div className="px-2 sm:px-0">
                    <h3 className="text-base font-800 text-slate-800">
                        Ramanyer Donnel
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">Founder CEO</p>
                    <div className="mt-2">
                        <Stars />
                    </div>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-slate-500 sm:text-sm">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function TeamTestimonialsSection() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="overflow-hidden">
                <Container>
                    <div className="flex gap-6 overflow-x-auto pb-2 align-center justic-center">
                        <div className="min-w-[320px] sm:min-w-[360px]">
                            <SideCard />
                        </div>
                        <div className="min-w-[360px] sm:min-w-[520px]">
                            <CenterCard />
                        </div>
                        <div className="min-w-[320px] sm:min-w-[360px]">
                            <SideCard />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
