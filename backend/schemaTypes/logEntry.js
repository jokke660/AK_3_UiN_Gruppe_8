export default {
    name: 'logEntry',
    title: 'Logginnlegg',
    type: 'document',
    fields: [
      {
        name: 'task',
        title: 'Oppgave',
        description: 'Beskrivelse av hva som ble gjort',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'person',
        title: 'Person',
        type: 'reference',
        to: [{ type: 'person' }],
        validation: Rule => Rule.required()
      },
      {
        name: 'hours',
        title: 'Timer',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'date',
        title: 'Dato',
        type: 'date',
        validation: Rule => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'task',
        subtitle: 'person.firstName',
        date: 'date'
      },
      prepare(selection) {
        const { title, subtitle, date } = selection;
        return {
          title: title,
          subtitle: `${subtitle ? subtitle : 'Ukjent person'} - ${date ? date : 'Ukjent dato'}`
        };
      }
    }
  }