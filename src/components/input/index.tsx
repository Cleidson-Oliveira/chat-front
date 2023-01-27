import { PaperPlaneRight } from "phosphor-react";
import { InputHTMLAttributes } from "react";
import { InputConteiner, SendMessageButton } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input ({...rest}: InputProps) {

    return (
        <InputConteiner>
            <input 
                placeholder="Digite sua mensagem"
                {...rest}
            />
            <SendMessageButton>
                <PaperPlaneRight size={24} color="#fff" weight="fill" />
            </SendMessageButton>
        </InputConteiner>
    )
}