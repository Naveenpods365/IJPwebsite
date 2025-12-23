import logoPng from "../assets/iJustPaid Logo 11 1.png";
import bannerBgPng from "../assets/Section (21).png";
import bannerImage from "../assets/banner-image.png";
import bg2Png from "../assets/bg-2.png";
import ytImgPng from "../assets/ytimg.png";
import mob3Png from "../assets/mob3.png";
import sharePng from "../assets/share.png";
import searchPng from "../assets/search.png";
import messagePng from "../assets/message.png";
import aboutPng from "../assets/About.png";
import leftDashPng from "../assets/leftdash.png";
import rightDashPng from "../assets/rightdash.png";
import centerImagePng from "../assets/center-image.png";
import leftMobPng from "../assets/leftmob.png";
import rightMobPng from "../assets/rightmob.png";
import card1Png from "../assets/card1.png";
import card2Png from "../assets/card2.png";
import card3Png from "../assets/card3.png";
import author1Png from "../assets/author1.png";
import author2Png from "../assets/author2.png";
import likeSvg from "../assets/like.svg";
import dislikeSvg from "../assets/dislike.svg";
import msgSvg from "../assets/msg.svg";
import shareIconSvg from "../assets/shareicon.svg";
import leftInsPng from "../assets/leftins.png";
import rightInsPng from "../assets/rightins.png";
import googlePlayPng from "../assets/googleplay.png";
import iosPng from "../assets/ios.png";
import glowPng from "../assets/glow.png";
import ctaPng from "../assets/CTA.png";
import Header from "../components/Header";
import FAQSection from "../components/FAQSection";
import FooterSection from "../components/FooterSection";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Container({ children, className = "" }) {
    return (
        <div
            className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}

function SearchIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-white"
            aria-hidden="true"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
        </svg>
    );
}

