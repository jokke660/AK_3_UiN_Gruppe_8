import { createClient } from '@sanity/client';

export default createClient({
  projectId: "hc28tey6",
  dataset: "production",
  useCdn: true,
  apiVersion: '2025-04-19', 
});
