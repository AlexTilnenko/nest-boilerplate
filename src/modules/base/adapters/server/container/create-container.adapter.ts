import { CreateContainerDto } from '../../../dto/container/create-container.dto';
import { addPrefixToKeys } from '../../../../../utils/add-prefix-to-keys';

export function CreateContainerAdapter(container: CreateContainerDto) {
  return {
    container: addPrefixToKeys(container)
  };
}