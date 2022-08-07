import { database } from './firebase';
import { onValue, push, ref, remove, set, update } from "firebase/database";
import { useState, useEffect } from "react"
import { toastSuccessNotify } from "./toastNotify"

export const addBlog = async (info, user) => {
    const blogRef = ref(database, "blogs/")
    const newUserRef = push(blogRef);
    await set(newUserRef, { ...info, user });
    toastSuccessNotify("Blog added successfully!");
}

export const useBlogList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const blogRef = ref(database, "blogs/")
        onValue(blogRef, (snapshot) => {
            const data = snapshot.val();
            const userArray = []

            for (let id in data) {
                userArray.push({ id, ...data[id] })
            }
            setBlogList(userArray)
            setIsLoading(false)
        })
    }, [])
    return { isLoading, blogList }
}

export const useBlog = (id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [blog, setBlog] = useState();

    useEffect(() => {
        const blogRef = ref(database, `blogs/${id}`)
        onValue(blogRef, (snapshot) => {
            const data = snapshot.val();
            setBlog({ id, ...data });
            setIsLoading(false);
        })
    }, [id]);

    return { isLoading, blog }
}

export const deleteBlog = async (id) => {
    await remove(ref(database, "blogs/" + id));
    toastSuccessNotify("Blog deleted successfully!")
}

export const updateBlog = async (info, user) => {
    console.log(user)
    const updates = {}
    updates["blogs/" + info.id] = { ...info, user }

    await update(ref(database), updates);
    toastSuccessNotify("Blog updated successfully!");
}