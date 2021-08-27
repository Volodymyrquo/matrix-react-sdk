import React from "react";
import Avatars from "../../../../res/images/sumra/Avatars.png";
import settings from "../../../../res/images/sumra/Settings.png";
import dialNumbers from "../../../../res/images/sumra/Dial-numbers.png";
import bell from "../../../../res/images/sumra/bell.png";

const SumraHeader = () => {
    return (
        <div className="sumra-header">
            <span className="sumra-header-text">Chats</span>
            <input
                className="sumra-header-search"
                type="text"
                placeholder="Search..."
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
                    src={Avatars}
                    className="sumra-header-info-avatar"
                    alt="avatar"
                />
            </div>
        </div>
    );
};

export default SumraHeader;
