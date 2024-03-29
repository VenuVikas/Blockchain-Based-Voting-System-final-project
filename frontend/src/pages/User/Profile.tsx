import React, { useContext } from "react";
import { RouteProps } from "react-router";
import { AuthContext } from "../../contexts/Auth";
//import {signUpDetails} from "../../../../backend/src/controllers/auth/signup";

const Profile = (props: RouteProps) => {
  const authContext = useContext(AuthContext);

  console.log({ authContext });
  //console.log({signUpDetails});

  return (
    <div className="profile-wrapper">
      <div className="left-panel">
        <div className="person-icon">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="text-normal username">{authContext.name}</div>
        <button onClick={authContext.logout} className="button-primary">
          Logout
        </button>
      </div>

      <div className="right-panel">
        <span className="title-small">Profile</span>

        <div className="skeleton">{authContext.name}</div>
        <div className="skeleton">{authContext.id}</div>
        <div className="skeleton">authentication :{authContext.authenticated.toString()}</div>
      
      </div>
    </div>
  );
};

export default Profile;
