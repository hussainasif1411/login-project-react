import react from "react";
import {Redirect} from "react-router-dom";

function Profile({authorized}){
    if(!authorized){
        return(
            <Redirect to="/login" />
        );
    }
    return(
        <div>
            Login Successful!!
        </div>
    )
}

export default Profile;