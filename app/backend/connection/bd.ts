import {connect, Int, Money, VarChar} from 'mssql'
//const sql = require('mssql')

export class DataBaseClient {
    private pool:any
    private config = {}
    
    /**
     * @constructor Este puede recibir 1 o 5 parametros, 
     * de los cuales serán escenciales a la hora de iniciar sesión
     * en la base de datos.
     */
    constructor(config);
    constructor(user, password, server, database, options);
    constructor(...args: any[]) {
        if(args.length == 5){
            this.config = {
                user:args[0]
                ,password:args[1]
                ,server:args[2]
                ,database:args[3]
                ,options:args[4]
            }
        }else{
            this.config = args[0]
        }
    }

    /**
     * Conexión con la base de datos
     * @description Se conecta por medio del atributo config o 
     * por los atributos de 
     */
    public async connect() {
        this.pool = await connect(this.config)
    }
    
    /**
     * listarEmpleados
     */
    public async listarEmpleados() {
        let result = await this.pool.request()
            .output('outResult', Int)
            .execute('listEmployees');
        return result;
    }

    public async crearEmpleados(nombre:String, salario:number){
        let result = await this.pool.request()
            .input('Nombre', VarChar(64), nombre)
            .input('Salario', Money, salario)
            .output('outResult', Int)
            .execute('createEmployee')
        return {output:result.output.outResult, returnValue:result.returnValue};
    }
}