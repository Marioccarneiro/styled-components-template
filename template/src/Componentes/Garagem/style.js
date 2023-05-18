import styled from "styled-components";

export const Botao = styled.button`
  background: orange;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    background: black;
    color: white;
  }
`;

export const GaragemContainer = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Estacionamento = styled.section `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;