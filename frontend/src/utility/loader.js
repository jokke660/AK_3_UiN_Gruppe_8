import {createClient} from "@sanity/client"

const client = createClient({
      projectId: 'ji1e7nvo',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2025-04-15"
})
export const getPerson = () => await client.fetch('*[_type == "author"]')
