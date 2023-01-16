// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemEntity } from '@domain/entities'
import { CreateItemUseCase, ListItemsUseCase } from '@domain/usecases'
import { ItemsService, ItemsInMemo } from '@infraestructure/services'
import { IS_DEVELOPMENT } from 'consts'

export type DTO = {
  name: string
  description?: string
  imageUrl?: string
}

export const services = {
  items: IS_DEVELOPMENT ? new ItemsInMemo() : new ItemsService()
}

export const usecases = {
  createItem: new CreateItemUseCase(services.items),
  listItems: new ListItemsUseCase(services.items)

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemEntity | ItemEntity[]>
) {

  if (req.method === 'POST' || req.method === 'PUT') {
    const status = req.method === 'POST' ? 201 : 204
    const data = req.body as DTO
    const items = await usecases.createItem.exec(data)
    res.status(status).json(items)
  }

  if (req.method === 'GET') {
    const items = await usecases.listItems.exec()
    res.status(200).json(items)
  }
}
