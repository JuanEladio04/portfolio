import Image from "next/image";
import { profile } from "@/data/portfolio";
import geoMark from "@/assets/images/geo-mark.webp";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-7 text-[13px] text-stone sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.fullName}
      </p>
      <Image src={geoMark} alt="" width={40} height={40} />
      <p>
        {profile.location} — {profile.country}
      </p>
    </footer>
  );
}
