


import { initTRPC } from '@trpc/server'


const t = initTRPC.context().create()
const middleware = t.middleware



export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure