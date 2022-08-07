// export default function Details(){
//     return <div>Details</div>
// }
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { grey } from "@mui/material/colors";
import { useBlogList } from "../helpers/functions";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  const { isLoading, blogList } = useBlogList();
  const navigate = useNavigate();

  if (isLoading) return <CircularProgress />;

  return (
    <Card
      sx={{
        width: 1000,
        height: 700,
        m: "auto",
        mt: 5,
      }}
    >
      <CardMedia component="img" height="400" image="" alt="" />

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
          title{" "}
        </Typography>
        <CardHeader subheader="September 14, 2016" />
        <Typography variant="body2" color="text.secondary">
          Content
        </Typography>
      </CardContent>
      <AccountCircleIcon sx={{ m: 2 }} />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => navigate(`/update-blog/`)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
