export const projectId = process.env.SANITY_STUDIO_PROJECT_ID;

if (!projectId) {
    throw new Error(
        "Missing environment variable: SANITY_STUDIO_PROJECT_ID",
    );
}

export const dataset = process.env.SANITY_STUDIO_DATASET ?? "production";

if (!dataset) {
    throw new Error("Missing environment variable: SANITY_STUDIO_DATASET");
}
