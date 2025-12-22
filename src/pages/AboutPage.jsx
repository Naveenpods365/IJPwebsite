import pageBgPng from "../assets/pagebg.png";
import about1Png from "../assets/about1.png";
import about2Svg from "../assets/about2.svg";
import vissionSvg from "../assets/vission.svg";
import missionSvg from "../assets/mission.svg";
import glowPng from "../assets/glow.png";
import tickSvg from "../assets/tick.svg";
import Header from "../components/Header";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

export default function AboutPage() {
    const pageBgUrl = pageBgPng;
    const about1Url = about1Png;
    const about2Url = about2Svg;
    const vissionUrl = vissionSvg;
    const missionUrl = missionSvg;
    const glowUrl = glowPng;
    const tickUrl = tickSvg;

    return (
        <div className="bg-white">
            <Header />

            <main>
                <section
                    className="relative overflow-hidden"
                    style={{
                        backgroundImage: `url('${pageBgUrl}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="pb-20 pt-24 sm:pb-28 sm:pt-28">
                        <Container>
                            <div className="text-center">
                                <h1 className="font-raleway text-5xl font-900 text-white sm:text-6xl">
                                    About
                                </h1>
                                <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Montes etiam egestas viverra sit eu. Sed in
                                    tincidunt feugiat nisi orci nisl. Bibendum
                                </p>
                            </div>
                        </Container>
                    </div>
                </section>

                <section className="bg-white py-16 sm:py-20">
                    <Container>
                        <div className="grid items-center gap-10 lg:grid-cols-2">
                            <div className="flex justify-center lg:justify-start">
                                <img
                                    src={about1Url}
                                    alt="About"
                                    className="w-full max-w-[560px] object-contain"
                                />
                            </div>

                            <div className="max-w-xl">
                                <h2 className="font-raleway text-4xl font-800 text-slate-800">
                                    Our Story
                                </h2>
                                <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Auctor nisl est habitant quisque. Pulvinar
                                    quis varius odio sit. Neque vulputate
                                    curabitur quis turpis pellentesque.
                                    Tincidunt volutpat etiam consectetur ornare
                                    tempor vitae tempor gravida elit. At massa
                                    libero eget amet interdum. Vel viverra sit
                                    eget turpis pellentesque auctor. Auctor amet
                                    posuere aliquet erat gravida.
                                </p>

                                <div className="mt-8 space-y-5">
                                    <div className="flex gap-4">
                                        <img
                                            src={tickUrl}
                                            alt=""
                                            className="mt-1 h-7 w-7 shrink-0"
                                        />
                                        <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Auctor nisl est
                                            habitant quisque. Pulvinar quis
                                            varius odio sit.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <img
                                            src={tickUrl}
                                            alt=""
                                            className="mt-1 h-7 w-7 shrink-0"
                                        />
                                        <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Auctor nisl est
                                            habitant quisque. Pulvinar
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <img
                                            src={tickUrl}
                                            alt=""
                                            className="mt-1 h-7 w-7 shrink-0"
                                        />
                                        <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Auctor nisl est
                                            habitant quisque. Pulvinar quis
                                            varius
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="bg-white py-16 sm:py-20">
                    <div className="relative">
                        <img
                            src={glowUrl}
                            alt=""
                            className="pointer-events-none absolute bottom-[8rem] left-[-28%] h-full w-full select-none object-contain opacity-70"
                        />
                        <img
                            src={glowUrl}
                            alt=""
                            className="pointer-events-none absolute -right-[40rem] -top-[24rem] h-full w-full select-none object-contain opacity-70"
                        />
                        <Container className="relative py-2">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="rounded-3xl bg-white px-6 pb-10 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/60 sm:px-10">
                                    <div className="flex justify-center">
                                        <img
                                            src={vissionUrl}
                                            alt="Our Vision"
                                            className="h-52 w-auto object-contain sm:h-56"
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="font-raleway text-2xl font-800 text-slate-800">
                                            Our Vision
                                        </h3>
                                        <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Egestas urna pharetra
                                            sit tellus enim. Quisque massa
                                            turpis eu congue tortor turpis eget
                                            gravida
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-white px-6 pb-10 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/60 sm:px-10">
                                    <div className="flex justify-center">
                                        <img
                                            src={missionUrl}
                                            alt="Our Mission"
                                            className="h-52 w-auto object-contain sm:h-56"
                                        />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="font-raleway text-2xl font-800 text-slate-800">
                                            Our Mission
                                        </h3>
                                        <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Egestas urna pharetra
                                            sit tellus enim. Quisque massa
                                            turpis eu congue tortor turpis eget
                                            gravida
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-26 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 ">
                                <div>
                                    <h2 className="font-raleway text-2xl font-800 text-slate-800 sm:text-5xl">
                                        Why We Choose Us ?
                                    </h2>
                                    <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Auctor nisl est habitant quisque.
                                        Pulvinar quis varius odio sit. Neque
                                        vulputate curabitur quis turpis
                                        pellentesque. Tincidunt volutpat etiam
                                        consectetur ornare tempor vitae tempor
                                        gravida elit. At massa libero eget amet
                                        interdum. Vel viverra sit eget turpis
                                        pellentesque auctor. Auctor amet posuere
                                        aliquet erat gravida.
                                    </p>

                                    <div className="mt-8 space-y-5">
                                        <div className="flex gap-4">
                                            <img
                                                src={tickUrl}
                                                alt=""
                                                className="mt-1 h-7 w-7 shrink-0"
                                            />
                                            <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                                Lorem ipsum dolor sit amet
                                                consectetur. Auctor nisl est
                                                habitant quisque. Pulvinar quis
                                                varius odio sit.
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <img
                                                src={tickUrl}
                                                alt=""
                                                className="mt-1 h-7 w-7 shrink-0"
                                            />
                                            <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                                Lorem ipsum dolor sit amet
                                                consectetur. Auctor nisl est
                                                habitant quisque. Pulvinar
                                            </p>
                                        </div>
                                        <div className="flex gap-4">
                                            <img
                                                src={tickUrl}
                                                alt=""
                                                className="mt-1 h-7 w-7 shrink-0"
                                            />
                                            <p className="text-sm leading-6 text-slate-500 sm:text-base">
                                                Lorem ipsum dolor sit amet
                                                consectetur. Auctor nisl est
                                                habitant quisque. Pulvinar quis
                                                varius
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center lg:justify-end">
                                    <img
                                        src={about2Url}
                                        alt="Why choose us"
                                        className="w-full max-w-[520px] object-contain"
                                    />
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </main>
        </div>
    );
}
