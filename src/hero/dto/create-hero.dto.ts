import { ApiProperty } from "@nestjs/swagger";

export class CreateHeroDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true, default: 500 })
  powerLevel: number;

  @ApiProperty()
  createdAt: Date;
}
