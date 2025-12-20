import { generateData } from '../lib/ai';

async function main() {
  const outDir = process.cwd() + '/generated-posts';
  console.log('Generating 3 posts to', outDir);
  await generateData({ limit: 55, delayMs: 2000, outDir, useAI: false });
  console.log('Done. Check generated files in', outDir);
}

main().catch((err) => {
  console.error('Generation failed:', err);
  process.exit(1);
});
