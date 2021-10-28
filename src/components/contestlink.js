import React, { Component } from "react";
// import withStyles from "@material-ui/styles/withStyles";
// import {Link} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

// Mui Stuff
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// const styles = {
//   card: {
//     display: "flex",
//     marginBottom:20,
//   },
//   image:{
//       width:50,
//       height:50,
//       borderRadius:'50%'
//   },
//   content:{
//       padding:25,
//       objectFit:'cover'
//   },
//   comment:{
//       marginTop:10
//   }
// };

class Contest extends Component {
  render() {
    dayjs.extend(relativeTime)
    const {
      classes,
      contest: { site, name, url, start_time },
    } = this.props;
    return (
          
        <div className="contestlink">
                <h2 className="sitename">{site}</h2>
                <h3 className="name">{name}</h3>
                <h4 className="url"><a href ={url}>{url}</a></h4>
                 <h4 className="start-time">{start_time}</h4>
              </div> 
    )
  }
}

export default Contest;






































// import React from 'react'

// const contestlink = () => {
//     return (
//         <div className="contestlink">
//         <h1 className="sitename">hackerrank</h1>
//         <h2 className="name">ContestName</h2>
//         <h3 className="url">url</h3>
//         <h3 className="start-time">Start-time</h3>
//        </div> 
//     )
// }

// export default contestlink


