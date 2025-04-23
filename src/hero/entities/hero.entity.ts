import { ApiProperty } from "@nestjs/swagger";
import { Hero, HeroType } from "generated/prisma";

export class HeroEntity implements Hero {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  powerLevel: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  power: string;

  @ApiProperty()
  type: HeroType;
}
