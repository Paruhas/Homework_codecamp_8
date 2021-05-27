const Button = {
    baseStyle: {
        fontWeight: "400",
    },
    sizes: {
        sm: {
            minWidth: "150px",
            fontSize: "sm",
            padding: "4"
        },
        md: {            
            minWidth: "150px",
            fontSize: "md",
            padding: "6"
        },
        lg: {            
            minWidth: "150px",
            fontSize: "lg",
            padding: "8"
        }
    },
    variants: {
        primary: {
            bg: "primary.200",
            color: "white",
            ":hover": {
                bg: "primary.100",
            },
            ":focus": {
                boxShadow: "none"
            }
        },
        secondary: {
            bg: "secondary",
            color: "white",
            ":hover": {
                bg: "highlight.100",
            },
            ":focus": {
                boxShadow: "none"
            }
        },
        tertiary: {
            bg: "muted.300",
            color: "grey",
            ":hover": {
                bg: "muted.200",
                color: "black",
            },
            ":focus": {
                boxShadow: "none"
            }
        },
    },
    defaultProps: {

    }
}

export default Button