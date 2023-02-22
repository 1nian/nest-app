import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReptileService } from './reptile.service';
import { CreateReptileDto } from './dto/create-reptile.dto';
import { UpdateReptileDto } from './dto/update-reptile.dto';

@Controller('reptile')
export class ReptileController {
  constructor(private readonly reptileService: ReptileService) {}

  @Post()
  create(@Body() createReptileDto: CreateReptileDto) {
    return this.reptileService.create(createReptileDto);
  }

  // @Get()
  // findAll() {
  //   return this.reptileService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reptileService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReptileDto: UpdateReptileDto) {
    return this.reptileService.update(+id, updateReptileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reptileService.remove(+id);
  }

  @Get('img')
  getImages() {
    return this.reptileService.getImages();
  }
}
