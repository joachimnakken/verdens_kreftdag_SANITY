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
    // {
    //   name: "timeSchedule",
    //   title: "Time schedule",
    //   type: "array",
    //   of: [
    //     {
    //       name: "time",
    //       title: "Time",
    //       description: "12:00 - 12:15 ",
    //       type: "string",
    //     },
    //     {
    //       name: "event",
    //       title: "Event",
    //       description: "What is happening?",
    //       type: "string",
    //     },
    //   ],
    // },
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
              type: "string",
            },

            {
              title: "Tidspunkt",
              description: "format 09:45-10:00",
              name: "time",
              type: "string",
            },
          ],
          preview: {
            select: {
              day: "day",
              open: "open",
              hours: "hours",
            },
          },
        },
      ],
    },
  ],
};
