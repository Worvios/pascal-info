import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-yellow-200 flex flex-col items-center gap-2 pt-4">
        <Link
          href="/"
          passHref
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          {/* Logo Frame */}
          <div className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 overflow-hidden rounded-full bg-gray-200 flex-shrink-0">
            <Image
              src="/LogoPascal.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          {/* Text (Hidden on smaller screens) */}
          <span className="hidden lg:block">Pascal info</span>
        </Link>
        <Menu />
      </div>

      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#bfdbfe] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
