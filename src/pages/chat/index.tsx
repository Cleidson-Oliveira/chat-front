import { ChatConteiner, ChatHeader, Messages, FriendInfo, FormMsg } from "./style";
import { Message } from "../../components/message";

import { X } from "phosphor-react";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";

interface ChatProps {}

export function Chat (props: ChatProps) {

    const username = "Test"

    const dataMsgs = [
        {
            name: "Cleidson",
            date: "11:30",
            message: "Tive uma ideia incrível"
        },
        {
            name: "Cleidson",
            date: "11:30",
            message: "para um projeto! 😍"
        },
        {
            name: "Test",
            date: "11:32",
            message: "Sério? Me conta mais."
        },
        {
            name: "Cleidson",
            date: "11:34",
            message: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
        },
        {
            name: "Test",
            date: "11:36",
            message: "#boraCodar! 🚀"
        },
        {
            name: "Cleidson",
            date: "11:30",
            message: "Tive uma ideia incrível para um projeto! 😍"
        },
        {
            name: "Test",
            date: "11:32",
            message: "Sério? Me conta mais."
        },
        {
            name: "Cleidson",
            date: "11:34",
            message: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?"
        },
        {
            name: "Test",
            date: "11:36",
            message: "#boraCodar! 🚀"
        },
        {
            name: "Cleidson",
            date: "11:38",
            message: "vamo!"
        },
    ]

    const [ dataMsg, setDataMsg ] = useState(dataMsgs);
    const [ msg, setMsg ] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setDataMsg(prevState => [{name: username, message: msg, date: "11:00"}, ...prevState]);
        setMsg("");
    }

    return (
        <ChatConteiner>

            <ChatHeader>
                <FriendInfo>
                    <img src="https://avatars.githubusercontent.com/u/81466026?v=4" />
                    <div>
                        <h2>Cleidson</h2>
                        <span>Online</span>
                    </div>
                </FriendInfo>
                <div>
                    <X size={20} weight="light" color="white" />
                </div>
            </ChatHeader>
            
            <Messages>
                { dataMsg.map((data, i) => (
                    <Message
                        date={data.date}
                        isMine={data.name === username}
                        message={data.message}
                        name={data.name}
                        key={i}
                    />
                ))}
            </Messages>
            <FormMsg onSubmit={handleSubmit}>
                <Input
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
            </FormMsg>
        </ChatConteiner>
    )
}
