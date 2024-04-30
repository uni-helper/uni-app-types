const nativeTags = ['block', 'component', 'template', 'slot'];
export default [
  // [2.0.14, ]
  () => {
    return {
      version: 2,
      resolveTemplateCompilerOptions(options: Record<string, any>) {
        options.isNativeTag = (tag: string) => nativeTags.includes(tag);
        return options;
      },
    };
  },
  // [2.0.0, 2.0.13]
  ({ vueCompilerOptions }: Record<string, any>) => {
    vueCompilerOptions.nativeTags = nativeTags;
    return { version: 2 };
  },
  // [1.0.0, 1.8.27]
  ({ vueCompilerOptions }: Record<string, any>) => {
    vueCompilerOptions.nativeTags = nativeTags;
    vueCompilerOptions.experimentalRuntimeMode = 'runtime-uni-app';
    return { version: 1 };
  },
];
