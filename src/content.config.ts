import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Homepage Collection Schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string().optional(),
      image: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        })
        .optional(),
    }),
    key_features: z.object({
      title: z.string(),
      description: z.string(),
      feature_list: z
        .array(
          z.object({
            icon: z.string(),
            title: z.string(),
            content: z.string(),
          }),
        )
        .optional(),
    }),

    gallery: z
      .object({
        title: z.string().optional(),
        intro: z.string().optional(),
        items: z.array(
          z.object({
            image: z.string(),
            alt: z.string(),
            caption: z.string(),
          }),
        ),
      })
      .optional(),

    service: z.object({
      photos: z.array(
        z.object({
          image: z.string(),
          alt: z.string().optional(),
        }),
      ),
    }),
    testimonial: z
      .object({
        title: z.string(),
        description: z.string(),
        testimonial_list: z
          .array(
            z.object({
              author: z.string(),
              avatar: z.string(),
              organization: z.string(),
              rating: z.enum(["one", "two", "three", "four", "five"]),
              content: z.string(),
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

// About Collection Schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    buttons: z.array(
      z.object({
        label: z.string(),
        link: z.string(),
        outline: z.boolean().optional(),
        enable: z.boolean().default(true),
      }),
    ),

    profile_highlights: z
      .array(
        z.object({
          title: z.string(),
          content: z.string(),
        }),
      )
      .optional(),

    engagement_cycle: z
      .object({
        title: z.string(),
        items: z.array(z.string()),
      })
      .optional(),

    // Counter
    counter: z.array(
      z.object({
        name: z.string(),
        number: z.union([z.number(), z.string()]),
        measurement: z.string(),
        color: z.string(),
      }),
    ).optional(),

    // Gallery
    gallery: z
      .object({
        title: z.string(),
        images: z.array(z.string()),
      })
      .optional(),

    // World map of work locations
    worldmap: z
      .object({
        title: z.string(),
        locations: z.array(
          z.object({
            name: z.string(),
            summary: z.string().optional(),
            lat: z.number(),
            lng: z.number(),
            align: z.enum(["left", "right"]).optional(),
          }),
        ),
      })
      .optional(),

    // Our Work
    features: z.object({
      title: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean().default(true),
      }),
      features_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
        }),
      ),
    }).optional(),

    // Experiences
    experiences: z
      .object({
        title: z.string(),
        experience_list: z.array(
          z.object({
            title: z.string(),
            content: z.string(),
            image: z.string().optional(),
            images: z.array(z.string()).optional(),
            images_below: z.boolean().optional(),
          }),
        ),
      })
      .optional(),

    // Team Members
    members: z.object({
      title: z.string(),
      description: z.string(),
      member_list: z.array(
        z.object({
          name: z.string(),
          field: z.string(),
          image: z.string(),
        }),
      ),
    }),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string(),
    image: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  about: aboutCollection,
  contact: contactCollection,
};
