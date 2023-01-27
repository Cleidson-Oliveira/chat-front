import { MessageConteiner, MessageAuthor, MessageText } from "./style";

interface MessageProps {
    name: string,
    isMine: boolean,
    message: string,
    date: string
}

export function Message ({name, isMine, message, date}: MessageProps) {

    return (
        <MessageConteiner sender={isMine ? "thisChat" : "otherChat"}>
            <MessageAuthor>
                <span>{isMine ? "Você" : name} - {date}</span>
            </MessageAuthor>
            <MessageText sender={isMine ? "thisChat" : "otherChat"}>
                { message }
            </MessageText>
        </MessageConteiner>
    )
}