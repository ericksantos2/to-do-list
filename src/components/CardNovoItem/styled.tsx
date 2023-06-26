import { styled } from "styled-components";
import { CardDiv } from "../Card/styled";

export const NovoItemDiv = styled(CardDiv)`
  --tamanho: calc(20vw - var(--padding));
  align-items: center;
  gap: 0.67rem;
  justify-content: center;
  > form {
    display: flex;
    flex-direction: column;
    gap: 0.33rem;
    text-align: center;
    > label {
      font-size: 18px;
    }
    > input {
      --input-opacity: 0.6;
      border: 1px solid rgba(0, 0, 0, var(--input-opacity));
      border-radius: 5px;
      padding: 0.33rem;
      transition: 50ms;
      &:focus {
        --input-opacity: 1;
        outline: none;
        transition: 250ms;
      }
    }
    > button {
      background-color: rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 10px;
      font-family: var(--font-family);
      font-size: .9rem;
      margin-top: 0.33rem;
      padding: 0.33rem;
    }
  }
`