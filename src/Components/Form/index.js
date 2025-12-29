import { criar_registro_api } from "../../Services/registroAPI"
import styled from "styled-components"
import { useState } from "react"

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  height: 500px;
  border-radius: 8px;
  background: #a9a9a951;
`

const FormFields = styled.div`
    display: flex;
    flex-direction: column;    
`

const TituloCampo = styled.label`
    font-size: 18px;
`

const CampoInput = styled.input`
    font-size: 18px;
    padding: 8px;
    width: 400px;
`

const BotaoForm = styled.button`
    padding: 8px;
`

function Form() {

    // const [registros, setRegistros] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email)    
    console.log(password)    

    // async function buscar_registros() {
    //     const registros_usuarios = await busca_dados_api_registro() 
    //     setRegistros(registros_usuarios)
    // }

    async function criar_novo_usuario(dados_usuario) {
        dados_usuario = {
            email: email,
            password: password
        }
        alert("Usuário registrado!")
        await criar_registro_api(dados_usuario)
    }

    return (
        <FormContainer>
            <FormFields>
                <TituloCampo>E-mail</TituloCampo>
                <CampoInput placeholder="E-mail" onChange = {(e) => setEmail(e.target.value)} value = {email} />
            </FormFields>
            <FormFields>
                <TituloCampo>Password</TituloCampo>
                <CampoInput placeholder="password" onChange = {(e) => setPassword(e.target.value)} value = {password} />
            </FormFields>
            <BotaoForm onClick = {criar_novo_usuario}>Registrar</BotaoForm>
        </FormContainer>
    )
}

export default Form;