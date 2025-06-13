import Sidebar from "./components/Sidebar";
import Painel from "./components/Painel";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setInput("");
    setRecentPrompt("");
    setResultData("");
  };

  return (
    <>
      <Sidebar onNewChat={newChat} />
      <Painel
        input={input}
        setInput={setInput}
        recentPrompt={recentPrompt}
        setRecentPrompt={setRecentPrompt}
        showResult={showResult}
        setShowResult={setShowResult}
        loading={loading}
        setLoading={setLoading}
        resultData={resultData}
        setResultData={setResultData}
        newChat={newChat}
      />
    </>
  );
}

export default App;
