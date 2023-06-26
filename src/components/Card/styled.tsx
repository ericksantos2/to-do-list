import styled from "styled-components";

export const CardDiv = styled.div`
  --padding: 2rem;
  --tamanho: calc(25vw - var(--padding));
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: var(--tamanho);
  padding: var(--padding);
  width: var(--tamanho);

  > h1, > label {
    font-size: 21px;
    font-weight: bold;
  }
`

export const ListaTodo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > li {
    align-items: center;
    display: flex;
    gap: 0.33rem;
    position: relative;
    
    > label {
      font-weight: 400;
    }

    > button {
      background-color: transparent;
      border: none;
      color: #646464;
      padding: 0;
      position: absolute;
      right: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }
`