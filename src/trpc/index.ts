import { authRouter } from "./auth-router";
import { paymentRouter } from "./payment-router";
import { publicProcedure, router } from "./trpc";


export const appRouter = router({
    auth: authRouter,
    payment: paymentRouter,


    anyApiRoute: publicProcedure.query(() => {
        return "hellow"
    })
})

export type AppRouter = typeof appRouter