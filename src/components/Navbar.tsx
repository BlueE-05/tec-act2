import Image from "next/image";
import Link from "next/link";

interface ProductProps {
    pName: string;
    pDesc: string;
    pPrice: number;
    pImage: string;
    bgColor?: string;
}

export default function Navbar() {
    return (
        <nav className="bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Image
                    className="brightness-10 invert sepia hue-rotate-600 saturate-500"
                    src="/next.svg"
                    alt="Logo"
                    width={180}
                    height={38}
                    priority
                />
                <div className="flex gap-6">
                    <Link className="text-yellow-500 font-bold hover:text-orange-600" href="..">Home</Link>
                    <Link className="text-yellow-500 font-bold hover:text-orange-600" href="../about">About</Link>
                    <Link className="text-yellow-500 font-bold hover:text-orange-600" href="../products">Products</Link>
                    <Link className="text-yellow-500 font-bold hover:text-orange-600" href="../signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}