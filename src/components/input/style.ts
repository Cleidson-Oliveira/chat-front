import { styled } from '@stitches/react';

export const InputConteiner = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    height: "52px",
    padding: "0 1.5rem",
    boxSizing: "border-box",
    background: "#282843",
    borderRadius: "26px",

    "& input": {
        backgroundColor: "transparent",
        border: "none",
        color: "#fff",
        height: "100%",
        flex: 1,
        
        "&::placeholder": {
            color: "ddd",
        },

        "&:focus-visible": {
            outline: "none",
        }
    }
})

export const SendMessageButton = styled("button", {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
})