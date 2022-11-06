import { CreateContainerDto } from '../../dto/container/create-container.dto';
import { UpdateContainerDto } from '../../dto/container/update-containers.dto';

export interface ContainerServiceInterface {
  /**
   * Get all containers
   * @return { Promise<any> }
   */
  getAll(): Promise<any>;

  /**
   * Create new container
   * @param { CreateContainerDto } container
   *
   * @return { Promise<any> }
   */
  create(container: CreateContainerDto): Promise<any>;

  /**
   * Update containers
   * @param { UpdateContainerDto[] } containers
   *
   * @return { Promise<any> }
   */
  update(containers: UpdateContainerDto[]): Promise<any>;
}