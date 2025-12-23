import testiPng from "../assets/testi.png";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

export default function HappyUsersSection() {
    const bgUrl = testiPng;

    return (
        <section className="bg-white pb-16 sm:pb-20">
            <div
                className="relative w-full overflow-hidden bg-white"
                style={{
                    backgroundImage: `url('${bgUrl}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                }}
            >
                <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-white via-white/80 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-12">
                    <Container>
                        <div className="text-center">
                            <h2 className="font-raleway text-6xl font-800 text-slate-800 sm:text-4xl">
                                Join{" "}
                                <span className="text-brand">Thousands</span> Of
                                <br />
                                Happy Users
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                                Lorem ipsum dolor sit amet consectetur. Sit
                                placerat dignissim montes morbi. Dictum vel
                                nulla at turpis. Suspendisse egestas eu nullam
                                nec amet praesent dapibus. Adipiscing porttitor
                                tristique facilisi lobortis.
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    );
}
