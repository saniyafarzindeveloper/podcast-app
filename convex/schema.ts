import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts: defineTable({
        //defines tables
        audioiStorage: v.optional(v.id('_storage')),
        user: v.id('users'),
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl :v.optional(v.string()),
    }),
    users: defineTable({
        //defines tables
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
        
    })
})