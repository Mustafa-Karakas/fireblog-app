import * as React from "react";
import CircularProgress from '@mui/material/CircularProgress';
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
import {grey} from "@mui/material/colors";
import {useBlogList} from "../helpers/functions";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";

export default function RecipeReviewCard() {
    const {isLoading, blogList} = useBlogList();
    const navigate = useNavigate();

    if (isLoading) return <CircularProgress/>

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {blogList.map((item) => (
                <Card key={item.id} sx={{maxWidth: 350, height: 375, ml: 13, mr: 13, mt: 9}}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.imageUrl}
                        alt={item.title}
                    />

                    <CardContent sx={{backgroundColor: grey[200], height: 95, p: 1}}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{textTransform: "uppercase"}}
                        >
                            {item.title}
                        </Typography>
                        <CardHeader subheader="September 14, 2016"/>
                        <Typography variant="body2" color="text.secondary">
                            {item.content}
                        </Typography>
                    </CardContent>
                    <AccountCircleIcon sx={{ml: 1}}/>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" onClick={() => navigate(`/update-blog/${item.id}`)}>
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    );
}
