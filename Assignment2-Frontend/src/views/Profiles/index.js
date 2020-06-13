// @ts-nocheck
/* eslint-disable max-len */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import InfoForm from "./ProfileForm";
import FQFORM from "./FuelQuoteForm";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProfilesBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = React.useState({});
  const [fuelQuoteData, setFuelQuoteData] = React.useState({});

  return (
    <Grid
      style={{
        paddingLeft: "20",
      }}
      container
      justify="space-between"
    >
      {/* ProfileForm */}
      <Grid item xs style={{ paddingRight: 15}}>
        <InfoForm
          formTitle={"Profile Details"}
          saveProfile={(profileDetails) => {
            console.log("profile:", profileDetails);
            setProfileData(profileDetails);
          }}
        />
      </Grid>

      {/* FUEL QUOTE FORM */}
      <Grid item xs>
        <FQFORM />
      </Grid>
    </Grid>
  );
}

export default ProfilesBody;
