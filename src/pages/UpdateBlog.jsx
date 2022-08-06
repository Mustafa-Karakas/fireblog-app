import * as React from "react";
import {useCallback} from "react";
import BlogForm from "../components/BlogForm";
import {updateBlog, useBlog} from "../helpers/functions";
import {useParams} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";


export default function UpdateBlog() {
    const {id} = useParams();
    const {isLoading, blog} = useBlog(id);
    const onSubmit = useCallback((payload, {setSubmitting}) => {
        return updateBlog(payload).finally(() => setSubmitting(false));
    }, []);

    if (isLoading) return <CircularProgress/>;

    return (
        <BlogForm blog={blog} onSubmit={onSubmit}/>
    );
}
