

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/getadmin.php/')
  const repo = await res.json()
  return { props: { repo } }
}

const Contact = ({repo}) => {
  // console.log(typeof repo);
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="container bg-pink-400 ">
      Contact us
      {repo.map((item) => (
        <div key={item.id}>
             <h1 > {item.name}</h1>
             <b>{item.email}</b>
        </div>
     
        
      ))}
    </div>
    </div>
  );
};

export default Contact;
