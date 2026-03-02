/** Pleinen met slug voor URL en weergavenaam – pas aan naar jouw pleinen */
export const PLEINEN = [
  { slug: "plein", name: "Plein" },
] as const;

export type PleinSlug = (typeof PLEINEN)[number]["slug"];
export type PleinItem = (typeof PLEINEN)[number];

export const PLEIN_SLUGS: string[] = PLEINEN.map((p) => p.slug);
