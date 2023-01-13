const MuiAppBar = {
    styleOverrides: {
        root: ({theme}) => ({
            boxShadow: theme.shadows[1],
            zIndex: theme.zIndex.drawer + 1,
            position: 'relative',
            padding: theme.spacing(2, 1.75),
        }),
    },
};

export default MuiAppBar;
