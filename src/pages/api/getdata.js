
import mysql from "mysql2/promise";


export default async function handler(req, res) {

    const dbconnection =await mysql.createConnection({

        host: 'localhost',
        database: "studio",
        user: 'root',
        password: '',
        // socketPath: '/Applications/XAMP/tmp/mysql/mysql.sock',
    })

    try{
        
        const query = "SELECT * FROM admin";
        const values =[]
        const [data] =await dbconnection.execute(query,values);
        dbconnection.end();
        res.status(200).json({ results: data })
    }catch(err){
        
        res.status(500).json({ err: 'errrrrrrrrrooooor' })
    }
  
  }
  