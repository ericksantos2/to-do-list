import { CardDiv, ListaTodo } from "./styled";

export default function Card() {
  return (
    <CardDiv>
      <h1>Coisas para fazer</h1>
      <ListaTodo>
        <li>
          <input type='checkbox' />
          <label htmlFor="">zap 2</label>
        </li>
        <li>
          <input type='checkbox' id='zap' />
          <label htmlFor="zap">zap 3</label>
        </li>
      </ListaTodo>
    </CardDiv>
  )
}