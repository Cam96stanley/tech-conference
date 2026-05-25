import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="border-b border-border mx-4 py-4 flex justify-between items-center">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="" width={191} height={31} />
      </Link>
      <HeaderMenu/>
    </header>
  );
}
