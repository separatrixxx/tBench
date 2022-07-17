import React from 'react';
import ProfileInfo from '../components/ProfileInfo'
import Back from '../components/Back'
import ProfileHeader from "../components/ProfileHeader";
import ProfileFollowings from "../components/ProfileFollowings";
import ProfileAction from "../components/ProfileAction";
import ProfileContent from "../components/ProfileContent";


function Profile () {

    let username1 = window.location.pathname
    let username2 = username1.substr(username1.indexOf("/") + 1);
    document.title = username2.substr(username2.indexOf("/") + 1);

    return (
        <div className="scroll-smooth bg-white">
            <ProfileHeader />
            <Back />
            <ProfileInfo />
            <ProfileFollowings />
            <ProfileAction />
            <ProfileContent />
        </div>
    );
}

export default Profile;