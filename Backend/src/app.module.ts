import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactosModule } from './contactos/contactos.module';

@Module({
  imports: [ContactosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
