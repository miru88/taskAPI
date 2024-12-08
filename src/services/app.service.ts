import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  // getDatabaseInfo() {
  //   return {
  //     host: this.configService.get<string>('DB_HOST'),
  //     port: this.configService.get<string>('DB_PORT'),
  //     username: this.configService.get<string>('DB_USER'),
  //     password: this.configService.get<string>('DB_PASSWORD'),
  //     database: this.configService.get<string>('DB_NAME'),

  //   }
  // }
}
