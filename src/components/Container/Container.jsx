import {Stack, Typography} from "@mui/material";

import Classes from "./Container.module.css";

const Container = () => {
    return (<>
        <Stack className={Classes.container}>
            <Typography >
                Welcome to Bearish OS
            </Typography>
        </Stack>
    </>);
};

export default Container;