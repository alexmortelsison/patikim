export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Recipe Name',
      type: 'string',
    },
    {
      name: 'desciption',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'instructions',
      title: 'Instructions',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Recipe Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
