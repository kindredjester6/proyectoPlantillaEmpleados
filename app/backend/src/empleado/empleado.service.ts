import { Injectable, ResponseDecoratorOptions } from '@nestjs/common';
import { BdService } from 'src/DataBase/database.service';
import { Employee } from 'util/interfaces/emploInter';
import { ResponseMsj } from 'util/interfaces/bdResponse';

/**
 * @exports EmpleadoService @class Es una clase que conlleva la logica de
 * negocios por medio de metodos que conllevan la invocación de SP's,
 * cabe mencionar que no se realizan ninguna operación luego de la invocación
 */
@Injectable()
export class EmpleadoService {
  constructor(private dataBase: BdService) {}

  async findAll(): Promise<ResponseMsj> {
    return this.dataBase.listarEmpleados();
  }

  //Crear Tipos
  async create(data: Employee): Promise<Object> {
    console.log(data)
    return this.dataBase.crearEmpleados(data);
  }

}