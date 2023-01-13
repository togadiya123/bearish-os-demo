import {Stack, Typography} from "@mui/material";

import Classes from "./BaseDrawer.module.css";

import ForwardIcon from "../../Images/forward.svg";

const ListItem = ({img, name, action}) => {
    return (<>
        <Stack className={Classes.listItem}>
            <Stack className={Classes.listItemTextAndIcon}>
                <Stack className={Classes.imageContainer}>
                    <img src={img} alt={''} width={'80%'} height={'80%'}/>
                </Stack>
                <Typography className={Classes.text}>
                    {name}
                </Typography>
            </Stack>
            {action ? <Stack className={Classes.listItemAction}>
                <Stack className={Classes.imageContainer}>
                    <img src={ForwardIcon} alt={''} width={'70%'} height={'70%'}/>
                </Stack>
            </Stack> : <></>}
        </Stack>
    </>);
};

export default ListItem;