import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

const Profile = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            <h1>{currentUser.name}</h1>
            <h2>{currentUser.email}</h2>
            <h2>BLOG PAGE</h2>
        </div>
    );
};

export default Profile;
