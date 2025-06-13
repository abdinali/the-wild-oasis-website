import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-primary-50 mb-10 text-8xl font-normal tracking-tighter">
          Welcome to paradise.
        </h1>
        <Link
          href="/"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-6 text-lg font-semibold transition-all"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </>
  );
}