export default function LandingPage() {
    const location = useLocation();

    const bannerBgUrl = bannerBgPng;
    const logoUrl = logoPng;
    const phoneUrl = bannerImage;
    const bg2Url = bg2Png;
    const ytImgUrl = ytImgPng;
    const mob3Url = mob3Png;
    const shareIconUrl = sharePng;
    const searchIconUrl = searchPng;
    const messageIconUrl = messagePng;
    const aboutUrl = aboutPng;
    const leftDashUrl = leftDashPng;
    const rightDashUrl = rightDashPng;
    const centerImageUrl = centerImagePng;
    const leftMobUrl = leftMobPng;
    const rightMobUrl = rightMobPng;
    const card1Url = card1Png;
    const card2Url = card2Png;
    const card3Url = card3Png;
    const author1Url = author1Png;
    const author2Url = author2Png;
    const likeIconUrl = likeSvg;
    const dislikeIconUrl = dislikeSvg;
    const msgIconUrl = msgSvg;
    const shareIcon2Url = shareIconSvg;
    const leftInsUrl = leftInsPng;
    const rightInsUrl = rightInsPng;
    const googlePlayUrl = googlePlayPng;
    const iosUrl = iosPng;
    const glowUrl = glowPng;
    const ctaUrl = ctaPng;

    const bestDeals = [
        {
            id: "d1",
            img: card1Url,
            author: author1Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d2",
            img: card2Url,
            author: author2Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d3",
            img: card3Url,
            author: author1Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d4",
            img: card1Url,
            author: author2Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d5",
            img: card2Url,
            author: author1Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d6",
            img: card3Url,
            author: author2Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d7",
            img: card1Url,
            author: author1Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d8",
            img: card2Url,
            author: author2Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
        {
            id: "d9",
            img: card3Url,
            author: author1Url,
            likes: "25K",
            dislikes: "65",
            comments: "50",
        },
    ];

    const [bestDealsPerPage, setBestDealsPerPage] = useState(3);
    const [bestDealsPage, setBestDealsPage] = useState(0);

    useEffect(() => {
        if (!location.hash) return;
        const id = location.hash.replace("#", "");
        if (!id) return;

        const raf = requestAnimationFrame(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });

        return () => cancelAnimationFrame(raf);
    }, [location.hash]);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setBestDealsPerPage(1);
            else if (w < 1024) setBestDealsPerPage(2);
            else setBestDealsPerPage(3);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const bestDealPages = (() => {
        const n = bestDeals.length;
        const pagesCount = Math.max(1, Math.ceil(n / bestDealsPerPage));
        const pages = [];
        for (let pageIdx = 0; pageIdx < pagesCount; pageIdx++) {
            const page = [];
            for (let i = 0; i < bestDealsPerPage; i++) {
                page.push(bestDeals[(pageIdx * bestDealsPerPage + i) % n]);
            }
            pages.push(page);
        }
        return pages;
    })();

    useEffect(() => {
        setBestDealsPage((p) => {
            const len = bestDealPages.length;
            if (len <= 0) return 0;
            return ((p % len) + len) % len;
        });
    }, [bestDealPages.length]);

    const goPrevBestDeals = () => {
        setBestDealsPage((p) => {
            const len = bestDealPages.length;
            if (len <= 0) return 0;
            return (p - 1 + len) % len;
        });
    };

    const goNextBestDeals = () => {
        setBestDealsPage((p) => {
            const len = bestDealPages.length;
            if (len <= 0) return 0;
            return (p + 1) % len;
        });
    };

    return (
        <div className="bg-white">
            <Header logoUrl={logoUrl} />

            <main>
                <section
                    className="relative h-screen overflow-hidden"
                    style={{
                        backgroundImage: `url('${bannerBgUrl}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        minHeight: "116vh",
                    }}
                >
                    <Container className="relative">
                        <div className="pt-14 text-center sm:pt-16">
                            <h1 className="font-raleway text-6xl font-500 tracking-tight text-white sm:text-6xl md:text-6xl">
                                <span>Shop.</span>
                                <span className="mx-1 inline-block rounded-md px-3 py-1 bg-white text-[#6EAC30] font-500">
                                    Share.
                                </span>
                                <span>Socialize</span>
                                <span className="block">All In One App.</span>
                            </h1>
                            <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-6 text-white/90 sm:text-base font-poppins">
                                Lorem ipsum dolor sit amet consectetur. Montes
                                etiam egestas viverra sit eu. Sed in tincidunt
                                feugiat nisi orci nisl. Bibendum
                            </p>
                        </div>

                        <div className="relative mt-8 pb-24 sm:mt-10 sm:pb-28 md:pb-32">
                            <div className="flex h-70% items-center justify-center">
                                <img
                                    src={phoneUrl}
                                    alt="App preview"
                                    className="w-[1360px] drop-shadow-2xl sm:w-[1390px] md:w-[1480px] mt-[-2rem]"
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                <section
                    className="relative overflow-hidden bg-white py-16 sm:py-20 mt-[4rem]"
                    style={{
                        backgroundImage: `url('${bg2Url}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top",
                        backgroundSize: "cover",
                    }}
                >
                    <Container>
                        <div className="text-center">
                            <h2 className="font-raleway text-4xl font-700 tracking-tight text-slate-800 sm:text-5xl">
                                <span>What Is </span>
                                <span className="text-[#6EAC30]">
                                    Ijustpaid?
                                </span>
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-6 text-slate-500 sm:text-base">
                                Still not sure what we’re all about? Watch our
                                intro video and learn more about our
                                community-focused approach.
                            </p>
                        </div>

                        <div className="mx-auto mt-10 max-w-4xl">
                            <div className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-200/70 sm:p-6">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={ytImgUrl}
                                        alt="Intro video"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="pointer-events-none absolute inset-0 grid place-items-center"></div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section
                    id="features"
                    className="w-full mt-[9rem] scroll-mt-28"
                >
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                        <div className="mob mx-auto rounded-3xl bg-[#FBFBFB] px-6 pt-12 sm:pt-16 shadow-soft ring-1 ring-slate-200/70 sm:mx-6 lg:mx-10 ">
                            <div className="text-center">
                                <h2 className="font-raleway text-4xl font-700 tracking-tight text-slate-800 sm:text-5xl">
                                    <span>Key </span>
                                    <span className="text-[#6EAC30]">
                                        Features
                                    </span>
                                </h2>
                                <p className="mx-auto mt-3 max-w-2xl text-sm font-normal leading-6 text-slate-500 sm:text-base">
                                    If you are still thinking: “What’s in it for
                                    Me?”, then check these cool features out:
                                </p>
                            </div>

                            <div className="relative mx-auto mt-12 max-w-5xl">
                                <div className="relative mx-auto flex min-h-[520px] items-center justify-center">
                                    <div className="relative z-10 w-[56rem] overflow-hidden  sm:w-[390px] md:w-[690px] h-[490px] sm:h-[500px] md:h-[560px] ml-[13rem] mt-[-3rem]">
                                        <img
                                            src={mob3Url}
                                            alt="App features"
                                            className=" object-contain h-[620px] sm:h-[700px] md:h-[960px]"
                                        />
                                    </div>

                                    <div className="w-full md:absolute md:inset-0 ml-[-4rem] gap-[5rem]">
                                        <div className="mt-8 flex flex-col items-center gap-6 md:mt-0 md:block">
                                            <div className="w-full max-w-[420px] rounded-2xl bg-white px-6 py-5 shadow-soft ring-1 ring-slate-200/60 md:absolute md:left-0 md:top-[90px] md:w-[380px]">
                                                <div className="flex items-center gap-4 md:flex-row-reverse md:justify-end">
                                                    <div className="grid place-items-center rounded-full ">
                                                        <img
                                                            src={shareIconUrl}
                                                            alt="Share"
                                                            className="h-25 w-25 object-contain "
                                                        />
                                                    </div>
                                                    <div className="md:text-right">
                                                        <div className="text-base font-semibold text-slate-800 md:text-right">
                                                            Share
                                                        </div>
                                                        <div className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                                            Got a hot Deal on
                                                            something? Share it
                                                            with the Community
                                                            and make somebody’s
                                                            day!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full max-w-[380px] rounded-2xl bg-white px-6 py-5 shadow-soft ring-1 ring-slate-200/60 md:absolute md:left-0 md:top-[290px] md:w-[440px]">
                                                <div className="flex items-center gap-4 md:flex-row-reverse md:justify-end">
                                                    <div className="grid h-25 w-25  place-items-center rounded-full ">
                                                        <img
                                                            src={messageIconUrl}
                                                            alt="Give Thanks"
                                                            className="h-30 w-30   object-contain"
                                                        />
                                                    </div>
                                                    <div className="md:text-right">
                                                        <div className="text-base font-semibold text-slate-800 md:text-right">
                                                            Give Thanks
                                                        </div>
                                                        <div className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                                            Someone posted that
                                                            special deal you’ve
                                                            been hunting for?
                                                            Give them a
                                                            thumbs-up and leave
                                                            a brief “Thank You"
                                                            note.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full mr-[-8rem] max-w-[420px] rounded-2xl bg-white px-6 py-5 shadow-soft ring-1 ring-slate-200/60 md:absolute md:right-0 md:top-[170px] md:w-[380px]">
                                                <div className="flex items-center gap-4">
                                                    <div className="grid  w-32 place-items-top rounded-full">
                                                        <img
                                                            src={searchIconUrl}
                                                            alt="Search"
                                                            className="h-27 w-27 object-contain"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-base font-semibold text-slate-800">
                                                            Search
                                                        </div>
                                                        <div className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                                                            Shopping for a
                                                            specific item? Type
                                                            it in and find an
                                                            exact match for your
                                                            search.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQSection />

                <section className="bg-white pb-20 sm:pb-24 w-full mt-[1rem]">
                    <div className="w-full px-4 sm:px-6 lg:px-16">
                        <div
                            className="w-full relative overflow-hidden rounded-3xl bg-[#FBFBFB] shadow-sm ring-1 ring-slate-200/70"
                            style={{
                                backgroundImage: `url('${bg2Url}')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right top",
                                backgroundSize: "620px 650px",
                            }}
                        >
                            <div className="grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-2">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={aboutUrl}
                                        alt="About"
                                        className="w-full max-w-[520px] object-contain"
                                    />
                                </div>

                                <div className="max-w-xl">
                                    <h3 className="font-raleway text-4xl font-700 tracking-tight text-slate-800">
                                        About Us
                                    </h3>

                                    <div className="mt-4 space-y-5 text-sm leading-6 text-slate-500 sm:text-base">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur. Porta neque adipiscing
                                            sit et ut placerat hendrerit justo.
                                            Tellus elementum diam mollis urna.
                                            Integer ultricies lorem adipiscing
                                            gravida. Elementum morbi lectus
                                            mattis id ultrices tempor consequat
                                            diam. Lacus odio habitant penatibus
                                            ac. In sollicitudin imperdiet
                                            aliquet urna varius.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur. Porta neque adipiscing
                                            sit et ut placerat hendrerit justo.
                                            Tellus elementum diam mollis urna.
                                            Integer ultricies lorem adipiscing
                                            gravida. Elementum morbi lectus
                                            mattis id ultrices tempor consequat
                                            diam.
                                        </p>
                                    </div>

                                    <a
                                        href="#"
                                        className="mt-8 inline-flex h-11 min-w-[180px] items-center justify-center rounded-md bg-brand px-8 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white pb-24 sm:pb-28 flex justify-center mt-[-3rem]">
                    <div className="w-[1250px] px-4 sm:px-6 ">
                        <div className="flex flex-col">
                            <div className="relative overflow-hidden rounded-3xl bg-white ">
                                <div className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 md:grid-cols-2">
                                    <img
                                        src={leftDashUrl}
                                        alt=""
                                        className="h-full w-auto -translate-x-6 -translate-y-6 select-none "
                                    />
                                    <div className="max-w-xl">
                                        <h3 className="font-raleway text-4xl font-700 leading-tight tracking-tight text-slate-800">
                                            <span>Lorem Ipsum </span>
                                            <span className="text-[#6EAC30]">
                                                Dolor
                                            </span>
                                            <span> Sit</span>
                                            <span className="block">Amet</span>
                                        </h3>
                                        <div className="mt-4 space-y-5 text-sm leading-6 text-slate-500 sm:text-base">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur. Porta neque
                                                adipiscing sit et ut placerat
                                                hendrerit justo. Tellus
                                                elementum diam mollis urna.
                                                Integer ultricies lorem
                                                adipiscing gravida. Elementum
                                                morbi lectus mattis id ultrices
                                                tempor consequat diam. Lacus
                                                odio habitant penatibus ac.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur. Porta neque
                                                adipiscing sit et ut placerat
                                                hendrerit justo. Tellus
                                                elementum diam mollis urna.
                                                Integer ultricies lorem
                                                adipiscing gravida. Elementum
                                                morbi lectus mattis id ultrices
                                                tempor consequat diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl bg-white mt-[-6rem]">
                                <div className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 md:grid-cols-2">
                                    <div className="max-w-xl">
                                        <h3 className="font-raleway text-4xl font-700 leading-tight tracking-tight text-slate-800">
                                            <span>Lorem Ipsum </span>
                                            <span className="text-[#6EAC30]">
                                                Dolor
                                            </span>
                                            <span> Sit</span>
                                            <span className="block">Amet</span>
                                        </h3>
                                        <div className="mt-4 space-y-5 text-sm leading-6 text-slate-500 sm:text-base">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur. Porta neque
                                                adipiscing sit et ut placerat
                                                hendrerit justo. Tellus
                                                elementum diam mollis urna.
                                                Integer ultricies lorem
                                                adipiscing gravida. Elementum
                                                morbi lectus mattis id ultrices
                                                tempor consequat diam. Lacus
                                                odio habitant penatibus ac.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur. Porta neque
                                                adipiscing sit et ut placerat
                                                hendrerit justo. Tellus
                                                elementum diam mollis urna.
                                                Integer ultricies lorem
                                                adipiscing gravida. Elementum
                                                morbi lectus mattis id ultrices
                                                tempor consequat diam.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <img
                                            src={rightDashUrl}
                                            alt=""
                                            className=" h-full w-auto translate-x-10 -translate-y-8 select-none "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white pb-24 sm:pb-28 mt-[-8.7rem] p-[4rem]">
                    <div className="flex w-full justify-center">
                        <div className="w-[1250px] px-4 sm:px-6">
                            <div className="grid gap-10 md:grid-cols-2">
                                <div>
                                    <div className="overflow-hidden rounded-3xl bg-[#F6FFEF]  ring-1 ring-slate-200/70">
                                        <div className="flex items-center justify-center px-8 pt-8">
                                            <img
                                                src={leftMobUrl}
                                                alt="Post insights"
                                                className="w-full max-w-[520px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="mt-6 font-raleway text-3xl font-700 leading-tight text-slate-800">
                                        Post Insights
                                    </h3>
                                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Sed quam velit lorem lorem fames in eu
                                        sit amet sem. In velit vestibulum
                                        scelerisque pulvinar bibendum. Egestas
                                        et auenean amet elit faucibus. Ut
                                        ullamcorper elit aliquam congue.
                                        Vulputate et nulla tempus.
                                    </p>
                                </div>

                                <div>
                                    <div className="overflow-hidden rounded-3xl bg-[#F6FFEF] ring-1 ring-slate-200/70">
                                        <div className="flex items-center justify-center px-8 pt-8">
                                            <img
                                                src={rightMobUrl}
                                                alt="Profile insights"
                                                className="w-full max-w-[520px] object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="mt-6 font-raleway text-3xl font-700 leading-tight text-slate-800">
                                        Profile Insights
                                    </h3>
                                    <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Sed quam velit lorem lorem fames in eu
                                        sit amet sem. In velit vestibulum
                                        scelerisque pulvinar bibendum. Egestas
                                        et auenean amet elit faucibus. Ut
                                        ullamcorper elit aliquam congue.
                                        Vulputate et nulla tempus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="best-deals"
                    className="bg-[#FBFBFB] pt-16 pb-24 sm:pb-28 scroll-mt-28"
                >
                    <div className="flex w-full justify-start">
                        <div className="w-full pl-4 pr-0 sm:pl-6 lg:pl-16">
                            <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr]">
                                <div className="max-w-sm">
                                    <h2 className="font-raleway text-4xl font-700 leading-tight text-slate-800">
                                        <span>Best </span>
                                        <span className="text-[#6EAC30]">
                                            Deals
                                        </span>
                                        <span> Of</span>
                                        <span className="block">The Day</span>
                                    </h2>
                                    <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Porta neque adipiscing sit et ut
                                        placerat hendrerit justo. Tellus
                                        elementum diam mollis urna.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-brand px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
                                    >
                                        Find More Inside the App
                                    </a>

                                    <div className="mt-8 flex items-center gap-4">
                                        <button
                                            type="button"
                                            onClick={goPrevBestDeals}
                                            className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-soft ring-1 ring-slate-200 text-slate-500 transition hover:text-slate-700"
                                            aria-label="Previous"
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
                                                <path d="M15 18l-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={goNextBestDeals}
                                            className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-soft ring-1 ring-slate-200 text-slate-700 transition hover:text-slate-900"
                                            aria-label="Next"
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
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </button>

                                        <div className="ml-2 flex items-center gap-2">
                                            {bestDealPages.map((_, i) => (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={() =>
                                                        setBestDealsPage(i)
                                                    }
                                                    aria-label={`Go to slide ${i + 1}`}
                                                    className={`rounded-full transition ${
                                                        i === bestDealsPage
                                                            ? "h-2.5 w-2.5 bg-[#6EAC30]"
                                                            : "h-2 w-2 bg-slate-300 hover:bg-slate-400"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden ">
                                    <div
                                        className="flex p-3 transition-transform duration-500 ease-out"
                                        style={{
                                            width: `${bestDealPages.length * 100}%`,
                                            transform: `translateX(-${bestDealsPage * (100 / bestDealPages.length)}%)`,
                                        }}
                                    >
                                        {bestDealPages.map((page, pageIdx) => (
                                            <div
                                                key={pageIdx}
                                                className="shrink-0 px-0"
                                                style={{
                                                    width: `${100 / bestDealPages.length}%`,
                                                }}
                                            >
                                                <div
                                                    className={`grid gap-6 ${
                                                        bestDealsPerPage === 1
                                                            ? "grid-cols-1"
                                                            : bestDealsPerPage ===
                                                                2
                                                              ? "sm:grid-cols-2"
                                                              : "sm:grid-cols-2 lg:grid-cols-3"
                                                    }`}
                                                >
                                                    {page.map((deal, idx) => (
                                                        <div
                                                            key={`${deal.id}-${idx}`}
                                                            className="rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/70 overflow-hidden"
                                                        >
                                                            <div className="flex items-center justify-between px-4 pt-4">
                                                                <div className="flex items-center gap-3">
                                                                    <img
                                                                        src={
                                                                            deal.author
                                                                        }
                                                                        alt="Author"
                                                                        className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                                                                    />
                                                                    <div className="leading-tight">
                                                                        <div className="text-xs font-semibold text-slate-800">
                                                                            Wilson
                                                                            Franci
                                                                        </div>
                                                                        <div className="text-[10px] text-slate-400">
                                                                            14m
                                                                            ago
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="inline-flex h-5 items-center rounded bg-[#6EAC30] px-2 text-[10px] font-semibold text-white">
                                                                        Follow
                                                                    </span>
                                                                    <span className="text-slate-400">
                                                                        ⋮
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="px-4 pt-4">
                                                                <div className="rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm overflow-hidden">
                                                                    <img
                                                                        src={
                                                                            deal.img
                                                                        }
                                                                        alt="Deal"
                                                                        className="h-[210px] w-full object-cover"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="px-4 pt-3">
                                                                <div className="flex items-center justify-center gap-2">
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#6EAC30]" />
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                                                </div>
                                                            </div>

                                                            <div className="px-4 pb-4 pt-3">
                                                                <div className="flex items-center justify-between text-[11px] text-slate-400">
                                                                    <span>
                                                                        Lorem
                                                                        Ipsum
                                                                    </span>
                                                                    <span className="text-slate-800 font-semibold">
                                                                        $450,000
                                                                    </span>
                                                                </div>
                                                                <div className="mt-1 text-sm font-semibold text-slate-800">
                                                                    Rebecca Tv
                                                                    Avzy
                                                                </div>
                                                                <div className="mt-1 text-[11px] leading-5 text-slate-500">
                                                                    Ukrainian
                                                                    President
                                                                    Volodymyr
                                                                    Zelensky has
                                                                    accused
                                                                    European
                                                                    countries
                                                                    that
                                                                    continue
                                                                </div>
                                                                <div className="mt-3 flex items-center gap-4 text-slate-400">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center gap-1 hover:text-slate-600"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                likeIconUrl
                                                                            }
                                                                            alt="Like"
                                                                            className="h-4 w-4 object-contain"
                                                                        />
                                                                        <span className="text-[11px] text-slate-500">
                                                                            {
                                                                                deal.likes
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center gap-1 hover:text-slate-600"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                dislikeIconUrl
                                                                            }
                                                                            alt="Dislike"
                                                                            className="h-4 w-4 object-contain"
                                                                        />
                                                                        <span className="text-[11px] text-slate-500">
                                                                            {
                                                                                deal.dislikes
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center gap-1 hover:text-slate-600"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                msgIconUrl
                                                                            }
                                                                            alt="Message"
                                                                            className="h-4 w-4 object-contain"
                                                                        />
                                                                        <span className="text-[11px] text-slate-500">
                                                                            {
                                                                                deal.comments
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex items-center gap-1 hover:text-slate-600"
                                                                    >
                                                                        <img
                                                                            src={
                                                                                shareIcon2Url
                                                                            }
                                                                            alt="Share"
                                                                            className="h-4 w-4 object-contain"
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#fff] py-20 sm:py-24">
                    <img
                        src={glowUrl}
                        alt=""
                        className="pointer-events-none absolute -left-24 bottom-[-9rem] w-[520px] max-w-none opacity-90"
                    />
                    <img
                        src={glowUrl}
                        alt=""
                        className="pointer-events-none absolute -right-28 top-0 w-[520px] max-w-none opacity-90"
                    />

                    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="font-raleway text-4xl font-700 leading-tight text-slate-800 sm:text-5xl">
                                <span className="text-[#6EAC30]">
                                    Install Now
                                </span>
                                <span> On Android Or IPhone</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
                                Lorem ipsum dolor sit amet consectetur. Porta
                                neque adipiscing sit et ut placerat hendrerit
                                justo. Integer ultricies lorem adipiscing
                                gravida. Elementum morbi lectus mattis id
                                ultrices tempor consequat diam. Locus odio
                                habitant penatibus.
                            </p>
                            <p className="mt-6 text-sm font-semibold text-slate-700 sm:text-base">
                                Ready to start saving time &amp; money? Download
                                the iJUSTPAID App for Android or iOS NOW.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 lg:grid-cols-2">
                            <div className="relative flex h-[566px] flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/70">
                                <div className="p-8">
                                    <h3 className="text-3xl font-900 text-slate-800">
                                        Android
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Download app for Android today – it's
                                        free.
                                    </p>
                                    <img
                                        src={googlePlayUrl}
                                        alt="Get it on Google Play"
                                        className="mt-5 h-12 w-auto"
                                    />
                                </div>
                                <div className="mt-auto px-6 pb-0">
                                    <img
                                        src={leftInsUrl}
                                        alt="Android App"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/70">
                                <div className="p-8">
                                    <h3 className="text-3xl font-900 text-slate-800">
                                        iOS &amp; iPadOS
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        Download app for iOS today – it's free.
                                    </p>
                                    <img
                                        src={iosUrl}
                                        alt="Download on the App Store"
                                        className="mt-5 h-12 w-auto"
                                    />
                                </div>
                                <div className="px-6 pb-0">
                                    <img
                                        src={rightInsUrl}
                                        alt="iOS App"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#fff] pt-20">
                    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ">
                        <div className="relative rounded-[28px] bg-[#6EAC30]">
                            <img
                                src={ctaUrl}
                                alt="Newsletter"
                                className="pointer-events-none absolute right-0 top-1/2 hidden w-[640px] max-w-none -translate-y-1/2 translate-x-28 object-contain lg:block"
                            />

                            <div className="grid items-center gap-10 px-8 py-12 sm:px-12 lg:grid-cols-[1fr_260px]">
                                <div>
                                    <h3 className="font-raleway text-3xl font-900 leading-tight text-white sm:text-4xl">
                                        Stay Up-To-Date With Our News,
                                        <br />
                                        Ideas And Updates
                                    </h3>
                                    <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Adipiscing lorem et.
                                    </p>

                                    <div className="mt-8 flex max-w-xl items-center gap-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your Email"
                                            className="h-12 w-[19rem] rounded-md bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                        />
                                        <button
                                            type="button"
                                            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#6EAC30]"
                                        >
                                            Send
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4"
                                            >
                                                <path d="M22 2L11 13" />
                                                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="mt-10 lg:hidden">
                                        <img
                                            src={ctaUrl}
                                            alt="Newsletter"
                                            className="w-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="hidden lg:block" />
                            </div>
                        </div>
                    </div>

                    <FooterSection logoUrl={logoUrl} />
                </section>
            </main>
        </div>
    );
}
