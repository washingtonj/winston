// recreate items-service.ts using in memory pattern

import { ItemEntity } from "@domain/entities"
import { ItemsInterface } from "@domain/interfaces"
import { randomUUID } from "crypto"
import { TestFragment } from '@utils/index'

export class ItemsInMemo implements ItemsInterface {
  private items: ItemEntity[] = []

  constructor() {
    this.items = TestFragment.load('items.json')
  }

  async create(item: Omit<ItemEntity, 'id'>) {
    const newItem = new ItemEntity({
      id: randomUUID(),
      name: item.name,
      description: item.description || undefined,
      imageUrl: item.imageUrl || undefined,
    })

    this.items.push(newItem)
    TestFragment.save(this.items, 'items.json')

    return newItem
  }

  async update(item: ItemEntity) {
    const index = this.items.findIndex((i) => i.id === item.id)

    if (index === -1) {
      throw new Error('Item not found')
    }

    this.items[index] = item
    TestFragment.save(this.items, 'items.json')

    return item
  }

  async list() {
    return JSON.parse(JSON.stringify(this.items))
  }
}

