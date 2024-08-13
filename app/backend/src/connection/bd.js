const sql = require('mssql')

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

console.log(config);

(async function () {
    let pool =await sql.connect(config)
    let result = await sql.query`
    DECLARE @outResult int
    exec [dbo].[listEmployees]
      @outResult = @outResult output
    `
    console.log(result)

})()