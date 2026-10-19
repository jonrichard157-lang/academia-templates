import { academia as a } from "./config/academia";
import { Header, Hero, Ticker, Diferenciais, Sobre, Modalidades, Estrutura, Equipe, Planos, Depoimentos, Faq, Localizacao, CtaFinal, Footer } from "./components/sections";

export default function App() {
  return (
    <>
      {a.isDemo && <div className="demo">Versão demonstrativa: textos, planos, valores e imagens são exemplos.</div>}
      <Header />
      <main>
        <Hero /><Ticker /><Diferenciais /><Sobre /><Modalidades /><Estrutura /><Equipe />
        <Planos /><Depoimentos /><Faq /><Localizacao /><CtaFinal />
      </main>
      <Footer />
    </>
  );
}
