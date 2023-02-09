import { FormEvent, useCallback, useContext, useMemo, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { X } from "phosphor-react";
import { ChatContext } from "../../context/chat";
import { Message } from "../../components/message";
import { Input } from "../../components/input";
import { ChatConteiner, ChatHeader, Messages, FriendInfo, FormMsg, StateInfo } from "./style";

export function Chat () {
    const [ msg, setMsg ] = useState("");
    const { id } = useParams();
    const { sendMessage, messages, users } = useContext(ChatContext);

    const contact = useMemo(() => users.find(user => user.id === id), [])
    const contactIsOnline = users.some(user => user.id === id);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if(!msg.trim()) return;

        sendMessage(msg, id!)
        setMsg("");
    }

    return (
        <ChatConteiner>

            <ChatHeader>
                <FriendInfo>
                    {/* <img src="https://avatars.githubusercontent.com/u/81466026?v=4" /> */}
                    <img src="https://i.stack.imgur.com/frlIf.png" />
                    <div>
                        <h2>{contact?.name}</h2>
                        <StateInfo state={contactIsOnline ? "online" : "offline"}>
                            {contactIsOnline ? "Online" : "Offline"}
                        </StateInfo>
                    </div>
                </FriendInfo>
                <div>
                    <Link to={"/"}>
                        <X size={20} weight="light" color="white" />
                    </Link>
                </div>
            </ChatHeader>
            
            <Messages>
                { messages.map((data, i) => {

                    const canShowMessage = data.from == contact?.name || data.to == contact?.id;
                    
                    return canShowMessage && (
                        <Message
                            date={data.date}
                            message={data.message}
                            name={data.from}
                            key={i}
                        />
                    )})
                }
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
