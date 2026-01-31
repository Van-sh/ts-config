# TS-Config

My Config files

## Installation

```sh
pnpm add jsr:@1sh/config
```

```sh
bun x jsr add @1sh/config
```

```sh
yarn add jsr:@1sh/config
```

```sh
npx jsr add @1sh/config
```

## Usage

### Prettier

prettierrc.config.ts

```ts
import { prettierConfig } from "@1sh/config";

export default prettierConfig({
   // custom overrides
});
```
