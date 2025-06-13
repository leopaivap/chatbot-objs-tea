import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const getApiData = async (query) => {
  try {
    const response = await axios.post(
      "https://chatbot-flask-d8fjfsb4d2cecaer.eastus-01.azurewebsites.net/api",
      {
        consulta: query,
      },
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    console.log(response.data);
    return response.data.mensagem;
  } catch (error) {
    console.error(error);
  }
};
export default getApiData;
