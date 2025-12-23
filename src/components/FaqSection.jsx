import { useState } from "react";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

export default function FaqSection() {
    const faqs = [
        {
            id: "ijp",
            question: "what is IJP ?",
            answer: "Lorem ipsum dolor sit amet consectetur. Montes pharetra nisl egestas donec massa. Tincidunt dignissim adipiscing massa maecenas hendrerit. Duis blandit ultricies tempus ullamcorper mattis nisi. Arcu quam amet ultricies erat.\n\nEuismod volutpat urna sed commodo amet nam mauris. Euismod felis urna duis adipiscing cursus fringilla eget. A id commodo bibendum non mollis at in dignissim adipiscing massa maecenas hendrerit. Duis blandit ultricies tempus ullamcorper mattis nisi. Arcu .",
        },
        {
            id: "q2",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q3",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q4",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q5",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q6",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q7",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
        {
            id: "q8",
            question: "Lorem ipsum dolor sit amet ?",
            answer: "Lorem ipsum dolor sit amet.",
        },
    ];

    const leftFaqs = faqs.slice(0, 3);
    const rightFaqs = faqs.slice(3, 8);

    const [openFaqId, setOpenFaqId] = useState(faqs[0]?.id ?? null);

    return (
        <section className="bg-white py-16 sm:py-20 mt-[3rem]">
            <Container>
                <div className="text-center">
                    <h2 className="font-raleway text-4xl font-700 tracking-tight text-slate-800 sm:text-5xl">
                        <span>Frequently Asked </span>
                        <span className="text-[#6EAC30]">Questions</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-6 text-slate-500 sm:text-base">
                        If you’ve got questions, we’ve got the answers you’re
                        looking for!
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-6">
                            {leftFaqs.map((item) => {
                                const isOpen = openFaqId === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/70"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaqId((prev) =>
                                                    prev === item.id
                                                        ? null
                                                        : item.id
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                        >
                                            <span className="text-sm font-semibold text-slate-800 sm:text-base">
                                                {item.question}
                                            </span>
                                            <span
                                                className={`grid h-11 w-11 place-items-center rounded-full bg-[#fff] text-slate-600  transition ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-4 w-4"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </button>

                                        {isOpen ? (
                                            <div className="px-6 pb-6">
                                                <div className="whitespace-pre-line text-xs leading-6 text-slate-500 sm:text-sm">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-6">
                            {rightFaqs.map((item) => {
                                const isOpen = openFaqId === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/70"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaqId((prev) =>
                                                    prev === item.id
                                                        ? null
                                                        : item.id
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                        >
                                            <span className="text-sm font-semibold text-slate-800 sm:text-base">
                                                {item.question}
                                            </span>
                                            <span
                                                className={`grid h-11 w-11 place-items-center rounded-full bg-[#fff] text-slate-600  transition ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : "rotate-0"
                                                }`}
                                                aria-hidden="true"
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-4 w-4"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </button>

                                        {isOpen ? (
                                            <div className="px-6 pb-6">
                                                <div className="whitespace-pre-line text-xs leading-6 text-slate-500 sm:text-sm">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
