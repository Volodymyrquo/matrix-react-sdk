import React, {useContext} from "react";
import PioneerMemberships from 'pioneer-membership';
import { Context } from "../../../../contexts/Routes/context";

const PioneerMembership = () => {
    const {setSubPage} = useContext(Context)

    return (
        <div className="referrals-page" >
            <PioneerMemberships setSubPage={setSubPage} />
        </div>
    );
};

export default PioneerMembership;
