import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const postRouter = createTRPCRouter({
  getAllBlogs: publicProcedure.query(() => {
    return db.blog.findMany();
  }),
});
