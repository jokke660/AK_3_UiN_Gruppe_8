export default {
    name: 'group', // navnet på dokumenttypen i Sanity
    title: 'Gruppe', // visningsnavn i Sanity Studio
    type: 'document', //angir at dette er et dokument
    fields: [
      {
        name: 'groupName', 
        title: 'Gruppenavn',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'members',
        title: 'Medlemmer',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'person' }]
          }
        ]
      }
    ]
  }