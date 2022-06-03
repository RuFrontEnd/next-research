// 開啟 JSX emmet => https://learningsky.io/vs-code-to-enable-emmet-support-for-jsx/
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image"; // lazy loading

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src={logo.src} width={128} height={77} />
      </div>
      <Link href="/">
        <a href="">Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <Link href="/ninjas">
        <a href="">Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
