export default {
  name: "dish",
  title: "Dishes",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(250),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in INR",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",
    },
  ],
};
