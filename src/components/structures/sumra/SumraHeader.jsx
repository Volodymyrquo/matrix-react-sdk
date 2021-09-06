import React from "react";
import Avatars from "../../../../res/images/sumra/Avatars.png";
import settings from "../../../../res/images/sumra/Settings.png";
import dialNumbers from "../../../../res/images/sumra/Dial-numbers.png";
import bell from "../../../../res/images/sumra/bell.png";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";

const SumraHeader = () => {
    const personName = localStorage.getItem("mx_profile_displayname");
    const personUserId = localStorage.getItem("mx_user_id");
    const avatarSize = 32;
    const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);
    const handleOnChange = (event) => {
        const value = event.target.value;
        alert(value);
    };

    return (
        <div className="sumra-header">
            <span className="sumra-header-text">Chats</span>
            <input
                className="sumra-header-search"
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    handleOnChange(event);
                }}
            />

            <div className="sumra-header-info">
                <img
                    src={dialNumbers}
                    className="sumra-header-info-settings"
                    alt="dial numbers"
                />
                <img
                    src={bell}
                    className="sumra-header-info-settings"
                    alt="bell"
                />
                <img
                    src={settings}
                    className="sumra-header-info-settings"
                    alt="settings"
                />
                <img
                    src={avatarUrl}
                    className="sumra-header-info-avatar"
                    alt="avatar"
                />
                <div className="sumra-header-info-name">
                    <span>{personName}</span>
                    <span>{personUserId}</span>
                </div>
            </div>
        </div>
    );
};

export default SumraHeader;
