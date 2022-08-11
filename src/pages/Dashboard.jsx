import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { useBlogList } from "../helpers/functions";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  const { isLoading, blogList } = useBlogList();
  const navigate = useNavigate();

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <h1 className="dashboard-header">───── Dashboard ─────</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {blogList.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: 340,
              height: 365,
              ml: 2,
              mt: 5,
            }}
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <CardMedia
              component="img"
              height="150"
              image={item.imageUrl}
              alt={item.title}
              sx={{ cursor: "pointer" }}
            />

            <CardContent
              sx={{
                backgroundColor: grey[200],
                height: "100vh",
                p: 1,
                cursor: "pointer",
                overflow: "hidden",
                whiteSpace: "no-wrap",
                textOverflow: "ellipsis",
              }}
              onClick={() => navigate("/details/:id")}
            >
              <Typography
                variant="h6"
                component="div"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Girassol",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
              {/* <CardHeader subheader="September 14, 2016" sx={{ p: 0, pt: 1 }} /> */}
              <Typography variant="body2" color="text.black">
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
