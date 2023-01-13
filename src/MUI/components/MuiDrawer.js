const MuiDrawer = {
    defaultProps: {
        PaperProps: {
            sx: {
                position: 'relative',
                padding: '0 5px',
                width: '300px',
                transitionProperty: `transform, width !important`,
                transitionDuration: "225ms !important",
                transitionTimingFunction: `cubic-bezier(0, 0, 0.2, 1) !important`,
                transitionDelay: `0ms !important`,
            }
        },
    },
};

export default MuiDrawer;
