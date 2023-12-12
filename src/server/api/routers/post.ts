import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const postRouter = createTRPCRouter({
  getAllBlogs: publicProcedure.query(() => {
    return db.blog.findMany();
  }),
  postBlog: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation((req) => {
      const postBlog = db.blog.create({
        data: {
          title: req.input.title,
          description: req.input.description,
        },
      });
      return postBlog;
    }),
});
