import { resolve } from "path";
import { defineConfig } from "tsup";

export default defineConfig({
   entry: {
      index: resolve(__dirname, "src/index.ts"),
   },
   format: ["cjs", "esm"],
   dts: true,
});
