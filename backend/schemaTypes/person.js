export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'Fornavn',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'lastName',
        title: 'Etternavn',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'image',
        title: 'Profilbilde',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'bio',
        title: 'Biografi',
        type: 'text'
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ],
    preview: {
      select: {
        title: 'firstName',
        subtitle: 'lastName',
        media: 'image'
      }
    }
  }