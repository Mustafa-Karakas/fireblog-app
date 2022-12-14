import * as React from "react";
import { useCallback, useContext } from "react";
import BlogForm from "../components/BlogForm";
import { updateBlog, useBlog } from "../helpers/functions";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UpdateBlog() {
  const { id } = useParams();
  const { isLoading, blog } = useBlog(id);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (payload, { setSubmitting }) => {
      return updateBlog(payload, currentUser).finally(
        () => setSubmitting(false),
        navigate("/")
      );
    },
    [currentUser]
  );

  if (isLoading) return <CircularProgress />;

  return <BlogForm blog={blog} onSubmit={onSubmit} />;
}
