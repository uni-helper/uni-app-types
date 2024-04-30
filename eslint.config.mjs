import { eslint } from '@modyqyw/fabric';

export default eslint({
  typescript: {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
    },
  },
});
