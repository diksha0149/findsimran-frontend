import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
// MUI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";


const styles = (theme) =>({
  ...theme.spreadIt
})
class signup extends Component {
  constructor() {
    super();
    this.state = {
      handle:"",
      email: "",
      password: "",
      confirmPassword:"",
      loading: false,
      errors: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      handle:this.state.handle,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    axios
      .post("/user/signup", newUserData)
      .then((res) => {
        localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`)
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img
            className={classes.image}
            src="https://www.codepartner.me/assets/images/logo.png"
            alt="logoImage"
          />
          <Typography variant="h2" className={classes.pageTitle}>
            SignUp
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="handle"
              name="handle"
              type="text"
              label="Username"
              helperText={errors.handle}
              error={errors.handle ? true : false}
              className={classes.textField}
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              helperText={errors.email}
              error={errors.email ? true : false}
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              helperText={errors.password}
              error={errors.password ? true : false}
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
             {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Signup
              {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                  )}
            </Button>
            <p>
              Already have an account? <Link to="/login">login here</Link>
            </p>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.prototypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signup);
