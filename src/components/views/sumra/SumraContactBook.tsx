import React, { useContext } from 'react';
import ContactBook from 'react-contact-book';
import { useHistory } from 'react-router-dom';
import { Context } from "../../../contexts/Routes/context";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";


const logoSumraChat = "https://i.ibb.co/wy4rGz8/Logo-Horizontal.png";

const SumraContactBook = () => {
    const history = useHistory();
    const { setPageTitle } = useContext(Context);

    const setPath = (pathName) => {
        history.push(pathName);
        setPageTitle("Chats");
    };
    const avatarSize = 32;
    const photo = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);
    const personName = localStorage.getItem("mx_profile_displayname");
    const personUserId = localStorage.getItem("mx_user_id");

    const config = {
        routes: {
          setPath,
        },
        style: 'sumra-chat',
        logo: logoSumraChat,
        header: {
       
            avatar: photo,
            name: personName,
            personId: personUserId,
          
        },
    };
    return (
        <ContactBook config={config} />

    );
};

export default SumraContactBook;

