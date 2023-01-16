import fs from 'fs'

const foldername = '_tests-fragments'

export async function save<T = any>(data: T, filename: string) {
  fs.mkdirSync(foldername, { recursive: true })
  fs.writeFileSync(`${foldername}/${filename}`, JSON.stringify(data))
}

export function load<T = any>(filename: string): T {
  try {
    return JSON.parse(
      fs.readFileSync(`${foldername}/${filename}`, { encoding: 'utf-8' })
    )
  } catch (error) {
    return [] as T
  }
}

export async function killEvidences() {
  fs.rmSync(foldername, { recursive: true, force: true })

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 9000)
  })
}