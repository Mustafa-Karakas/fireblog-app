import * as React from "react";
import { useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { grey, red, brown } from "@mui/material/colors";
import { useBlog } from "../helpers/functions";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function RecipeReviewCard() {
  const { id } = useParams();
  const { isLoading, blog } = useBlog(id);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoading) return <CircularProgress />;

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          width: 1000,
          height: 700,
          m: "auto",
          mt: 5,
        }}
      >
        <CardMedia component="img" height="400" image={blog?.imageUrl} alt="" />

        <CardContent
          sx={{
            backgroundColor: grey[200],
            height: 170,
            p: 1,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {blog?.title}
          </Typography>
          {/* <CardHeader subheader="September 14, 2016" /> */}
          <Typography variant="body2" color="text.secondary">
            {blog?.content}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          <Typography>{blog?.user?.email}</Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {blog?.user?.id === currentUser?.id && (
            <>
              <Button
                aria-label="add to favorites"
                onClick={() => navigate(`/update-blog/${blog?.id}`)}
                sx={{ fontWeight: "700" }}
              >
                Update
              </Button>
              <Button
                aria-label="share"
                sx={{ color: red[500], fontWeight: "700" }}
              >
                Delete
              </Button>
            </>
          )}
          <Button
            aria-label="share"
            sx={{ color: brown[500], fontWeight: "700" }}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
