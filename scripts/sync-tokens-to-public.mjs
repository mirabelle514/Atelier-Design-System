import fs from 'node:fs/promises'
import path from 'node:path'

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function copyFile(from, to) {
  await ensureDir(path.dirname(to))
  await fs.copyFile(from, to)
}

async function main() {
  const root = process.cwd()
  const distRoot = path.join(root, 'tokens', 'dist')
  const outDir = path.join(root, 'public', 'tokens')

  await ensureDir(outDir)

  await copyFile(path.join(distRoot, 'json', 'tokens.json'), path.join(outDir, 'tokens.json'))
  await copyFile(path.join(distRoot, 'js', 'tokens.js'), path.join(outDir, 'tokens.js'))
  await copyFile(path.join(distRoot, 'js', 'tokens.d.ts'), path.join(outDir, 'tokens.d.ts'))
  await copyFile(path.join(distRoot, 'css', 'tokens.css'), path.join(outDir, 'tokens.css'))

  console.log(`Synced tokens to ${path.relative(root, outDir)}/`)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

