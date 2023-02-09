import { useContext } from "react";
import { ChatContext } from "../../context/chat";
import { MessageConteiner, MessageAuthor, MessageText } from "./style";

interface MessageProps {
    name: string,
    message: string,
    date: number
}

export function Message ({name, message, date : dateInMs}: MessageProps) {

    const { thisUser } = useContext(ChatContext);

    const isMine = name === thisUser;

    const date = new Date(dateInMs)

    return (
        <MessageConteiner sender={isMine ? "thisChat" : "otherChat"}>
            <MessageAuthor>
                <span>{isMine ? "Você" : name} - {`${date.getHours()}:${date.getMinutes()}`}</span>
            </MessageAuthor>
            <MessageText sender={isMine ? "thisChat" : "otherChat"}>
                { message }
            </MessageText>
        </MessageConteiner>
    )
}