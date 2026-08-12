import { execFileSync } from 'child_process'
import { writeFileSync, unlinkSync, rmSync } from 'fs'

const cwd = 'I:/ceo/nexa'
const env = {
  ...process.env,
  GIT_AUTHOR_NAME: 'ombaye',
  GIT_AUTHOR_EMAIL: 'emmanuelombaye@gmail.com',
  GIT_COMMITTER_NAME: 'ombaye',
  GIT_COMMITTER_EMAIL: 'emmanuelombaye@gmail.com',
}
const git = (args) => execFileSync('git', args, { cwd, encoding: 'utf8', env })

try {
  rmSync(`${cwd}/tmp-mobile-shots`, { recursive: true, force: true })
} catch {}

git(['reset', 'HEAD'])

const dirty = git(['status', '--porcelain']).split(/\r?\n/).filter(Boolean)
for (const line of dirty) {
  const path = line.slice(3).replace(/^"|"$/g, '').replace(/\\/g, '/')
  if (
    path.startsWith('tmp-') ||
    path.startsWith('.cursor/') ||
    path.includes('tmp-mobile-shots') ||
    path.endsWith('.yucca-bak') ||
    path === 'new-tm logo.png'
  ) {
    continue
  }
  try {
    git(['add', '--', path])
  } catch (e) {
    console.log('skip', path, e.message)
  }
}

const files = git(['diff', '--cached', '--name-only']).split(/\r?\n/).filter(Boolean)
console.log('staged', files.length)
console.log(files.join('\n'))
if (!files.length) process.exit(0)

const msg = `Align home and treatments with Nexa navy/teal brand colors.

Remap forest/terracotta tokens to navy/teal/sand/cloud so index and treatment pages match shop and the rest of the site, and polish mobile nav.`
writeFileSync(`${cwd}/.git/COMMIT_MSG_TMP`, msg)
try {
  console.log(git(['commit', '-F', '.git/COMMIT_MSG_TMP']))
} finally {
  try {
    unlinkSync(`${cwd}/.git/COMMIT_MSG_TMP`)
  } catch {}
}

console.log(git(['log', '-1', '--format=%h %an <%ae> | %cn <%ce> | %s']))

for (const remote of ['origin', 'rangel']) {
  console.log(`\n=== push ${remote} ===`)
  try {
    const out = execFileSync('git', ['push', remote, 'HEAD:main'], {
      cwd,
      encoding: 'utf8',
      env,
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    console.log(out || 'ok')
  } catch (e) {
    console.log('STDOUT:', e.stdout || '')
    console.log('STDERR:', e.stderr || '')
  }
}

console.log(git(['status', '-sb']))
