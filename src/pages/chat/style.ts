import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        inicial: "(min-width: 640px)",
        mobile: "(max-width: 640px)",
    },
});

export const ChatConteiner = styled("div", {
    "@inicial": {
        width: "70%",
    },
    "@mobile": {
        width: "85%",        
    },

    height: "100vh",
    margin: "auto",
})

export const ChatHeader = styled("header", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "20vh",
})

export const FriendInfo = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 16,

    "& img": {
        width: 48,
        height: 48,
        borderRadius: "50%",
    },

    "& div": {
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },

    "& h2": {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },

    "& span": {
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "#00B37E",
        fontSize: 12,

        "&::before": {
            content: "",
            width: 10,
            height: 10,
            backgroundColor: "#00B37E",
            borderRadius: "50%"
        }
    }
})

export const Messages = styled("div", {
    display: "flex",
    flexDirection: "column-reverse",
    gap: 12,
    height: "65vh",
    overflow: "auto",

    "&::-webkit-scrollbar" : {
        display: "none"
    }
})

export const FormMsg = styled("form", {
    display: "flex",
    alignItems: "center",
    height: "15vh",
})

