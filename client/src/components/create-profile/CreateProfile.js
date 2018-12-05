import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { stat } from "fs";
import TextFieldGroup from "../common/TextFieldGroup";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }

  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 class="display-4 text-center">Create Your Profile</h1>
              <p class="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small class="d-block pb-3">* = required field</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.PropTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(null)(CreateProfile);
