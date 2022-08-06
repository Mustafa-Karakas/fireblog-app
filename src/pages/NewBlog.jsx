import * as React from "react";
import {useCallback, useContext} from "react";
import BlogForm from "../components/BlogForm";
import {addBlog} from "../helpers/functions";
import {AuthContext} from "../contexts/AuthContext";


export default function NewBlog() {
    const {currentUser} = useContext(AuthContext);

    const onSubmit = useCallback((payload, {setSubmitting}) => {
        return addBlog(payload, currentUser).finally(() => setSubmitting(false));
    }, [currentUser]);

    return (
        <BlogForm onSubmit={onSubmit}/>
    );
}
