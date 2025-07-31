import { Generic_Button } from "./_components/generic__button";
import { Generic_Card_Apresentacao } from "./_components/card_aprensentacao";
import { Card_Modulos } from "./_components/card_modulos";
//possivel ideai: implementar um jogo como se fosse o "jogo do milhão"
export default function Page() {
  return(
    <>
      <Generic_Card_Apresentacao/>
      <Card_Modulos/>
    </>
  );
}