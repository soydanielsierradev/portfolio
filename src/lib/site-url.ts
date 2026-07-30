import { DATA } from "@/data/resume";

/**
 * Absolute origin to resolve relative asset paths against.
 *
 * OpenGraph routes run on the edge and fetch assets over HTTP, so a relative
 * path like "/me.jpg" has to be turned into an absolute URL. Resolving it
 * against the canonical DATA.url would make local and preview builds fetch the
 * production deployment, which 404s for any asset that has not shipped yet and
 * fails the whole image with a 500.
 */
export const getSiteOrigin = (): string => {
  if (process.env.VERCEL_ENV === "production") return DATA.url;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

/** Resolves a site-relative path to an absolute URL for the current runtime. */
export const toAbsoluteUrl = (path: string): string =>
  new URL(path, getSiteOrigin()).toString();
