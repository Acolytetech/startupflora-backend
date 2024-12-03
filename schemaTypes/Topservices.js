import { defineField, defineType } from "sanity";

export const Topservices = defineType({
    name: "topservice",
    title: "Top Service",
    type: "document",
    fields: [
        defineField({            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({            name: "icon",
            type: "image",
            title: "Icon",
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            description: "URL for this menu item.",
          }),
    ],
});