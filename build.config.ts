import { unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['./src/index', './src/volar-plugin'],
  hooks: {
    'build:done': async (ctx) => {
      const outDir = ctx.options.outDir;
      const emptyBuildEntries = ctx.buildEntries.filter(
        (entry) => entry.exports?.length === 0,
      );
      await Promise.all(
        emptyBuildEntries.map((entry) => {
          return unlink(resolve(outDir, entry.path));
        }),
      );
    },
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
