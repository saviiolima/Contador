import { Section, Title, H2, Button } from "./style.js";
import { useState } from "react";

function Home() {
  const [numero, setNumero] = useState(0);

  const Adicionar = () => {
    if (numero < 10) {
      setNumero(numero + 1);
    }
  };
  const Diminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };
  const Zerar = () => {
    if (numero > 0) {
      setNumero(0);
    }
  };
  return (
    <Section>
      <Title>Contador</Title>
      <H2>{numero}</H2>
      <Button onClick={Adicionar}>+1</Button>
      <Button onClick={Diminuir}>-1</Button>
      <Button onClick={Zerar}>Restart</Button>
    </Section>
  );
}

export default Home;
