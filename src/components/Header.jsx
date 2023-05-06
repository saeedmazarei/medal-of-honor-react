import { useContext } from "react";

import hashContext from "./HashContext";

function Header({setModal, urlData}) {
    const hashId = useContext(hashContext);
    console.log(urlData);
    let luckyWheelUrl = 'https://quizofkings.com/vip_lucky_wheel3?player_id=' ;
    // hashId +
    // '&is_android=' +
    // urlData.isAndroid +
    // '&app_version=' +
    // urlData.appVersion +
    // '&application_type=' +
    // urlData.appType;
    return (
        <header>
            <img src='./assets/images/help button-min.png' id='help' onClick={() =>{setModal('on')}} />
            <a href={luckyWheelUrl}><img src='./assets/images/lucky-wheel-button-min.png' id='lucky-wheel' /></a>
            <img src='./assets/images/title-min.png' id='title' />
        </header>
    )
}

export default Header;