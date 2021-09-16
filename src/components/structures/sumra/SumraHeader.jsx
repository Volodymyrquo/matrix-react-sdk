import React, { useContext, useEffect } from "react";
import Avatars from "../../../../res/images/sumra/Avatars.png";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";
import { Context } from "../../../contexts/Routes/context";

const SumraHeader = ({ handleOnChange }) => {
    const personName = localStorage.getItem("mx_profile_displayname");
    const personUserId = localStorage.getItem("mx_user_id");
    const avatarSize = 32;
    const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);

    const { pageTitle } = useContext(Context);
    const bell = "https://i.ibb.co/kMXWP46/bell.png";
    const settings = "https://i.ibb.co/NjYqgS5/Settings-1.png";
    const dialNumbers = "https://i.ibb.co/f9mvg2Y/Dial-numbers.png";
    const search = "https://i.ibb.co/XZGhQFY/Search-grey.png";

    return (
        <div className="sumra-header">
            <span className="sumra-header-text">{pageTitle}</span>
            <div className="sumra-header-search">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        handleOnChange(event);
                    }}
                />
                <img src={search} alt="search image" />
            </div>

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
