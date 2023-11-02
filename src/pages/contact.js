export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/getadmin.php/`);
  //http://localhost:8080/getadmin.php/
  const repo = await res.json();
  return { props: { repo } };
}

const Contact = ({ repo }) => {
  console.log(typeof repo);
  return (
    <div className="flex w-full  flex-col items-center justify-center">
      <div className="px-3 container bg-pink-400 ">
        Contact us
        {repo.map((item) => (
          <div key={item.id}>
            <h1> {item.name}</h1>
            <b>{item.email}</b>
          </div>
        ))}
        <p>
          acwfaefaefs efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww
        </p>

        <p>
          acwfaefaefs efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww
        </p>
        <p>
          acwfaefaefs efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww acwfaefaefs
          efwwewffffffffffffff fewwwwwwwwwwwwwwwwwww
        </p>
      </div>
    </div>
  );
};

export default Contact;
