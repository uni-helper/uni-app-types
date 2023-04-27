import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import pkg from './package.json' assert { type: 'json' };

const isDev = !!process.env.ROLLUP_WATCH;

const packageJson = pkg;
const dependencies = packageJson.dependencies ?? {};
const peerDependencies = packageJson.peerDependencies ?? {};
const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies)];

export default defineConfig({
  input: './src/index.ts',
  output: {
    file: './dist/index.d.ts',
    format: 'esm',
  },
  plugins: [dts({ respectExternal: true }), del({ targets: './dist/**/*', runOnce: isDev })],
  external,
});
