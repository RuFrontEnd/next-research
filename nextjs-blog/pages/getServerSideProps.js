// 如果需要每次使用者瀏覽網頁時，伺服器都能呼叫 API，將最新的資料都注入到 HTML，則可以選擇使用 getServerSideProps
import Head from "next/head";

// 每一次請求都會拿到資料
export async function getServerSideProps() {
  // 呼叫其他api拿取資料
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  // 傳送data到頁面的props
  return { props: { data } };
}

export default function SSR({ data }) {
  // data props from getServerSideProps
  return (
    <>
      <Head>
        <title>fetch data SSR</title>
      </Head>
      fetch data SSR
      <br />
      {data.id}
    </>
  );
}
