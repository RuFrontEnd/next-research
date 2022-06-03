import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timoeut = setTimeout(() => {
      router.push('/');
    }, 3 * 1000);

    return () => {
      clearTimeout(timoeut);
    };
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That page connot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
