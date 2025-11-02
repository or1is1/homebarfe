import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const ingredientRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const ingredients = await ctx.db.ingredient.findMany({
      orderBy: { name: "asc" },
    });

    return ingredients;
  }),
});
