import React, { Component} from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Scream from './../components/Scream';
import Contest from "./../components/contestlink";

export class home extends Component {
  state = {
    screams: null,
    contestinfo: null,
  };
  
  componentDidMount() {
   
    axios.get("/screams")
    
    .then((res) => {
      this.setState({
        
        screams: res.data,
      })
    })
    .catch(err =>{
        console.log(err)
    })

    axios.get("https://kontests.net/api/v1/all")

    .then((res) => {
      this.setState({
        
        contestinfo: res.data,
      })
    })
    .catch(err =>{
        console.log(err)
    })
  }
  render() {

    
      let recentScreamsMarkup = this.state.screams ? (
          this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
          ): <p>Loading...</p>
          let Allcontestlist = this.state.contestinfo ? (
            this.state.contestinfo.map(contest => <Contest key={contest.contestId}  contest={contest} />)
            ): <p>Loading...</p>
            
            
     return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
             {Allcontestlist}

        </Grid>
      </Grid>
    );
  }
}

export default home;
