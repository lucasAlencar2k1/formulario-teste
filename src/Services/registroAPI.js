import axios from "axios"

const dados_api = axios.create({ baseURL: "http://localhost:8000" })

async function busca_dados_api_registro() {

    const dados = await dados_api.get("/usuarios")

    return dados.data

}

async function criar_registro_api(dados_do_usuario) {

    await dados_api.post("/usuarios", dados_do_usuario)

}

export {
    busca_dados_api_registro,
    criar_registro_api
}