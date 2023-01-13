import {useState} from "react";
import {Stack} from "@mui/material";

import Header from "../Header";
import Drawer from "../BaseDrawer";
import Container from "../Container";

import Classes from "./Main.module.css";

const INITIAL_STATE = {
    drawer: {
        isOpen: true,
        isNarrow: false,
    }
};

const Main = () => {

    /** State */
    const [state, setState] = useState(INITIAL_STATE);

    /** Methods */
    const changeDrawerMode = () => setState(prevState => ({
        ...prevState,
        drawer: {...prevState.drawer, isNarrow: !prevState.drawer.isNarrow}
    }));

    return (<>
        <Stack className={Classes.container}>
            <Header isNarrow={state.drawer.isNarrow} changeDrawerMode={changeDrawerMode}/>
            <Stack className={Classes.main}>
                <Drawer isNarrow={state.drawer.isNarrow}/>
                <Container/>
            </Stack>
        </Stack>
    </>);
};

export default Main;