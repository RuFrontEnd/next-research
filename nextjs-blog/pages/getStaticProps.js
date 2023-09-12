// 如果頁面需要做動態路由時使用 getStaticProps ，同時你需要去列舉需要做靜態生成的路徑。
// 當函數在頁面導出 getStaticPaths（靜態生成）同時使用動態路由，Next.js將會靜態的提前渲染所有從getStaticPaths導出的所有路徑。
import Head from "next/head";

// 使用`getStaticPaths`時需要搭配`getStaticProps`
export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    // 這裡的回傳值會導入到頁面的props中
    props: { post: { data } },
  };
}

export default function SSG(props) {
  // data props from getStaticProps
  return (
    <>
      <Head>
        <title>fetch data SSG</title>
      </Head>
      fetch data SSG
      <br />
      {props.post.data.id}
    </>
  );
}
