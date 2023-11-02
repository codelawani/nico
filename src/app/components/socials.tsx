import { SOCIALS } from "../site/config";
import Link from "next/link";
function Socials() {
  return (
    <div className="mt-5 w-6 fixed right-5 top-1/4">
      {SOCIALS.map((social) => (
        <div key={social.id} className="mt-5 hover:scale-125">
          <Link className="" href={social.href} target="_blank">
            <social.icon />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Socials;
