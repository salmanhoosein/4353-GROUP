const { validationResult } = require("express-validator/check");
const Profile = require("../database/profile");

exports.getProfile = (req, res, next) => {
  //find user profile based on email
  let email = req.body.email;
  Profile.findProfileByEmail(email)
    .then((profile) => {
      console.log(JSON.parse(JSON.stringify(user[0]))[0]);
      res.status(200).json({
        success: "Profile found",
        profile: JSON.parse(JSON.stringify(profile[0]))[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Profile not Found" });
    });
};

exports.postProfile = (req, res, next) => {
  let fullName = req.body.fullName;
  let addressOne = req.body.addressOne;
  let addressTwo = req.body.addressTwo;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;
  let email = req.body.email;

  //check if any validation errors, send back to frontend
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      error: errors.array()[0].msg,
    });
  }

  /** Find if profile Exists */
  Profile.findProfileByEmail(email)
    .then((profile) => {
      /** If exists - Update Profile in DB */
      if (profile[0].length > 0) {
        //@TODO: create Update command
      } else {
        /** Doesnt Exist - Create Profile in DB */
        return Profile.saveProfile(
          email,
          fullName,
          addressOne,
          addressTwo,
          city,
          state,
          zip
        );
      }
    })
    .then((result) => {
      res.status(201).json({ result: "Profile added/updated SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: "Error adding profile" });
    });
};
