import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "55px",
    //padding: "10px",
    marginTop: "10px",
    background: "#f2f2f2",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductView(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={props.product_name} className={classes.avatar}>
            {props.creator_initials}
          </Avatar>
        }
        title={props.product_name}
        subheader={props.creator_name}
      />
      <CardMedia
        className={classes.media}
        image={props.image_url}
        title={props.image_name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteRoundedIcon />
          {props.tot_students}
        </IconButton>
      </CardActions>

      <CardContent>
        <Typography paragraph>Category: {props.category}</Typography>
        <Typography paragraph>{props.you_will_learn}</Typography>
        <Typography paragraph>{props.pre_requisities}</Typography>
        <Typography paragraph>$ {props.price}</Typography>
      </CardContent>
    </Card>
  );
}
