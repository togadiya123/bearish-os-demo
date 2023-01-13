const MuiButton = {
    styleOverrides: {
        root: ({theme}) => ({
            textTransform: 'unset',
            '&.MuiButton-text': {
                width: 'fit-content',
            },
            color: 'black',
            padding: '2px 17px',
            borderRadius: '5px',
            boxShadow: 'inset 0px 3px 6px #00000029, 0px 3px 6px #00000029',
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
            },
        }),
    }
};

export default MuiButton;
