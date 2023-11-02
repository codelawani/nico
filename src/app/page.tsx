import Image from "next/image";
import Link from "next/link";
import { data, SOCIALS } from "./site/config";
export default function Home() {
  return (
    <div className="mt-40">
      <div className="font-extrabold text-5xl">Hello I&apos;m Nico 👋</div>
      <div className="mt-5">{data.summary}</div>
    </div>
  );
}
