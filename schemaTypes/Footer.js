
import { defineType, defineField } from "sanity";

export const Footer = defineType({
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      // Company Information
      defineField({
        name: 'companyName',
        type: 'string',
        title: 'Company Name',
      }),
      defineField({
        name: 'tagline',
        type: 'string',
        title: 'Tagline',
      }),
      defineField({
        name: 'logo',
        type: 'image',
        title: 'Logo',
        options: {
          hotspot: true,
        },
      }),
      // Navigation Links
      defineField({
        name: 'quickLinks',
        type: 'array',
        title: 'Quick Links',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Link Title',
              },
              {
                name: 'url',
                type: 'url',
                title: 'Link URL',
              },
            ],
          },
        ],
      }),
      // Social Media Links
      {
        name: 'socialMedia',
        type: 'array',
        title: 'Social Media Links',
        of: [
          {
            type: 'object',
            fields: [
                defineField({

                name: 'platform',
                type: 'string',
                title: 'Platform Name',
              }),
              defineField({
                name: 'icon',
                type: 'string',
                title: 'Icon Class (React Icons)',
                description: 'Add the class name for the icon (e.g., "TiSocialFacebookCircular")',
              }),
              defineField({
                name: 'url',
                type: 'url',
                title: 'Profile URL',
              }),
            ],
          },
        ],
      },
      // Contact Information
      {
        name: 'contact',
        type: 'object',
        title: 'Contact Information',
        fields: [
            defineField({
                name: 'email',
            type: 'string',
            title: 'Email Address',
          }),
          defineField({
            name: 'phone',
            type: 'string',
            title: 'Phone Number',
          }),
          defineField({
            name: 'address',
            type: 'text',
            title: 'Physical Address',
          }),
        ],
      },
    ],
  });
