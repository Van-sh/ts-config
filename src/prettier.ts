import type { Config } from "prettier";

export function prettierConfig(config: Config = {}) {
   return {
      overrides: [
         {
            files: ["*.yaml", "*.yml"],
            options: {
               tabWidth: 2,
            },
         },
      ],
      plugins: [
         // @ts-ignore
         import("prettier-plugin-packagejson"),
         import("prettier-plugin-tailwindcss"),
      ],
      printWidth: 100,
      semi: true,
      tabWidth: 3,
      trailingComma: "all",
      ...config,
   } as Config;
}
