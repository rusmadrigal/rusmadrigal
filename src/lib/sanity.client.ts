import { createClient } from "@sanity/client";


export const sanityClient = createClient({
  projectId: "7p4g0sah",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
