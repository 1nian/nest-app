import { PartialType } from '@nestjs/mapped-types';
import { CreateReptileDto } from './create-reptile.dto';

export class UpdateReptileDto extends PartialType(CreateReptileDto) {}
