# 🤖 Chatbot IA II — Suporte para Objetos de Aprendizagem (TCC)

Este projeto é um **Chatbot Inteligente** desenvolvido para a disciplina **Inteligência Artificial II** da faculdade, em parceria com [@5alomao](https://github.com/5alomao). O chatbot tem como objetivo responder perguntas relacionadas a **objetos de aprendizagem voltados para crianças autistas**, tema central do nosso **Trabalho de Conclusão de Curso (TCC)**.

---

## 🎯 Objetivo

A proposta do chatbot é auxiliar educadores, terapeutas e familiares, fornecendo informações sobre materiais e objetos de aprendizagem adaptados ao público-alvo. O conhecimento do bot é alimentado por uma **planilha estruturada**, que contém descrições, categorias e indicações pedagógicas.

---

## 🧠 Tecnologias Utilizadas

- **Gemini API** — Utilizada para geração de respostas baseadas em linguagem natural.
- **Python + Embeddings** — Responsável por vetorização dos dados da planilha e similaridade semântica.
- **Azure** — Hospedagem da API de embeddings.
- **React.js** — Interface web simples e acessível para interação com o chatbot.
- **Vercel** — Hospedagem do frontend.

---

## ⚙️ Como Funciona

1. **Planilha de Conhecimento**: Contém os dados principais sobre os objetos de aprendizagem.
2. **Script em Python**: Processa a planilha e gera embeddings dos textos.
3. **Consulta Inteligente**: A API busca o embedding mais próximo da pergunta do usuário e envia o contexto para o Gemini.
4. **Interface React**: Permite ao usuário conversar com o chatbot de forma simples e rápida.

---

## 🌐 Acesse

- **Frontend (Vercel):** https://chatbot-objs-tea.vercel.app
- **Colaborador:** [@5alomao](https://github.com/5alomao)

---

## ⚠️ Observações Importantes

- A **primeira requisição** pode demorar alguns segundos, pois a API está hospedada na Azure usando o plano gratuito do **Azure for Students**, que entra em estado de hibernação para economizar recursos.
- O projeto utiliza o **plano gratuito da API Gemini**, sujeito a **limites de uso diário**. Em períodos de alto uso, a IA pode não responder temporariamente.
- A **base de dados** também é limitada, com foco apenas em objetos de aprendizagem previamente cadastrados na planilha.
- Este projeto foi desenvolvido **exclusivamente para fins de aprendizado e pesquisa acadêmica**.

---

## 📖 Licença

Projeto acadêmico sem fins comerciais, voltado para fins educacionais e de pesquisa.

---
