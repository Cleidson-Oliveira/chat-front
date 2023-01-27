import { styled } from '@stitches/react';

export const MessageConteiner = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,

    variants: {
        sender: {
            thisChat: {
                alignItems: "flex-end",
            },
            otherChat: {
                alignItems: "flex-start"
            }
        }
    }
})

export const MessageAuthor = styled("div", {
    color: "white",
    fontSize: 12,
})

export const MessageText = styled("div", {
    width: "fit-content",
    maxWidth: "70%",
    padding: 14,
    fontSize: 12,
    color: "white",
    
    variants: {
        sender: {
            thisChat: {
                backgroundColor: "#07847E",
                borderRadius: "6px 6px 0 6px",
            },
            otherChat: {
                backgroundColor: "#633BBC",
                borderRadius: "0 6px 6px 6px",
            }
        }
    }
})