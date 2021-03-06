// 路由首頁
import Head from "next/head"; // revise meta data
import styles from "../styles/Home.module.css"; // [name].module.css => 支援 styles.className 寫法, 可避免全域汙染問題
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjajs" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          quisquam quae nisi? Fuga eaque officia tenetur fugit assumenda et
          nihil animi laboriosam quas autem, veniam, quo consequatur unde facere
          consequuntur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          quisquam quae nisi? Fuga eaque officia tenetur fugit assumenda et
          nihil animi laboriosam quas autem, veniam, quo consequatur unde facere
          consequuntur.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
