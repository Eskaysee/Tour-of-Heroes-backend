import { Injectable } from "@nestjs/common";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  /**
   * This action adds a new hero
   * @param createHeroDto
   * @returns
   */
  create(createHeroDto: CreateHeroDto) {
    return this.prisma.hero.create({
      data: createHeroDto,
    });
  }

  /**
   * This action returns all hero
   * @returns
   */
  findAll() {
    return this.prisma.hero.findMany();
  }

  /**
   * This action returns a #${id} hero
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.prisma.hero.findUnique({ where: { id } });
  }

  /**
   * This action updates a #${id} hero
   * @param id
   * @param updateHeroDto
   * @returns
   */
  update(id: number, updateHeroDto: UpdateHeroDto) {
    return this.prisma.hero.update({
      where: { id },
      data: updateHeroDto,
    });
  }

  /**
   * This action removes a #${id} hero
   * @param id
   * @returns
   */
  remove(id: number) {
    return this.prisma.hero.delete({
      where: { id },
    });
  }
}
