import React from "react";
import styled from "styled-components";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Images({ image }) {
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardMedia className={classes.media} image={image} />
      </Card>
    </>
  );
}
