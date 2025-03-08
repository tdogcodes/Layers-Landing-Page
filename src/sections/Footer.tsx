import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";

const footerLinks = [
    { link: "https://layers.to/contact", label: "Contact" },
    { link: "https://layers.to/legal/privacy-policy", label: "Privacy Policy" },
    {
        link: "https://layers.to/legal/terms-and-conditions",
        label: "Terms & Conditions",
    },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div>
                        <Image src={logoImage} alt="logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.link}
                                    className="text-white/50 text-sm"
                                    target={
                                        link.link.startsWith("http")
                                            ? "_blank"
                                            : "_self"
                                    }
                                    rel={
                                        link.link.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
