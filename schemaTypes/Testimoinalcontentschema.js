import { defineField, defineType } from "sanity";

export const Testimoinalcontentschema = defineType({
  name: "testimonialcontent",
  title: "Testimonial Content",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Why StartupFlora?",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline",
      },
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      description: "Subheading text for the hero section.",
      validation: (Rule) => Rule.required().min(5).max(80),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Add description points as a list.",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1).max(20),
    }),
  ],
});
