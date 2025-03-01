"use client";
import Image from "next/image"
import logoImage from "@/assets/images/logo.svg"
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home"},
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
}

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

    return (<section className="py-4 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
           <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
                <div className="grid grid-cols-2 lg:grid-cols-3 rounded-full p-2 items-center px-4 md:pr-2">
                    <div>
                        <Image src={logoImage} alt="layers logo" className="h-9 md:h-auto w-auto"/>
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link)=>(
                                <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} key={link.label}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden" onClick={()=>setOpen(!isOpen)}>
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition', isOpen && 'rotate-45 -translate-y-1')}>
                            </line><line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen && 'opacity-0')}></line><line x1="3" y1="18" x2="21" y2="18"
                        className={twMerge('origin-left transition', isOpen && '-rotate-45 translate-y-1')}></line></svg>
                        <a href="https://layers.to/auth/login" target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                            <Button variant="secondary" className="hidden md:inline-flex items-center">Log in</Button>
                        </a>
                        <a href="https://layers.to/auth/join" target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                            <Button variant="primary" className="hidden md:inline-flex items-center">Sign up</Button>
                        </a>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && <motion.div
                    initial={{height: 0}}
                    animate={{height: "auto"}}
                    exit={{height: 0}}
                    className="overflow-hidden">
                        <div className="flex flex-col items-center gap-4 py-4">
                            {navLinks.map(link => (
                                <a href={link.href} key={link.label} onClick={(e) => handleSmoothScroll(e, link.href)}>{link.label}</a>
                            ))}
                        <a href="https://layers.to/auth/login" target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                            <Button variant="secondary" className="items-center">Log in</Button>
                        </a>
                        <a href="https://layers.to/auth/join" target={"_blank" + "_self"} rel={"noopener noreferrer" + undefined}>
                            <Button variant="primary" className="items-center">Sign up</Button>
                        </a>
                        </div>
                    </motion.div>}
                </AnimatePresence>
           </div>
        </div>
    </section>
    );
}
