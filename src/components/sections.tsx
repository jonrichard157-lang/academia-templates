import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { academia as a, wa } from "../config/academia";
import type { Img } from "../config/academia";

const Media = ({ img, className = "" }: { img: Img; className?: string }) =>
  img.src ? (
    <img className={className} src={img.src} alt={img.alt} loading="lazy" />
  ) : (
    <div className={`ph ${className}`} role="img" aria-label={img.alt}><span>{img.alt}</span></div>
  );

const Cta = ({ children = "Agendar aula experimental", ghost = false }: { children?: string; ghost?: boolean }) => (
  <a className={ghost ? "btn ghost" : "btn"} href={wa()} target="_blank" rel="noopener noreferrer">{children}</a>
);

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Título de seção no estilo da referência: texto fantasma ao fundo, sobretítulo em destaque e título grande. */
function Title({ ghost, eyebrow, children, center = false }: { ghost: string; eyebrow: string; children: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "title center" : "title"}>
      <span className="ghost-title" aria-hidden>{ghost}</span>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  );
}

const links = [["Sobre", "#sobre"], ["Modalidades", "#modalidades"], ["Planos", "#planos"], ["Contato", "#contato"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bar">
      <a className="wordmark" href="#top">{a.nome}</a>
      <nav className={open ? "nav open" : "nav"} aria-label="Principal">
        {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
      </nav>
      <Cta>Aula experimental</Cta>
      <button className="burger" aria-expanded={open} aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? "Fechar" : "Menu"}</button>
    </header>
  );
}

const reduzMovimento = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function HeroMedia() {
  const ref = useRef<HTMLVideoElement>(null);
  const [tocando, setTocando] = useState(true);
  if (!a.heroVideo || reduzMovimento()) return <Media img={a.imagens.hero} className="hero-media" />;
  const alternar = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setTocando(true); } else { v.pause(); setTocando(false); }
  };
  return (
    <>
      <video ref={ref} className="hero-media" src={a.heroVideo} poster={a.imagens.hero.src}
        autoPlay muted loop playsInline preload="metadata" aria-label={a.imagens.hero.alt} />
      <button className="hero-toggle" onClick={alternar}>{tocando ? "Pausar vídeo" : "Reproduzir vídeo"}</button>
    </>
  );
}

/** Destaca o trecho `sloganDestaque` do slogan com a cor de acento. */
function Slogan() {
  const d = a.sloganDestaque;
  const i = d ? a.slogan.indexOf(d) : -1;
  if (i < 0) return <>{a.slogan}</>;
  return <>{a.slogan.slice(0, i)}<span>{d}</span>{a.slogan.slice(i + d.length)}</>;
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <HeroMedia />
      <div className="wrap hero-text">
        <p className="eyebrow">Aula experimental grátis</p>
        <h1><Slogan /></h1>
        <p className="hero-sub">{a.subtitulo}</p>
        <dl className="counters">
          {a.numeros.map((n) => (<div key={n.rotulo}><dt>{n.rotulo}</dt><dd>{n.valor}</dd></div>))}
        </dl>
        <div className="actions"><Cta /><a className="btn ghost" href="#planos">Ver planos</a></div>
      </div>
    </section>
  );
}

export function Ticker() {
  const itens = a.ticker.map((t) => <span key={t}>{t}</span>);
  return (
    <div className="ticker" aria-label={a.ticker.join(", ")}>
      <div className="ticker-track" aria-hidden>
        <div>{itens}</div><div>{itens}</div>
      </div>
    </div>
  );
}

