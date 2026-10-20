import { profile } from "@/data/portfolio";
import { OrbitFrame } from "@/components/ui/OrbitFrame";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-7 text-[13px] text-stone sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.fullName}
      </p>
      <OrbitFrame className="size-10" />
      <p>
        {profile.location} — {profile.country}
      </p>
    </footer>
  );
}
