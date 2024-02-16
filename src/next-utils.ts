import next from "next"
import path from 'path'

import dotenv from 'dotenv'
dotenv.config({
    path: path.resolve(__dirname, '../.env.local'),
})
const PORT = Number(process.env.PORT) || 3000

export const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    port: PORT
})

export const nextHandler = nextApp.getRequestHandler()