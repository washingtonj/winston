import { ItemsInterface } from "@domain/interfaces";

export class ListItemsUseCase {
  constructor(private readonly itemsService: ItemsInterface) { }

  async exec() {
    return this.itemsService.list();
  }
}