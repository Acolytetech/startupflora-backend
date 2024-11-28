
import { defineType, defineField } from "sanity";

export const Ourpartners = defineType({
  name: "ourpartner",
  title: "Our Partner",
  type: "document",
  fields: [
    defineField({
      name: "partnerimage",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main headline text for the hero section.",
      validation: (Rule) => Rule.required().min(5).max(80),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    //   title: 'Slug',
      
    options: {source: 'headline'},
      validation: (rule) => rule.required(),


    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

 ]
  
});
