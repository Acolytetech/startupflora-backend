import { defineField, defineType } from "sanity";

export const Testimonials = defineType ({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
        name: "name",
        title: "Name",
        type: "string",
        description: "Name of the person giving the testimonial",
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
        },
      }),
      defineField({
        name: "image",
        title: "Image",
        type: "image",
        description: "Author's image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "role",
        title: "Role",
        type: "string",
        description: "Role or position of the author",
      }),
      defineField({
        name: "text",
        title: "Quote",
        type: "string",
        description: "Short testimonial quote",
      }),
      defineField({
        name: "details",
        title: "Details",
        type: "text",
        description: "Detailed description of the testimonial",
      }),
   
    ],
  });
  