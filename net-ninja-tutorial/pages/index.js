// 路由首頁
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quisquam
        quae nisi? Fuga eaque officia tenetur fugit assumenda et nihil animi
        laboriosam quas autem, veniam, quo consequatur unde facere consequuntur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quisquam
        quae nisi? Fuga eaque officia tenetur fugit assumenda et nihil animi
        laboriosam quas autem, veniam, quo consequatur unde facere consequuntur.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
