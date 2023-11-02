import Image from "next/image";
import Link from "next/link";
import { data, SOCIALS } from "./site/config";
export default function Home() {
  const { github, linkedIn, x, email } = data.socials;
  return (
    <div className="mt-40 ml-10 mr-5">
      <div className="font-extrabold text-5xl">Hello I&apos;m Nico 👋</div>
      <div className="mt-5">{data.summary}</div>
      <div className="mt-5 ml-[96%] md:ml-[98%] w-6">
        {SOCIALS.map((social) => (
          <div key={social.id} className="mt-5 hover:scale-125">
            <Link className="" href={social.href}>
              <social.icon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
