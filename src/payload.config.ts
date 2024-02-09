import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { webpackBundler } from "@payloadcms/bundler-webpack"
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [],
    routes: {
        admin: '/sell'
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- online-mart",
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg'
        }
    },

    rateLimit: {
        max: 2000
    },

    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
        // url: 'mongodb+srv://online-mart:online-azx-mart@cluster0.qmjdtjb.mongodb.net/?retryWrites=true&w=majority',


    }),

    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    }
})