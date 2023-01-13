import {AppBar, Divider, Stack, Typography} from "@mui/material";

import Classes from "./Header.module.css";

import LogoImage from "../../Images/bearish-logo.png";
import CalendarImage from "../../Images/calendar.svg";
import NotificationImage from "../../Images/notification.svg";
import ToggleIcon from "../../Images/double_backward.svg";

const Header = ({isNarrow, changeDrawerMode}) => {
    return (<>
        <AppBar>
            <Stack className={Classes.container}>
                <Stack className={Classes.box}>
                    <Stack className={Classes.imageContainer} onClick={isNarrow ? changeDrawerMode : undefined}>
                        <img src={LogoImage} alt={''} width={'100%'} height={'100%'}/>
                    </Stack>
                    {isNarrow ? <></> : <><Typography className={Classes.buttonText}>
                        Bearish OS
                    </Typography>
                        <Stack className={Classes.toggleButton}>
                            <Stack className={Classes.imageContainer} onClick={changeDrawerMode}>
                                <img src={ToggleIcon} alt={''} width={'70%'} height={'70%'}/>
                            </Stack>
                        </Stack></>}
                </Stack>
                <Stack className={Classes.box}>
                    <Stack className={Classes.box}>
                        <Stack className={Classes.imageContainer}>
                            <img src={CalendarImage} alt={''} width={'100%'} height={'100%'}/>
                        </Stack>
                        <Typography className={Classes.buttonText}>
                            Calendars
                        </Typography>
                    </Stack>
                    <Divider orientation="vertical"/>
                    <Stack className={Classes.box}>
                        <Stack className={Classes.imageContainer}>
                            <img src={NotificationImage} alt={''} width={'100%'} height={'100%'}/>
                        </Stack>
                        <Typography className={Classes.buttonText}>
                            Notifications
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </AppBar>
    </>);
};

export default Header;