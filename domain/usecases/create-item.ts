import { ItemEntity } from "../entities";
import { ItemsInterface } from "../interfaces";

export class CreateItemUseCase {
  constructor(private readonly itemsService: ItemsInterface) { }

  async exec(item: Omit<ItemEntity, 'id'> & { id?: string }) {

    if (!item.id) {
      return this.itemsService.create(item);
    }

    return this.itemsService.update(item as ItemEntity);
  }
}