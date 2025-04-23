import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { HeroService } from "./hero.service";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { HeroEntity } from "./entities/hero.entity";

@Controller("heroes")
@ApiTags("heroes")
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  /**
   * Create a hero
   * @param createHeroDto
   * @returns
   */
  @Post()
  @ApiCreatedResponse({ type: HeroEntity })
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroService.create(createHeroDto);
  }

  /**
   * Get all heroes
   * @returns
   */
  @Get()
  @ApiOkResponse({ type: HeroEntity, isArray: true })
  findAll() {
    return this.heroService.findAll();
  }

  /**
   * Get a hero by ID
   * @param id
   * @returns
   */
  @Get(":id")
  @ApiOkResponse({ type: HeroEntity })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.heroService.findOne(id);
  }

  /**
   * Upadate a hero
   * @param id
   * @param updateHeroDto
   * @returns
   */
  @Patch(":id")
  @ApiOkResponse({ type: HeroEntity })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateHeroDto: UpdateHeroDto,
  ) {
    return this.heroService.update(id, updateHeroDto);
  }

  /**
   * Delete a hero
   * @param id
   * @returns
   */
  @Delete(":id")
  @ApiOkResponse({ type: HeroEntity })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.heroService.remove(id);
  }
}
