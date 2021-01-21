export default {
  name: "videoBlocks",
  title: "Video Blocks",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Type",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "infoText",
      title: "Short info text",
      type: "text",
    },

    {
      name: "videoBlock",
      title: "Video card",
      type: "array",
      of: [{ type: "videoCard" }],
    },
  ],
};
