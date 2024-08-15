const sql = require('mssql')

// const config = {
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     server: process.env.DATABASE_SERVER || "LocalHost", // You can use 'localhost\\instance' to connect to named instance
//     database: process.env.DATABASE_DB,
//     options: {
//         encrypt: false, // for azure
//         trustServerCertificate: true // change to true for local dev / self-signed certs
//     }
// }

// console.log(config);

// (async function () {
//     let pool =await sql.connect(config)
//     let result = await pool.request().query`
//     DECLARE @outResult int
//     exec [dbo].[listEmployees]
//       @outResult = @outResult output
//     `
//     console.log(result)
// })()


class DataBaseClient {
    private pool:any
    private config = {}
    public user:String
    private password:String
    private server:String
    public database:String
    private options:object
    
    /**
     *
     */
    constructor(user, password, server, database, options)
    constructor(config);
    constructor(miArray: any[]) {
        if(miArray.length == 5){
            this.user = miArray[0];
            this.password = miArray[1];
            this.server = miArray[2];
            this.database = miArray[3];
            this.options = miArray[4];
        }else{
            this.config={
                user: miArray[0],
                password: miArray[1],
                server: miArray[2],
                database: miArray[3],
                options: miArray[4]
            }
        }
    }
    /**
     * connect
     */
    public async connect() {
        if (Object.keys(this.config).length === 0){ 
            this.config = {
                user: this.user,
                password: this.password,
                server: this.server || "LocalHost", // You can use 'localhost\\instance' to connect to named instance
                database: this.database,
                options: this.options
            }
        }

        this.pool = await sql.connect(config)
    }
    
    /**
     * listarEmpleados
     */
    public async listarEmpleados() {
        let result = await this.pool.request().query`
            DECLARE @outResult int
            exec [dbo].[listEmployees]
            @outResult = @outResult output
        `
        console.log(result)
    }
}

const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    server: process.env.DATABASE_SERVER || "LocalHost", // You can use 'localhost\\instance' to connect to named instance
    database: process.env.DATABASE_DB,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
let miBD = new DataBaseClient(config);

(async function name() {
    await miBD.connect();
    await miBD.listarEmpleados();
})()