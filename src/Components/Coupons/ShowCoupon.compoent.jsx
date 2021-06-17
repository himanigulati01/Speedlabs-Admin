import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { Box } from "@material-ui/core";
import { OfflineBoltOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    margin: "30px",
    borderLeft: "6px solid rgb(10, 10, 107)",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ShowCategory(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List>
        <ListItem>
          <ListItemAvatar>
            {
              <Avatar aria-label="recipe" className={classes.avatar}>
                {props.initial}
              </Avatar>
            }
          </ListItemAvatar>
          <ListItemText
            primary={props.coupon_code}
            secondary={props.description}
          />
          <OfflineBoltOutlined />
          {props.discount}%{/* //<ListItemText></ListItemText> */}
          {/* {props.discount}
          {props.terms_and_conditions} */}
        </ListItem>
      </List>
    </Box>
  );
}
