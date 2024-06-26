import { rem } from "@mantine/core";

export const GUTTERS = 60;
export const GUTTERS_SMALL = 30;

export const PADDING = { base: rem(GUTTERS_SMALL), sm: rem(GUTTERS) };
export const MIN_HEIGHT = {
  base: `calc(100vh - ${rem(GUTTERS_SMALL * 2)})`,
  sm: `calc(100vh - ${rem(GUTTERS * 2)})`,
};

export * from "@/app/lib/constants/externals";
export * from "@/app/lib/constants/routes";
export * from "@/app/lib/constants/lists";
export * from "@/app/lib/constants/currencies";
