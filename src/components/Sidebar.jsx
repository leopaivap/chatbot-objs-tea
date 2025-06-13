import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../assets/assets";

const SideBar = ({ onNewChat }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    if (isModalOpen) {
      setIsOpen(true);
      setModalOpen(false);
    } else {
      setIsOpen(false);
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            alt="menu"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="options">
          <div className="bottom" onClick={onNewChat}>
            <img src={assets.plus_icon} alt="novo chat" />
            {isOpen && <p>Novo Chat</p>}
          </div>
          <div className="bottom" onClick={() => handleModal()}>
            <img src={assets.question_icon} alt="quem somos" />
            {isOpen && <p>Quem somos?</p>}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => handleModal()}>
              &times;
            </button>
            <h2>Quem somos?</h2>
            <p>
              Este assistente foi desenvolvido por Leonardo Paiva e Salomão
              Junior para a disciplina IA II da faculdade, com o objetivo de
              apoiar o uso de Objetos de Aprendizagem e promover uma educação
              acessível, personalizada e eficiente por meio de tecnologias
              modernas.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
