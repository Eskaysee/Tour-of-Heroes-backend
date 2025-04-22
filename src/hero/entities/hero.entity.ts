import { ApiProperty } from "@nestjs/swagger";
import { Hero } from "generated/prisma";

export class HeroEntity implements Hero {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  powerLevel: number;

  @ApiProperty()
  createdAt: Date;
}
