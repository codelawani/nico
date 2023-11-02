import Image from "next/image";
import Link from "next/link";
import { data } from "./site/config";
export default function Home() {
  const { github, linkedIn, x, email } = data.socials;
  return (
    <div className="mt-40 ml-10 mr-5">
      <div className="font-extrabold text-5xl">Hello I&apos;m Nico 👋</div>
      <div className="mt-5">{data.summary}</div>
      <div className="mt-5">
        <div>
          <Link className="text-blue-600" href={github.url}>
            github{" "}
          </Link>
          <Link className="text-blue-600" href={x.url}>
            x{" "}
          </Link>
          <Link className="text-blue-600" href={email.url}>
            mail{" "}
          </Link>
          <Link className="text-blue-600" href={linkedIn.url}>
            linkedIn{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
