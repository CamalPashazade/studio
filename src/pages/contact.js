// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:8080/getadmin.php/");
//   const repo = await res.json();
//   return { props: { repo } };
// }

import { useEffect, useState } from "react";

const Contact = () => {
  
    const [data, setData] = useState(false)

 
  useEffect(() => {
    fetch('http://localhost:8080/getadmin.php/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
    
      })
  }, [])

  return (
    <div className="flex w-full  flex-col items-center justify-center">
      <div className="px-3 container bg-pink-400 ">
        Contact us
        {data.map((item) => (
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
