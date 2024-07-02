'use server'

import { db } from "@/server";
import { posts } from "../schema";

export default async function createPost(formData: FormData) {
    const title: string | any = formData.get("title");

    if (!title) {
        return {
            error: "Title is not valid"
        }
    }

    const data = await db.insert(posts).values({
        title
    })

    if (!data) {
        return {
            error: "can't create post"
        }
    } else {
        return {
            success: data
        }
    }
}