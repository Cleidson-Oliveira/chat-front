import { globalStyles } from "./style/global";
import { Chat } from "./pages/chat";

export function App() {
  globalStyles();
  
  return (
    <div>
      <Chat />
    </div>
  )
}
