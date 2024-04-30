import { eslint } from '@modyqyw/fabric';

export default eslint({
  perfectionist: false,
  typescript: {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
    },
  },
});
