// schemas/navbar.js
import { defineField, defineType } from "sanity";

export const Navbar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    // Brand name or logo field
    defineField({
      name: "brand",
      title: "Brand Name",
      type: "string",
      description: "Name of the brand or logo text.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload the brand logo.",
      options: {
        hotspot: true,
      },
    }),
    // Menu items with nested dropdown and sub-dropdown support
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // Label for the main menu item
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "The text displayed for this menu item.",
              validation: (Rule) => Rule.required(),
            }),
            // Link for the main menu item
            defineField({
              name: "link",
              title: "Link",
              type: "url",
              description: "URL for this menu item.",
            }),
            // Dropdown items (nested under the menu item)
            defineField({
              name: "dropdownItems",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      description: "Text for the dropdown item.",
                    }),
                    defineField({
                      name: "link",
                      title: "Link",
                      type: "string",
                      description: "URL for the dropdown item.",
                    }),
                    // Sub-dropdown items (nested under the dropdown item)
                    defineField({
                      name: "subdropdownItems",
                      title: "SubDropdown Items",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [
                            defineField({
                              name: "label",
                              title: "Label",
                              type: "string",
                              description: "Text for the sub-dropdown item.",
                            }),
                            defineField({
                              name: "link",
                              title: "Link",
                              type: "url",
                              description: "URL for the sub-dropdown item.",
                            }),
                          ],
                        },
                      ],
                      description: "Add items for the sub-dropdown menu.",
                    }),
                  ],
                },
              ],
              description: "Add items for the dropdown menu.",
            }),
          ],
        },
      ],
      description: "Add navigation items and their dropdowns.",
    }),
    // Call-to-action button field
    defineField({
      name: "ctaButton",
      title: "Call-To-Action Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          description: "Text to display on the button.",
          validation: (Rule) => Rule.required().max(30),
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "url",
          description: "URL where the button will redirect.",
        }),
      ],
    }),
  ],
});
