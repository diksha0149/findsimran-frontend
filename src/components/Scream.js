import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

// Mui Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    marginBottom:20,
  },
  image:{
      width:50,
      height:50,
      borderRadius:'50%'
  },
  content:{
      padding:25,
      objectFit:'cover'
  },
  comment:{
      marginTop:10
  }
};

class Scream extends Component {
  render() {
    dayjs.extend(relativeTime)
    const {
      classes,
      scream: { body, title, url, handle,userImage, createdAt, requiredSkills },
    } = this.props;
    return (
        <Card className={classes.card}>
            <CardContent>
                <CardMedia image={userImage} className={classes.image} component={Link} to={`/user/${handle}`} />
                <Typography variant="body1" color="primary" component={Link} to={`/user/${handle}`}>{handle}</Typography>
                <Typography>rating</Typography>
            </CardContent>
            <CardContent className={classes.content}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                <Typography variant="body2"><a href={url} target='_blank' rel="noreferrer">{url}</a></Typography>
                <Typography variant="body1" className={classes.comment}>{body}</Typography>
            </CardContent>
        </Card>
    )
  }
}

export default withStyles(styles)(Scream);
