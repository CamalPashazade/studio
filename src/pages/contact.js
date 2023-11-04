import Loading from "@/components/loading/Loading";
import Meta from "@/components/meta/Meta";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_API_URL}/getadmin.php/`
//   );
//   //http://localhost:8080/getadmin.php/
//   const repo = await res.json();
//   return { props: { repo } };
// }

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, [users]);

  return (
    <div className="flex w-full  flex-col items-center justify-center">
      <Meta />

      <div className="px-3 container bg-gray-400 ">
        Contact us
        {loading ? (
          <Loading />
        ) : (
          users?.map((item) => (
            <div key={item.id} className="mt-3">
              <b> {item.name}</b>
              <h3>{item.email}</h3>
              <p>{item.address.city}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Contact;
