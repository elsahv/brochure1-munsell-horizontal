import { createClient, groq } from "next-sanity";

export async function getWebsites() {
  const client = createClient({
    projectId: "sow4db17",
    dataset: "production",
    apiVersion: "2023-05-04",
  });

  return client.fetch(
    groq`*[_type == "websites]{
            _id,
            name,
        }`
  );
}
