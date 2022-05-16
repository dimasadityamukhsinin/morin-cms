export default {
  name: 'faqList',
  title: 'Faq List',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
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
