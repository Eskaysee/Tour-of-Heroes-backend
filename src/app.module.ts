import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { HeroModule } from "./hero/hero.module";

@Module({
  imports: [PrismaModule, HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
