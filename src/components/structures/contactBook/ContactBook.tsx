import React, { FC, useContext } from "react";

import "./ContactBook.css";
import SidebarContactBook from "./SidebarContactBook";
import { Context } from "../../../contexts/Routes/context";
import { ContactBookProvider } from "../../../contexts/ContactBook/contextContactBook";
import ContactBookPage from "react-contact-book";
import { OwnProfileStore } from "../../../stores/OwnProfileStore";
import { useHistory } from "react-router-dom";

const ContactBook: FC = (props) => {
    const { page } = useContext(Context);
    const history = useHistory();

    const personName = localStorage.getItem("mx_profile_displayname");
    const avatarSize = 32;
    const avatarUrl = OwnProfileStore.instance.getHttpAvatarUrl(avatarSize);
    const referralsUrl = "/#/referrals";
    const path = '/contact_book';
    const setPath = (pathName) => {
        location.href = location.origin + pathName;
    };

    return (

        <div className="sumra-contact-book-main" >
            <ContactBookProvider>
              <SidebarContactBook />
                <div className="contact-book__main-block" >
                    {page}
                </div> 
{/*                 <ContactBookPage personName={personName} avatarUrl={avatarUrl} referralsUrl={referralsUrl} setPath={setPath} path={path} />
 */}            </ContactBookProvider>
            {/* <ContactBookPage personName={personName} avatarUrl={avatarUrl} referralsUrl={referralsUrl} setPath={setPath} /> */}
        </div>

    );
};

export default ContactBook;

