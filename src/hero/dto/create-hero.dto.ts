import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { HeroType } from "generated/prisma";

export class CreateHeroDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, default: 500 })
  @IsInt()
  @Min(0)
  @Max(5000)
  powerLevel: number;

  @IsString()
  @IsNotEmpty()
  power: string;

  @IsEnum(HeroType, { message: "Type must be one of: TANK, HEALER or DPS" })
  type: HeroType;
}
