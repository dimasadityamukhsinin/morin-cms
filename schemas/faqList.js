export default {
  name: 'faqList',
  title: 'Faq List',
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
    {
      title: 'Description - EN',
      name: 'description_en',
      type: 'text',
    },
    {
      title: 'Description - ID',
      name: 'description_id',
      type: 'text',
    },
    {
      title: 'Background Dark Blue',
      name: 'option',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
