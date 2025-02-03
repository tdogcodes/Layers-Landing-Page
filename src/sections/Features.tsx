import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import Avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center"><Tag>Features</Tag></div>
                <h2 className="text-6xl font-medium text-center mt-6 mx-auto max-w-2xl">Where power meets <span className="text-lime-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center justify-center ">
                            <Avatar className="z-40">
                                <Image src={Avatar1} alt="avatar 1" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={Avatar2} alt="avatar 2" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-violet-500 z-20">
                                <Image src={Avatar3} alt="avatar 3" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({length: 3}).map((_,i) => (
                                        <span key={i} className="size-1.5 bg-white rounded-full inline-flex"></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">We've achieved{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">Shift</Key>
                            <Key>Alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
                            <span className="bg-lime-400 text-xl text-neutral-950 size-5 rounded-full inline-flex items-center justify-center">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
