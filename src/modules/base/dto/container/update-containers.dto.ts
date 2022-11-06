import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContainerDto {
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
  public weightov: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public volume: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public volumeov: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public qty: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public qtyov: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public price: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public priceov: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public maxCount: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  public maxCountov: number;

  @ApiProperty()
  @IsString()
  public type: string;
}