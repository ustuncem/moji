import {z, defineCollection} from 'astro:content';

const menuCollection = defineCollection({
  type: 'content',
  schema: z.object({
    heading: z.string(),
    items: z.array(z.object({id: z.number(), title: z.string(), price: z.string()})),
  }),
});

export const collections = {
  menu: menuCollection,
};
