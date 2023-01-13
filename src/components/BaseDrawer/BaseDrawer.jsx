import {Button, Divider, Drawer, Stack, Typography} from "@mui/material";

import Classes from "./BaseDrawer.module.css";
import SettingsIcon from "../../Images/settings.svg";

import {FIRST_LIST, SECOND_LIST, THIRD_LIST} from "./BaseDrawer.utiles";
import ListItem from "./ListItem";

const BaseDrawer = ({isNarrow}) => {

    return (<>
        <Drawer open={true} variant={'persistent'} sx={{
            '& .MuiDrawer-paper': {
                width: isNarrow ? 55 : 300,
            }
        }}>
            <Stack className={Classes.menuContainer}>
                <Stack className={Classes.listContainer}>
                    {
                        FIRST_LIST().map(({id, action, name, icon}) => (
                            <ListItem key={id} action={action} name={name} img={icon}/>))
                    }
                </Stack>
                <Divider/>
                <Stack className={Classes.listContainer}>
                    {
                        SECOND_LIST().map(({id, action, name, icon}) => (
                            <ListItem key={id} action={action} name={name} img={icon}/>))
                    }
                </Stack>
                <Divider/>
                <Stack className={Classes.listContainer}>
                    {
                        THIRD_LIST().map(({id, action, name, icon}) => (
                            <ListItem key={id} action={action} name={name} img={icon}/>))
                    }
                </Stack>
            </Stack>
            <Divider/>
            <Stack className={Classes.userDetailsContainer}>
                <Stack>
                    <Stack className={Classes.userSortNameBox}>
                        <Typography className={Classes.text}>TU</Typography>
                    </Stack>
                </Stack>
                <Stack className={Classes.userProfileSettingsContainer}>
                    <Button>
                        Upgrade
                    </Button>
                    <Stack className={Classes.imageContainer}>
                        <img src={SettingsIcon} alt={''} width={`100%`} height={`100%`}/>
                    </Stack>
                </Stack>
            </Stack>
        </Drawer>
    </>);
};

export default BaseDrawer;