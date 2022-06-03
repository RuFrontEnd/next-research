// 開啟 JSX emmet => https://learningsky.io/vs-code-to-enable-emmet-support-for-jsx/
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
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
