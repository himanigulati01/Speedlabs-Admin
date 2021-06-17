import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box } from "@material-ui/core";

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

  const deleteCategoryHandler = (e) => {
    console.log(e);
  };

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
          <ListItemText primary={props.name} secondary={props.modified_at} />
          <Button
            variant="contained"
            color="default"
            onClick={(e) => deleteCategoryHandler(e)}
            className={classes.button}
            endIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ListItem>
      </List>
    </Box>
  );
}
