/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link, makeStyles, Grid, Button } from "@material-ui/core";

import { logOut } from "../../redux/actions/AuthAction/AuthActions";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  buttonStyle: {
    fontSize: 18,
  },
}));

function NavBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid
      container
      style={{
        backgroundColor: "#222",
        height: "10vh",
      }}
      justify="space-between"
    >
      <Grid
        item
        style={{
          marginTop: 10,
        }}
      >
        <Link
          component={RouterLink}
          to="/app/home"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Home
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/app/about"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            About Us
          </Button>
        </Link>
        <Link
          component={RouterLink}
          to="/app/fuelquote"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Get Quote
          </Button>
        </Link>

        <Link
          component={RouterLink}
          to="/app/history"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Quote History
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        style={{
          marginTop: 10,
        }}
      >
        <Link
          component={RouterLink}
          to="/app/profiles"
          variant="body2"
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
          >
            Profile
          </Button>
        </Link>
        <Link
          variant="body2"
          to="/login"
          component={RouterLink}
          color="textSecondary"
        >
          <Button
            style={{
              color: "white",
            }}
            className={classes.buttonStyle}
            size="large"
            onClick={() => {
              dispatch(logOut());
              localStorage.removeItem("userEmail");
              localStorage.removeItem("userId");
              localStorage.removeItem("authtoken");
            }}
          >
            Log-Out
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default NavBar;
