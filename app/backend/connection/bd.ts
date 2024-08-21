import {connect, Int, Money, VarChar} from 'mssql'
import { Employee } from 'util/interfaces/emploInter'
import { ResponseMsj } from 'util/interfaces/bdResponse'
/**
 * DataBaseClient
 * @abstract Es una clase de la cual el cliente
 * pueda realizar su conexión y peticiones a la base
 * de datos y realizar sus respectiva solicitudes
 */
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
     * @abstract Obtiene la lista de empleado
     * @description A la hora de recibir la solicitud del 
     * cliente(web/dominio) este obtendrá un objeto con los empleados
     * obtenido por medio de la base de datos
     * @var result Variable que contiene los objetos
     */
    public async listarEmpleados() {
        let result:ResponseMsj
        result = await this.pool.request()
            .output('outResult', Int)
            .execute('listEmployees');
        return result;
    }

    /**
     * @typedef {Employee}
     * @param request Solicitud del cliente
     * @returns {ResponseMsj}
     * @abstract Crear un empleado en la base de datos
     */
    public async crearEmpleados(request: Employee){
        let result:ResponseMsj
        console.log(request)
        result = await this.pool.request()
            .input('Nombre', VarChar(64), request.Nombre)
            .input('Salario', Money, request.Salario)
            .output('outResult', Int)
            .execute('createEmployee')
        return {output:result.output.outResult, returnValue:result.returnValue};
    }
}