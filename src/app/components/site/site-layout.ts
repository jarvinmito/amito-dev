/** Shared horizontal rhythm: full bleed with generous gutters (not a typographic measure cage). */
export const SITE_HORIZONTAL_PAD =
  "px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36";

/** Shared content rail for the current public site; always left-aligned. */
export const SITE_CONTENT_RAIL = "w-full max-w-[760px] ml-0 mr-auto";

/**
 * Comfortable reading width for prose and introductions; always left-aligned
 * (`ml-0 mr-auto`) inside the padded shell — never horizontally centered.
 */
export const SITE_CONTENT_MEASURE = SITE_CONTENT_RAIL;
