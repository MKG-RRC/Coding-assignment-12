import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // ✅ Add TypeScript support
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: { transpileOnly: true },
        },
      ],
    });

    // ✅ Add SVG + asset loader
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: { icon: true },
        },
      ],
    });

    // ✅ Add file loader for images/fonts
    config.module?.rules?.push({
      test: /\.(png|jpg|jpeg|gif|ico|eot|ttf|woff|woff2)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default config;
