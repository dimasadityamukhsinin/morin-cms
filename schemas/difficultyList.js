export default {
    name: 'difficultyList',
    title: 'Difficulty List',
    type: 'document',
    fields: [
      {
        title: 'Title - EN',
        name: 'title_en',
        type: 'string',
      },
      {
        title: 'Title - ID',
        name: 'title_id',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'title_en',
      },
    },
  }
  