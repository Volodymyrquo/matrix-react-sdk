import React from "react";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";

const ReferralsHeader = () => {
    const personName = localStorage.getItem("mx_profile_displayname");
    const avatarSize = 32;
    const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);

    return (
        <div className="referrals-header">
            <div className="title-inner">
                <div className="title-contacts"></div>
            </div>
            <div className="inner-person">
                <img src={avatarUrl} alt="avatar" className="img-person" />
                <p className="name-person">{personName}</p>
            </div>
        </div>
    );
};

export default ReferralsHeader;
