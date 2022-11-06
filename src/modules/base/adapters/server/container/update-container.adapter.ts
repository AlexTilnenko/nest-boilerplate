import { UpdateContainerDto } from '../../../dto/container/update-containers.dto';
import { addPrefixToKeys } from '../../../../../utils/add-prefix-to-keys';

export function UpdateContainerAdapter(value: UpdateContainerDto[]) {
  const containerItems = value.map(item => addPrefixToKeys(item));

  return {
    containers: {
      container: containerItems,
      _n: containerItems.length
    }
  }
}