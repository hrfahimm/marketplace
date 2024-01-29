import { publicProcedure, router } from "./trpc";


export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return "hellow"
    })
})

export type AppRouter = typeof appRouter