export class ItemEntity {
  public readonly id!: string;
  public readonly name!: string;
  public readonly description?: string;
  public readonly imageUrl?: string;

  constructor (data: ItemEntity) {
    Object.assign(this, data);
  }
} 