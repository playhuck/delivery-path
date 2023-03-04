import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PathsModule } from './paths/paths.module';

@Module({
  imports: [PathsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
