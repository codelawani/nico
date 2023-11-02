import Image from "next/image";
import { data } from "./site/config";
export default function Home() {
  return (
    <div className="mt-40 ml-10 mr-5">
      <div className="font-extrabold text-5xl">Hello I&apos;m Nico 👋</div>
      <div className="mt-5">{data.about}</div>
    </div>
  );
}
