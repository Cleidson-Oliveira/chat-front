import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { ChatContext } from "../../context/chat";
import { RegisterUserForm, Title, UsersOnlineList, UsersOnlineListEmpty } from "./style";

interface UserList {
    name: string,
    id: string
}

export function Home () {

    const [name, setName] = useState("");

    const { registerUser, users, thisUser } = useContext(ChatContext);

    const isOnlineUserListEmpty = users.some(user => user.name !== thisUser);

    return !thisUser.trim() ? (
        <RegisterUserForm>
            <input type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
            />

            <button onClick={() => registerUser(name)}>
                Conectar
            </button>
        </RegisterUserForm>
    ) : (
        <>
            <Title>Online Users</Title>
            { isOnlineUserListEmpty 
                ? <UsersOnlineList>
                    { users.map((user) => {
                        return user.name != thisUser && (
                        <li key={user.id}>
                            <Link to={"/chat/" + user.id}>
                                { user.name }
                            </Link>
                        </li>
                    )})}
                </UsersOnlineList>
                : <UsersOnlineListEmpty>Não existem pessoas online no momento</UsersOnlineListEmpty>
            }
        </>
    )
}