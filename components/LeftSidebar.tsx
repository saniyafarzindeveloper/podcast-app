'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-2 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="Logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
           AudioAxis
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              key={label}
              href={route}
              className={cn("cursor-pointer flex items-center justify-center gap-2 py-4 max-lg:px-4 lg:justify-start" , {
                'bg-nav-focus border-r-4 border-orange-1' : isActive
              })}
            >
              <Image src={imgURL} alt={label} width={20} height={20} />
              <p className="text-18 text-white">{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
