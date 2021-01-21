export default {
  name: "speaker",
  title: "Speaker",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: false,
      },
    },
    {
      name: "about",
      title: "About",
      type: "blockContent",
    },
  ],
};
