import Card from "./components/Card";
import CardNovoItem from "./components/CardNovoItem";
import AppContainer from "./styles/appStyled";

export default function App() {
  return (
    <AppContainer>
      <Card />
      <CardNovoItem />
    </AppContainer>
  )
}