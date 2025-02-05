import Button from "@/components/Button";
import Image from "next/image";
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Pointer from "@/components/Pointer";

export default function Hero() {
    return <section className="py-32 lg:pt-40 overflow-x-clip">
        <div className="container relative">
            <div className="absolute -left-32 top-16 -z-10 opacity-50 hidden lg:block">
                <Image src={designExample1Image} alt="design example 1"/>
            </div>
            <div className="absolute -right-64 -top-16 -z-10 opacity-50 hidden lg:block">
                <Image src={designExample2Image} alt="design example 2"/>
            </div>
            <div className="absolute right-80 -top-1 hidden lg:block"><Pointer name="Brian" color="red"/></div>
            <div className="absolute left-56 -bottom-10 hidden lg:block"><Pointer name="Andrea"/></div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-300 text-neutral-950 
                rounded-full font-semibold">✨ 7.5 Million seed round raised</div>
            </div>
            <h1 className="text-7xl md:text-8xl font-medium text-center mt-6">Impactful design</h1>
            <p className="text-center text-xl mt-8 text-white lg:max-w-lg mx-auto">design tools shouldn't slow you down, Layers combines
            powerful features with an intuitive interface that keeps you in your creative flow.</p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 justify-between m-auto bg-neutral-950 md:max-w-lg">
                <input type="email" placeholder="Enter Your email" className="bg-transparent pl-4 focus:outline-none w-full" />
                <Button variant="primary" type="submit" className="whitespace-nowrap px-3 md:px-5" size="sm">Sign up</Button>
            </form>
        </div>
    </section>;
}
