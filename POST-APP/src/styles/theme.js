import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";

export const theme = extendTheme({
    styles: {
        global:{
            "html, body": {
                padding: 0,
                margin: 0,
                fontSize: "16px",
                color: "primary.200"
            },
            "*": {
                boxSizing: "border-box"
            }
        }
    },
    colors: {
        primary: {
            200: "#424642",
            100: "#536162"
        },
        secondary: "#C06014",
        highlight: {
            100: "#F27B19"
        },
        muted: {
            300: "#F3F4ED",
            200: "#FCFCFC",
            100: "#FFFFFF",
        },
    },
    fonts: {
        heading: "Prompt",
        body: "Prompt",
    },
    components: {
        Button,
    },
})