import { styled } from "@stitches/react";

export const Title = styled("h2", {
    textAlign: "center",
    color: "white",
    marginTop: 24,
});

export const RegisterUserForm = styled("div", {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    width: '300px',
    gap: '.8rem',
    padding: '1rem',

    "& input": {
        height: "2rem",
        borderRadius: '4px',
        border: 'none',
        paddingLeft: '.7rem',

        "&:focus-visible": {
            outline: "none",
        },

        "&::placeholder": {
            color: "#aaa",
        },
    },
    
    "& button": {
        height: "2rem",
        borderRadius: '4px',
        border: 'none',
        background: "#00B37E",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",

        "&:hover": {
            background: "#00B37Eb3",
        }
    },
});

export const UsersOnlineList = styled("ul", {
    width: '250px',
    padding: '2rem',
    margin: 'auto',
    boxSizing: 'border-box',

    "& li": {
        padding: "5px",
        background: "#fff3",
        cursor: "pointer",
        listStyle: "none",
        borderRadius: '4px',
        color: "#000",
        
        "&:hover": {
            background: "#fff6",
        }
    },
    
    "& a": {
        display: "block",
        width: "100%",
        height: "100%",
        color: "inherit",
        textDecoration: "none",
    }
});

export const UsersOnlineListEmpty = styled("p", {
    display: "inline-block",
    textAlign: "center",
    width: "100%",
    paddingTop: "24px",
    color: "White",
})
