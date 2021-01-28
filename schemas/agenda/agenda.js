export default {
  name: "agenda",
  title: "Agenda",
  type: "document",
  fields: [
    {
      name: "preamble",
      title: "Intro title",
      type: "string",
    },
    {
      name: "title",
      title: "Main title",
      type: "string",
    },

    {
      title: "Schedule",
      name: "schedule",
      type: "array",
      of: [
        {
          title: "Time",
          name: "time",
          type: "object",
          fields: [
            {
              preview: "title",
              title: "Hva skjer?",
              name: "title",
              type: "blockContent",
            },

            {
              title: "Tidspunkt",
              name: "time",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "time",
            },
          },
        },
      ],
    },
  ],
};
