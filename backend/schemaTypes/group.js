export default {
    name: 'group',
    title: 'Gruppe',
    type: 'document',
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