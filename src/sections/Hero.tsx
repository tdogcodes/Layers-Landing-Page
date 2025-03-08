"use client";

import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, -80], x: [0, 80] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 80], x: [0, -80] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, [
        leftDesignScope,
        leftDesignAnimate,
        leftPointerScope,
        leftPointerAnimate,
        rightDesignScope,
        rightDesignAnimate,
        rightPointerScope,
        rightPointerAnimate,
    ]);

    return (
        <section
            className="py-32 lg:pt-40 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
            id="home"
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 z-10 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        alt="design example 1"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute left-32 -bottom-10 z-10 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: -100, x: 100 }}
                    drag
                    className="absolute -right-64 -top-16 z-10 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="design example 2"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: -100, x: 100 }}
                    drag
                    className="absolute right-32 top-10 z-10 hidden lg:block"
                >
                    <Pointer name="Brian" color="red" />
                </motion.div>
                <motion.div drag>
                    <div className="flex justify-center">
                        <div
                            className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-300 text-neutral-950 
                    rounded-full font-semibold"
                        >
                            ✨ 7.5 Million seed round raised
                        </div>
                    </div>
                </motion.div>
                <h1 className="text-7xl md:text-8xl font-medium text-center mt-6">
                    Impactful design
                </h1>
                <p className="text-center text-xl mt-8 text-white lg:max-w-lg mx-auto">
                    design tools shouldn&apos;t slow you down, Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 justify-between m-auto bg-neutral-950 md:max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        className="bg-transparent pl-4 focus:outline-none w-full"
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        className="whitespace-nowrap px-3 md:px-5"
                        size="sm"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </section>
    );
}
