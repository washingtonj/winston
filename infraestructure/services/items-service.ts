import Prisma from 'prisma/client'
import { ItemEntity } from "@domain/entities";
import { ItemsInterface } from "@domain/interfaces";


export class ItemsService implements ItemsInterface {
  async create(item: Omit<ItemEntity, 'id'>) {
    const data = await Prisma.item.create({ data: item })

    return new ItemEntity({
      id: data.id,
      name: data.name,
      description: data.description || undefined,
      imageUrl: data.imageUrl || undefined,
    })
  }

  async update(item: ItemEntity) {
    const data = await Prisma.item.update({
      where: { id: item.id },
      data: item,
    })

    return new ItemEntity({
      id: data.id,
      name: data.name,
      description: data.description || undefined,
      imageUrl: data.imageUrl || undefined,
    })
  }

  async list() {
    const raw = await Prisma.item.findMany()

    const data = raw.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description || undefined,
      imageUrl: item.imageUrl || undefined,
    } as ItemEntity))

    return JSON.parse(JSON.stringify(data))
  }
}