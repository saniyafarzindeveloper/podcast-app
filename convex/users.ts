import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createUser = internalMutation({
    args:{
        clerkId: v.string(),
        email: v.string(),
    }, handler: async(ctx, args) => {
        
    }
});