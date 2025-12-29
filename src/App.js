import Form from "./Components/Form"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 42px;
  padding: 12px;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`

function App() {
  return (
    <FormContainer>
      <Title>Sign-in</Title>
      <Form />
    </FormContainer>
  );
}

export default App;
