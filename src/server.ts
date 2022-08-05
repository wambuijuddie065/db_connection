import { sqlConfig } from "./Config/Config";
import mssql, { ConnectionError } from 'mssql'


const connect=async ()=>{
    const pool=await mssql.connect(sqlConfig)
    if(pool.connected){
        console.log("Connected to database.")

        const result = await mssql.query`SELECT * FROM T1 WHERE ID=1`
        console.log(result.recordset)
        
    }
}
connect()

