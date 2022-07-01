import React from 'react';
import ProfileInfo from '../components/ProfileInfo'
import Back from '../components/Back'
import ProfileHeader from "../components/ProfileHeader";
import ProfileFollowings from "../components/ProfileFollowings";
import ProfileAction from "../components/ProfileAction";
import ProfileContent from "../components/ProfileContent";


function Profile () {
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