import react from "react";
import {useHistory} from "react-router-dom";

function Login(){

    let history = useHistory();

    return(
        <div>
            <input type="text" placeholder="Enter your name" /><br></br>
            <input type="text" placeholder="Enter your password" />
            <button onClick={() => {
                history.push("/profile");
            }}>Login</button>
        </div>
    );
}

export default Login;