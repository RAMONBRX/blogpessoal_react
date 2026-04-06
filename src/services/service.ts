import axios from "axios";

// Cria uma nova instância do Axios
const api = axios.create({
        baseURL: "https://blogpessoal-hjiw.onrender.com"
    })

// Função para cadastrar Usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta);
}
// Função para Autenticar usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta);
}