import { ItemEntity } from "../entities"

export interface ItemsInterface {
  create: (item: Omit<ItemEntity, 'id'>) => Promise<ItemEntity>;
  update: (item: ItemEntity) => Promise<ItemEntity>;
  list: () => Promise<ItemEntity[]>;
}