import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Handles HTTP GET requests to the root URL
  getHello(): string {
    return this.appService.getHello();
  }
}
