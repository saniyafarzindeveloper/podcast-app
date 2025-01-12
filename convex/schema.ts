import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    //defines tables

    user: v.id("users"),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    audioStorage: v.optional(v.id("_storage")),
    audioUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt : v.string(),
    imagePrompt: v.string(),
    voiceType : v.string(),
    audioDuration: v.string(),
    views: v.number(),
  })
  .searchIndex('search_author', {searchField: 'author'})
  .searchIndex('search_title', {searchField: 'podcastTitle'})
  .searchIndex('search_body', {searchField: 'podcastDescription'}),

  users: defineTable({
    //defines tables
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),
});
