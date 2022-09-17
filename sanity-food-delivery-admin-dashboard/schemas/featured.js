export default {
  name: "featured",
  title: "Featured Menu categories",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured category menu",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(250),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
