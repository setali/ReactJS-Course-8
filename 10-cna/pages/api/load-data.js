import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

export default function handler (req, res) {
  const { serverRuntimeConfig } = getConfig()
  const filePath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    './json',
    'data.json'
  )

  const data = fs.readFileSync(filePath, 'utf-8')
  res.status(200).json(data)
}
