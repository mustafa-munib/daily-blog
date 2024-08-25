import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-7 pb-9 pt-3 mb-5">
      <Link href="/" className="font-bold text-3xl">
        Mustafa Hussaini<span className="text-primary">Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
