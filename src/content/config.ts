// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const featureCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    text: z.string(),
    image: z.string(),
  }),
});



const testimonialCollection = defineCollection({
  type: 'data', 
  schema: z.object({
    text: z.string(),
     name:z.string(),
     work: z.string(),
    image: z.string(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'feature': featureCollection,
  'testimonial': testimonialCollection,
};