export function Diferenciais() {
  return (
    <section className="sec wrap">
      <Title ghost="Diferenciais" eyebrow="Por que treinar aqui">Treino sério, <span>de perto.</span></Title>
      <ol className="steps">
        {a.diferenciais.map((d, i) => (
          <li key={d.titulo} className="reveal">
            <b className="step-no">{num(i)}</b>
            <div><h3>{d.titulo}</h3><p>{d.texto}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="sec tone">
      <div className="wrap split">
        <div className="frame reveal"><Media img={a.imagens.sobre} className="tall" /></div>
        <div>
          <Title ghost="Sobre" eyebrow="Sobre nós">{a.sobre.titulo}</Title>
          {a.sobre.texto.map((t) => <p key={t} className="lead">{t}</p>)}
          <div className="actions"><Cta ghost>Conhecer a academia</Cta></div>
        </div>
      </div>
    </section>
  );
}

export function Modalidades() {
  return (
    <section id="modalidades" className="sec wrap">
      <Title ghost="Modalidades" eyebrow="O que você encontra" center>Escolha o seu <span>ritmo.</span></Title>
      <ul className="cards">
        {a.modalidades.map((m, i) => (
          <li key={m.titulo} className="card reveal">
            <span className="badge">{num(i)}</span>
            <h3>{m.titulo}</h3>
            <p>{m.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Estrutura() {
  return (
    <section className="sec tone">
      <div className="wrap">
        <Title ghost="Estrutura" eyebrow="O espaço">Estrutura pensada para <span>render mais.</span></Title>
        <div className="mosaic">
          {a.estrutura.map((e) => (
            <figure key={e.titulo} className="reveal">
              <Media img={e.img} />
              <figcaption><b>{e.titulo}</b>{e.texto}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Equipe() {
  return (
    <section className="sec wrap">
      <Title ghost="Equipe" eyebrow="Nossa equipe">Quem treina <span>com você.</span></Title>
      <div className="team">
        {a.equipe.map((p, i) => (
          <figure key={i} className="reveal"><Media img={p.img} /><figcaption><b>{p.nome}</b>{p.funcao}</figcaption></figure>
        ))}
      </div>
    </section>
  );
}

export function Planos() {
  return (
    <section id="planos" className="sec tone">
      <div className="wrap">
        <Title ghost="Planos" eyebrow="Planos" center>Invista no seu <span>resultado.</span></Title>
        {a.isDemo && <p className="note">Valores de exemplo, para demonstração.</p>}
        <div className="plans">
          {a.planos.map((p) => (
            <article key={p.nome} className={p.destaque ? "plan hi reveal" : "plan reveal"}>
              {p.destaque && <span className="tag">Mais escolhido</span>}
              <h3>{p.nome}</h3>
              <p className="price">{p.preco}<small> {p.periodo}</small></p>
              <ul>{p.itens.map((i) => <li key={i}>{i}</li>)}</ul>
              <a className={p.destaque ? "btn" : "btn ghost"} href={wa(`Olá! Tenho interesse no plano ${p.nome}.`)} target="_blank" rel="noopener noreferrer">Quero este plano</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Depoimentos() {
  const [i, setI] = useState(0);
  const n = a.depoimentos.length;
  const d = a.depoimentos[i];
  return (
    <section className="sec wrap">
      <Title ghost="Alunos" eyebrow="Depoimentos">O que dizem <span>os alunos.</span></Title>
      <blockquote aria-live="polite">
        <p>{d.texto}</p>
        <footer>{d.autor}{d.demo && " (exemplo fictício)"}</footer>
      </blockquote>
      {n > 1 && (
        <div className="actions">
          <button className="btn ghost" onClick={() => setI((i + n - 1) % n)}>Anterior</button>
          <button className="btn ghost" onClick={() => setI((i + 1) % n)}>Próximo</button>
        </div>
      )}
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="sec tone">
      <div className="wrap faq">
        <Title ghost="FAQ" eyebrow="Dúvidas">Perguntas <span>frequentes.</span></Title>
        <div>
          {a.faq.map((f, k) => (
            <div key={f.titulo} className={open === k ? "q open" : "q"}>
              <button aria-expanded={open === k} aria-controls={`faq-${k}`} onClick={() => setOpen(open === k ? null : k)}>
                {f.titulo}<span aria-hidden>{open === k ? "−" : "+"}</span>
              </button>
              <p id={`faq-${k}`} hidden={open !== k}>{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section id="contato" className="sec wrap">
      <Title ghost="Contato" eyebrow="Onde estamos">Venha <span>conhecer.</span></Title>
      <div className="split">
        <div>
          <p className="lead">{a.endereco}</p>
          <dl className="hours">
            {a.horarios.map((h) => (<div key={h.dia}><dt>{h.dia}</dt><dd>{h.hora}</dd></div>))}
          </dl>
          <div className="actions"><Cta>Chamar no WhatsApp</Cta>
            {a.redes.map((r) => <a key={r.nome} className="btn ghost" href={r.url} target="_blank" rel="noopener noreferrer">{r.nome}</a>)}
          </div>
        </div>
        {a.mapaEmbed
          ? <iframe className="map" title="Mapa" src={a.mapaEmbed} loading="lazy" />
          : <Media img={{ alt: "Mapa: informe o link de incorporação em mapaEmbed" }} className="map" />}
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="final">
      <div className="wrap">
        <p className="eyebrow">Comece hoje</p>
        <h2>Sua primeira aula é por nossa conta.</h2>
        <Cta>Agendar agora</Cta>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <p>{a.endereco}</p>
        <p>{a.horarios[0].dia}, {a.horarios[0].hora}</p>
        <a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
      <p className="giant" aria-hidden>{a.nome}</p>
      <p className="wrap copy">© {new Date().getFullYear()} {a.nome}. Todos os direitos reservados.</p>
    </footer>
  );
}
