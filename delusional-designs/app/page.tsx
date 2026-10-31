const services = [
  { number: '01', name: 'Identity', detail: 'Strategy, visual systems, art direction' },
  { number: '02', name: 'Digital', detail: 'Websites, digital experiences, interfaces' },
  { number: '03', name: 'Image-making', detail: 'Campaigns, concepts, visual worlds' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Delusional Designs home">
          <span>DELUSIONAL</span><span>DESIGNS<sup>®</sup></span>
        </a>
        <div className="header-note">Independent creative studio<br />Available worldwide</div>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#services">Capabilities</a>
          <a className="contact-link" href="mailto:hello@delusional.design">Get in touch</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span>Independent by nature.</span><span>Unreasonable by design.</span></div>
        <h1 id="hero-title"><span>DELUSIONAL</span><span className="second-line">DESI<span className="cutout">G</span>NS<sup>®</sup></span></h1>
        <div className="hero-bottom">
          <p className="hero-statement">Good ideas have<br />a mind of their own.</p>
          <div className="hero-index"><span className="index-mark">DD—001</span><span>Design with intent.<br />Never by default.</span></div>
        </div>
        <div className="side-stamp" aria-hidden="true">DD<br />®<br />26</div>
      </section>

      <section className="intro section-grid" id="approach">
        <p className="eyebrow">01 / A point of view</p>
        <div className="intro-copy">
          <h2>Not here to<br /><em>fit the brief.</em></h2>
          <div className="intro-description">
            <p>Delusional Designs is an independent creative studio for brands with something to say and the nerve to say it differently.</p>
            <p>We build identities and digital experiences with clarity, curiosity, and just enough disorder to make them feel alive.</p>
          </div>
        </div>
      </section>

      <section className="services section-grid" id="services">
        <p className="eyebrow">02 / What we do</p>
        <div className="services-content">
          <div className="services-heading"><h2>Small list.<br /><em>Wide open.</em></h2><p>From first thought to final detail.</p></div>
          <div className="service-list">
            {services.map((service) => (
              <div className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Studio manifesto">
        <p className="eyebrow">03 / The short version</p>
        <p className="manifesto-line">MAKE IT<br /><span>MEAN</span> SOMETHING<span className="manifesto-period">.</span></p>
        <div className="manifesto-foot"><span>No noise for noise’s sake.</span><span>Just work with a pulse.</span></div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top"><p className="eyebrow">04 / Start a conversation</p><a className="email-link" href="mailto:hello@delusional.design">Have a good one<br />in mind?</a></div>
        <div className="footer-bottom"><a className="footer-wordmark" href="#top">DELUSIONAL DESIGNS<sup>®</sup></a><span>Independent by nature. © 2026</span><a href="mailto:hello@delusional.design">hello@delusional.design</a></div>
      </footer>
    </main>
  );
}
