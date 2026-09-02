// Validate every bundled skill's frontmatter (dependency-free).
// Usage: node scripts/check-skills.mjs   (exit 1 on any failure)
import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const skillsRoot = join(dirname(fileURLToPath(import.meta.url)), '..', 'skills')

const dirs = (await readdir(skillsRoot, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

let failed = 0
console.log(`found ${dirs.length} skill dir(s) under skills/`)
for (const dir of dirs) {
  const file = join(skillsRoot, dir, 'SKILL.md')
  const problems = []
  try {
    const raw = await readFile(file, 'utf8')
    const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw)
    if (!fm) problems.push('missing YAML frontmatter')
    else {
      for (const key of ['name:', 'description:']) if (!fm[1].includes(key)) problems.push(`missing frontmatter key "${key}"`)
    }
  } catch (err) {
    problems.push(`unreadable: ${err.message}`)
  }
  if (problems.length) { failed++; console.error(`skills/${dir}: FAIL — ${problems.join('; ')}`) }
}
console.log(failed ? `\n${failed} skill(s) failed validation` : '\nall skills valid')
process.exit(failed ? 1 : 0)
