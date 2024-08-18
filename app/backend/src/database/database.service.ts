import {Injectable, OnModuleInit } from '@nestjs/common';
import {DataBaseClient} from 'connection/bd'
@Injectable()
export class BdService extends DataBaseClient implements OnModuleInit {
  constructor(){
    const config = {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      server: process.env.DATABASE_SERVER, // You can use 'localhost\\instance' to connect to named instance
      database: process.env.DATABASE_DB,
      options: {
          encrypt: false, // for azure
          trustServerCertificate: true // change to true for local dev / self-signed certs
      }
  }
    super(config);
  }

  async onModuleInit() {
    await this.connect();
  }
}