import Link from 'next/link';
import Head from 'next/head'; // 自動改變頁籤名稱
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // 載入時機 ( lazyOnload 為瀏覽器閒置時 )
        onLoad={() =>
          console.log(`腳本正確地載入，window.FB 已被定義`)
        } // 載入完成時執行
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          Back to home
        </Link>
      </h2>
    </Layout>
  );
}