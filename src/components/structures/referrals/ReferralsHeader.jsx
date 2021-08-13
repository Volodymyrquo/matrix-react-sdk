import React from "react";

const ReferralsHeader = () => {
    const personName = localStorage.getItem("mx_profile_displayname");
    return (
        <div className="referrals-header">
            <div className="title-inner">
                <div className="title-contacts"></div>
            </div>
            <div className="inner-person">
                <h1 className="name-person">{personName}</h1>
            </div>
        </div>
    );
};

export default ReferralsHeader;
