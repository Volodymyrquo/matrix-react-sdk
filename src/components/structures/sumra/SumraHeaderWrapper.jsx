import React from "react";
import SumraHeader from "./SumraHeader.jsx";

const SumraHeaderWrapper = () => {
    const findMessage = (event) => {
        let a;
        let i;
        let txtValue;

        const input = event.target.value;
        // Declare variables
        const filter = input.toUpperCase();
        const ul = document.getElementsByClassName("mx_RoomView_MessageList");
        const li = ul[0].getElementsByClassName("mx_EventTile");

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByClassName("mx_EventTile_body");
            if (a.length > 0) {
                txtValue = a[0].textContent || a[0].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    };
    return <SumraHeader handleOnChange={findMessage} />;
};

export default SumraHeaderWrapper;
