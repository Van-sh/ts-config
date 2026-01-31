import type { Config } from "prettier";

export function prettierConfig({ plugins = [], ...config }: Config = {}): Config {
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
         import("prettier-plugin-packagejson"),
         import("prettier-plugin-tailwindcss"),
         import("@ianvs/prettier-plugin-sort-imports"),
         ...plugins,
      ],
      tailwindFunctions: ["cn"],
      importOrder: [
         "<BUILTIN_MODULES>",
         "",
         "<THIRD_PARTY_MODULES>",
         "",
         "^(?!.*[.]css$)~",
         "^(?!.*[.]css$)[..]",
         "^(?!.*[.]css$)[.]",
         "",
         "^@repo/.*$",
         "",
         "^(?![~|..|.]).*[.]css$",
         "^~.*[.]css$",
         "^[..].*[.]css$",
         "^[.].*[.]css$",
      ],
      importOrderSafeSideEffects: ["^(?!.*[.]css$)[./].*$", ".css$"],
      importOrderTypeScriptVersion: "5.0.0",
      printWidth: 100,
      semi: true,
      tabWidth: 3,
      trailingComma: "all",
      ...config,
   } as Config;
}
