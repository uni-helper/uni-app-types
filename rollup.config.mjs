import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { getPackageJson } from '@modyqyw/utils';

const isDev = !!process.env.ROLLUP_WATCH;

const packageJson = getPackageJson();
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
