import { Body, Controller, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContainerService } from '../../services/container/container.service';
import { CreateContainerDto } from '../../dto/container/create-container.dto';
import { UpdateContainerDto } from '../../dto/container/update-containers.dto';

@Controller('containers')
export class ContainerController {
  constructor(private containerService: ContainerService) {
  }

  @ApiOperation({
    summary: 'Return all containers list',
    tags: ['Container']
  })
  @ApiResponse({
    status: 200,
    description: 'Containers list'
  })
  @Get('')
  getAllContainers(): Promise<any> {
    return this.containerService.getAll();
  }

  @ApiOperation({
    summary: 'Create new container (only one at single request)',
    tags: ['Container']
  })
  @Post('')
  @UsePipes(ValidationPipe)
  createContainer(@Body() createContainerDto: CreateContainerDto): Promise<any> {
    return this.containerService.create(createContainerDto);
  }

  @ApiOperation({
    summary: 'Update all containers',
    tags: ['Container']
  })
  @ApiBody({
    type: UpdateContainerDto,
    isArray: true
  })
  @Put('')
  @UsePipes(ValidationPipe)
  updateContainers(@Body() updateContainerDto: UpdateContainerDto[]): Promise<any> {
    return this.containerService.update(updateContainerDto);
  }
}
