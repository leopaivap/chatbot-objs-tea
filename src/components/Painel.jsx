import React from "react";
import "./Painel.css";
import { assets } from "../assets/assets";
import getApiData from "../config/apigemini";

const Painel = ({
  input,
  setInput,
  recentPrompt,
  setRecentPrompt,
  showResult,
  setShowResult,
  loading,
  setLoading,
  resultData,
  setResultData,
  newChat,
}) => {
  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSentApi();
    }
  };

  const onSentApi = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const responseRaw = await getApiData(input);

    const responseArray = responseRaw.split("**");
    const formatted = responseArray
      .map((part, i) => (i % 2 === 1 ? `<b>${part}</b>` : part))
      .join("")
      .replace(/\n/g, "<br />");

    setResultData(formatted);
    setLoading(false);
    setInput("");
  };

  return (
    <div className="main">
      <div className="nav">
        <p onClick={newChat}>Objetos de Aprendizagem - Assistente</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Olá, seja bem vindo(a)!</span>
          </p>
          <p>Como posso lhe ajudar hoje?</p>
        </div>

        {!showResult ? (
          <div className="cards">
            <div className="card" onClick={() => handleCardClick("O que são Objetos de Aprendizagem (OAs)?")}>
              <p>O que são Objetos de Aprendizagem (OAs)?</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick("Como os OAs contribuem para a inclusão escolar?")}>
              <p>Como os OAs contribuem para a inclusão escolar?</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick("Qual a diferença entre ensino tradicional e uso de OAs?")}>
              <p>Qual a diferença entre ensino tradicional e uso de OAs?</p>
              <img src={assets.message_icon} alt="" />
            </div>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.dummy_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.user_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Entre com sua pergunta aqui"
            />
            <div>
              <img onClick={onSentApi} src={assets.send_icon} alt="Enviar" />
            </div>
          </div>
          <p className="bottom-info">
            Objetos de Aprendizagem – Assistente usa base própria com busca via
            embeddings do Gemini. Verifique sempre as fontes recomendadas, pois
            podem haver imprecisões.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Painel;
