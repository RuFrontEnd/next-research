export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map(ninja => ({ params: { id: ninja.id.toString() } }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
}

const Details = (props) => {
  return (
    <div>
      <h1>{props.ninja.nae}</h1>
      <p>{props.ninja.email}</p>
      <p>{props.ninja.website}</p>
      <p>{props.ninja.address.city}</p>
    </div>
  );
};

export default Details;
