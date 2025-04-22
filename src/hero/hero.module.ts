import { Module } from "@nestjs/common";
import { HeroService } from "./hero.service";
import { HeroController } from "./hero.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [HeroController],
  providers: [HeroService],
  imports: [PrismaModule],
})
export class HeroModule {}
