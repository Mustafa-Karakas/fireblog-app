import * as React from "react";
import { useCallback, useContext } from "react";
import BlogForm from "../components/BlogForm";
import { addBlog } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NewBlog() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (payload, { setSubmitting }) => {
      return (
        addBlog(payload, currentUser).finally(() => setSubmitting(false)),
        navigate("/")
      );
    },
    [currentUser]
  );

  return <BlogForm onSubmit={onSubmit} />;
}
