import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { SharedModule } from './shared.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.MONGODB_URI),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
