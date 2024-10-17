import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}
