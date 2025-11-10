import { Generic_Card_Apresentacao } from "./_components/card_aprensentacao";
import { Card_Modulos } from "./_components/card_modulos";
import Container_Modulos from "./_components/container_modulos";
import { Modulos } from "./_components/modulos";
//possivel ideai: implementar um jogo como se fosse o "jogo do milhão"

export default function HomePage() {
  return(
    <>
      <Generic_Card_Apresentacao/>
      
      <Card_Modulos/>

      <Container_Modulos
        title = "Elementar"
        content1={
          <Modulos
            conteudo = "Elementary 1 (A1+)"
            descricao = "Revisão do beginner, present continuous, going to, like/love/hate + ing."
            emoji = "🐣"/>
        }
        content2={
          <Modulos
            conteudo = "Elementary 2 (A2-)"
            descricao = "Comparatives, superlatives, past simple mais amplo, vocabulário de viagens, comidas e rotinas."
            emoji = "🐣"/>
        }
        content3={
          <Modulos
            conteudo = "Elementary 3 (A2)"
            descricao = "Future with will, present perfect (ever/never) introdutório, how much/many, adverbs of frequency."
            emoji = "🐣"/>
        }
      />

      <Container_Modulos
        title="Básico"
        content1 = {
          <Modulos
            conteudo = "Beginner 1 (A1-)"
            descricao = "Introdução ao inglês, cumprimentos, be verb, pronomes, números, cores, nacionalidades, there is/are."
            emoji = "🌱"/>
        }
        content2 = {
          <Modulos
            conteudo = "Beginner 2 (A1)"
            descricao = "Simple present, rotina, can/can't, perguntas básicas, vocabulário de família e lugares."
            emoji = "🌱"/>
        }
        content3 ={
          <Modulos
            conteudo = "Beginner 3 (A1+)"
            descricao = "Past simple (be, regular, irregular), some/any, countable/uncountable nouns, conversas simples."
            emoji = "🌱"/>
        }
      />

      <Container_Modulos
        title = "Pré-Intermediário"
        content1={
          <Modulos
            conteudo = "Pre-Intermediate 1 (A2)"
            descricao = "Revisão do elementary, perguntas e respostas no present e past, uso de do/does/did, expressões do cotidiano."
            emoji = "🚶‍♂️"/>
        }
        content2={
          <Modulos
            conteudo = "Pre-Intermediate 2 (A2+)"
            descricao = "Comparatives e superlatives, present perfect (ever/never), going to e will, vocabulário de dinheiro, clima e viagens."
            emoji = "🚶‍♂️"/>
        }
        content3={
          <Modulos
            conteudo = "Pre-Intermediate 3 (B1-)"
            descricao = "Conditionals 0 e 1, modals (must/should/might), phrasal verbs, expressões com get, leitura e conversação fluentes em temas do dia a dia."
            emoji = "🚶‍♂️"/>
        }
      />

      <Container_Modulos
        title = "Intermediate"
        content1={
          <Modulos
            conteudo = "Intermediate 1 (B1)"
            descricao = "Revisão e ampliação do present perfect, past perfect, modals, reported speech inicial"
            emoji = "🚀"/>
        }
        content2={
          <Modulos
            conteudo = "Intermediate 2 (B1+)"
            descricao = "Conditionals 1/2, gerunds/infinitives, passive voice, future forms (will, going to, present continuous)."
            emoji = "🚀"/>
        }
        content3={
          <Modulos
            conteudo = "Intermediate 3 (B1+/B2-)"
            descricao = "Relative clauses, narrative tenses, wish/if only, discourse markers, leitura e fala mais fluidas."
            emoji = "🚀"/>
        }
      
      />

      <Container_Modulos
        title = "Advanced"
        content1={
          <Modulos
            conteudo = "Advanced 1 (C1)"
            descricao = "Advanced grammar review, subjunctive, mixed conditionals, análise de textos complexos."
            emoji = "🧠"/>
        }
        content2={
          <Modulos
            conteudo = "Advanced 2 (C1)"
            descricao = "Nuances of meaning, formal vs informal English, register, word formation."
            emoji = "🧠"/>
        }
        content3={
          <Modulos
            conteudo = "Advanced 3 (C1+)"
            descricao = "Discussões, ensaios argumentativos, idiomatic expressions, academic writing, fluência quase nativa."
            emoji = "🧠"/>
        }
      
      />
    </>
  );
}