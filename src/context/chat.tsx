import { useEffect, useMemo, useState } from "react";
import { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

interface User {
    name: string,
    id: string
}

interface Message {
    from: string,
    date: number,
    message: string,
    to: string
}

interface ChatProviderProps {
    children: ReactNode
}

interface ServerToClientEvents {}
interface ClientToServerEvents {}
interface Provider {
    users: User[],
    thisUser: string,
    messages: Message[],
    socket: Socket<ServerToClientEvents, ClientToServerEvents>,
    registerUser(name: string): void,
    sendMessage(message: string, to: string): void
}

export const ChatContext = createContext({} as Provider);

export function ChatProvider ({children}: ChatProviderProps) {
    
    const socket = useMemo(() => io(import.meta.env.VITE_BACKEND), []);

    const [ thisUser, setThisUser ] = useState ("");
    const [ users, setUsers ] = useState<User[]> ([]);
    const [ messages, setMessages ] = useState<Message[]> ([]);
    
    const registerUser = (name: string) => {

        if (name == "") return;

        setThisUser(name)
        
        socket.emit("register user", {
            name
        })
    }
    
    const sendMessage = (messageText: string, to: string) => {

        const message: Message = {
            from: thisUser,
            message: messageText,
            date: Date.now(),
            to
        }
        
        socket.emit("message", message);
        setMessages(prevState => [message, ...prevState]);
    }

    useEffect(() => {
        
        socket.on("online users", (data) => {
            setUsers(data)
        });
        
        socket.on("message", (data) => {
            setMessages(prevState => [data.data, ...prevState]); 
        });
        
    }, [socket])

	return (
		<ChatContext.Provider value={{
            users,
            thisUser,
            messages,
            socket,
            registerUser,
            sendMessage
		}}>
			{children}
		</ChatContext.Provider>
	);
}