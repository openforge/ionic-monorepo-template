module.exports = {
    displayName: 'example-app-vue',
    preset: '../../jest.preset.ts',
    transform: {
        '^.+.vue$': 'vue3-jest',
        '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
    coverageDirectory: '../../coverage/apps/example-app-vue',
    snapshotSerializers: ['jest-serializer-vue'],
    globals: {
        'ts-jest': {
            tsconfig: 'apps/example-app-vue/tsconfig.spec.json',
            babelConfig: 'apps/example-app-vue/babel.config.js',
        },
        'vue-jest': {
            tsConfig: 'apps/example-app-vue/tsconfig.spec.json',
            babelConfig: 'apps/example-app-vue/babel.config.js',
        },
    },
};
