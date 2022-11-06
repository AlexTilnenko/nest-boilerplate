import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContainerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public id: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public weight: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public volume: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public qty: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public price: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public maxCount: number;
}