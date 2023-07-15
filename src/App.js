import {
  faClipboardCheck,
  faComment,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { PopupWidget } from "react-calendly";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import PhotoPage from "./components/Feature/PhotoPage";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { HeroH2 } from "./components/Hero/HeroElements";
import NavBar from "./components/Navbar/Navbar";
import {
  ProductsHeading,
  ProductsInfo,
  ProductsTitle,
} from "./components/Products/ProductsElements";
import SentencePage from "./components/Sentence/SentencePage";
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./globalStyles";
import feedback1 from "./images/feedbacks/feedback1.png";
import feedback2 from "./images/feedbacks/feedback2.png";
import feedback3 from "./images/feedbacks/feedback3.png";
import giuseppe from "./images/front.png";
import { default as manuelRoberto2 } from "./images/manuelRoberto2.jpeg";
import marco from "./images/marco.png";
import Products from "./components/Products/Products";

import chiSono from "./images/main/chiSono.jpg";
import copertina from "./images/main/copertina.jpg";
import corsiInPresenza from "./images/main/corsiInPresenza.jpg";
import sedutePersonal from "./images/main/sedutePersonal.jpg";
import { SocialIconLink } from "./components/Footer/FooterElements";
import { FaWhatsapp } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-gallery-carousel/dist/index.css";

import uno from "./images/gallery/1.jpg";
import due from "./images/gallery/2.jpg";
import tre from "./images/gallery/3.jpg";
import quattro from "./images/gallery/4.jpg";
import cinque from "./images/gallery/5.jpg";
import sei from "./images/gallery/6.jpg";
import sette from "./images/gallery/7.jpg";
import otto from "./images/gallery/8.jpg";
import nove from "./images/gallery/9.jpg";
import dieci from "./images/gallery/10.jpg";
import undici from "./images/gallery/11.jpg";
import dodici from "./images/gallery/12.jpg";
import tredici from "./images/gallery/13.jpg";

const images = [
  uno,
  due,
  tre,
  quattro,
  cinque,
  sei,
  sette,
  otto,
  nove,
  dieci,
  undici,
  dodici,
  tredici,
];

const whatsappLink =
  "https://api.whatsapp.com/send?phone=3318479926&text=Ciao Manuel, vorrei prenotare una chiamata conoscitiva con te. Quando saresti disponibile?";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const popupRef = useRef(null);

  const handleClick = () => {
    console.log("Popup ref: ", popupRef.current);
    window.open(whatsappLink);
    // if (popupRef.current) {
    //   popupRef.current.onClick();
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calcola l'altezza della pagina
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      // Calcola la quantità di scroll verticale
      const scrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      // Verifica se l'utente ha scrollato la pagina di una quantità pari all'altezza della pagina
      if (scrollY >= windowHeight * 0.6) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Aggiungi l'event listener per il scroll
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let aboutMe = [feedback1, feedback2, feedback3];

  let onlineCoaching = [
    {
      title: "Schede personalizzate",
      desc: "Le schede vengono precedute da un test per valutare lo stato fisico, durano 4 settimane + 1 settimana di test. I programmi vengono adattati progressivamente settimana dopo settimana durante il mesociclo",
      icon: <FontAwesomeIcon icon={faClipboardCheck} size="3x" />,
    },
    {
      title: "Supporto via chat e video dimostrativi",
      desc: "Potrai chiedermi dubbi via chat in qualsiasi momento e cercherò di aiutarti sull'esecuzione egli esercizi. Ad ogni scheda saranno allegati una serie di video dimostrativi fatti da me sulla corretta esecuzione del movimento",
      icon: <FontAwesomeIcon icon={faComment} size="3x" />,
    },
    {
      title: "Feedback costanti attraverso video",
      desc: "Dopo ogni tuo allenamento dovrai mandarmi i video dell'esecuzione dei tuoi esercizi cosi che potrò seguirti al meglio con suggerimenti e feedback sulla qualità dell'esecuzione",
      icon: <FontAwesomeIcon icon={faVideo} size="3x" />,
    },
  ];

  return (
    <Router>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div style={{ marginTop: "-80px" }}>
        <Hero onBook={handleClick} />
      </div>
      <div
        style={{
          marginTop: "-80px",
          opacity: !isScrolled ? 0 : 1,
          width: "8vh",
          borderRadius: "4vh",
          height: "8vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",

          display: "flex",
          position: "sticky",
          top: "88vh",
          left: "90vw",
          zIndex: 999,
          cursor: "pointer",
        }}
      >
        <SocialIconLink
          href={whatsappLink}
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
          fontSize="5vh"
        >
          <FaWhatsapp />
        </SocialIconLink>
        {/* <PopupWidget
            ref={popupRef}
            url="https://api.whatsapp.com/send?phone=3318479926&text=Ciao Manuel, vorrei prenotare una chiamata conoscitiva con te. Quando saresti disponibile?"
            rootElement={document.getElementById("root")}
            text="Contattami"
            textColor="#ffffff"
            color="#e31837"
          /> */}
      </div>
      <div id="mainContainer">
        <SentencePage>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ProductsHeading>Sei pronto?</ProductsHeading>
            Che tu voglia migliorare il tuo aspetto
            <br />
            <br />
            Che tu voglia scoprire cosa è il calisthencis
            <br />
            <br />
            Che tu voglia semplicemente tenerti in forma
            <br />
            <br />
            O raggiungere i tuoi traguardi
            <br />
            <br />
            <ProductsTitle>
              Sei nel posto giusto, devi solo{" "}
              <span style={{ color: "rgb(227,24,55)" }}>iniziare!</span>
            </ProductsTitle>
          </div>
        </SentencePage>

        <PhotoPage id="chisono" img={chiSono}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <HeroH2 textAlign="right">CHI SONO</HeroH2>
            <ProductsInfo textAlign="right">
              Mi chiamo Manuel Roberto, e per me il Calisthenics va oltre il
              semplice allenamento. È un modo di connettersi con il proprio
              corpo, di esplorare le proprie capacità e di superare i propri
              limiti. Attraverso il mio lavoro, voglio ispirare le persone.
              Voglio che ognuno conosca il proprio potenziale e abbia la fiducia
              di migliorarsi. Sono un istruttore certificato Burningate dal 2018
              e mi piace tenermi sempre aggiornato sulle ultime novità. Mi
              impegno costantemente per migliorare le mie competenze e
              garantirti un servizio di qualità nel campo del Calisthenics. Il
              mio obiettivo è offrirti un servizio all'avanguardia e completo.
              Recentemente ho ottenuto una laurea magistrale in nutrizione.
              Questo mi permette di unire l'aspetto alimentare al mio approccio
              all'allenamento. Posso darti consigli personalizzati sulla dieta,
              sull'equilibrio nutrizionale e sull'uso di integratori, in modo da
              massimizzare i tuoi risultati e prenderti cura del tuo benessere
              generale.
            </ProductsInfo>
          </div>
        </PhotoPage>
        <SentencePage id="coaching">
          <div
            style={{
              display: "flex",

              flexDirection: "column",
            }}
          >
            <ProductsHeading marginBottom={"0rem"}>
              Allenati con me!
            </ProductsHeading>
            <ProductsTitle>
              Scopri il mio servizio di{" "}
              <span style={{ color: "rgb(227,24,55)" }}>COACHING ONLINE</span>
            </ProductsTitle>
            <br />
            <br />
            Il mio lavoro è spingerti a migliorare quotidianamente, trovare il
            giusto equilibrio nell'allenamento adatto a te e alle tue esigenze.
            Il mio servizio di coaching online ti offre la flessibilità di
            allenarti ovunque tu sia, godendo di una guida personalizzata e di
            un sostegno costante. Potrai contare su di me per fornirti feedback,
            rispondere alle tue domande e offrire motivazione a distanza. Che tu
            sia in viaggio, a casa o in una palestra locale, il coaching online
            ti permette di continuare il tuo percorso di allenamento con la
            stessa dedizione e professionalità. Scegliendo il coaching online,
            avrai l'opportunità di ottenere risultati straordinari con la
            flessibilità che si adatta al tuo stile di vita.
            <Products heading="Coaching" data={onlineCoaching} />
            {/* Per questo puoi
            allenarti con me in presenza sia partecipando a uno dei miei corsi
            sia prenotando la tua seduta personal dedicata. In alternativa, puoi
            affidarti al mio servizio di coaching online. */}
          </div>
        </SentencePage>
        <PhotoPage left img={corsiInPresenza}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroH2 textAlign="left">CORSI IN PRESENZA</HeroH2>

            <ProductsInfo textAlign="left">
              Se invece sei quel tipo di persona che preferisce allenarsi di
              persona, puoi trovare i miei corsi in presenza presso la palestra
              LiveFit a Grottaminarda e lo studio XDE ad Ariano Irpino. Sarò lì
              personalmente per seguirti durante le sessioni di allenamento. Sia
              che tu sia un principiante o un atleta esperto, i corsi in
              presenza si adattano al tuo livello. Scegli la sede che ti è più
              comoda e inizia il tuo percorso!
            </ProductsInfo>
          </div>
        </PhotoPage>
        <PhotoPage right img={sedutePersonal}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroH2 textAlign="right">SEDUTE DI PERSONAL</HeroH2>

            <ProductsInfo textAlign="right">
              Le sessioni di personal training dedicate sono un'esperienza di
              allenamento su misura, in cui sarai seguito esclusivamente da me.
              Avrai feedback personalizzati, una maggiore attenzione ai dettagli
              e potrai risolvere qualsiasi dubbio tu abbia sull'esecuzione della
              tua scheda. Le sessioni di personal training dedicate possono
              essere svolte ovunque tu preferisca, sia in una delle palestre in
              cui alleno che nella tua palestra di fiducia.
            </ProductsInfo>
          </div>
        </PhotoPage>
        <SentencePage noWholeWindow={true} id="successo">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProductsHeading>Storie di successo</ProductsHeading>
            Sono molto soddisfatto dei risultati che raggiungono i miei alievi.
            Sono qui per trasmettere agli altri la mia passione e per aiutarli a
            superarsi quotidianamente. Questi sono solo alcuni dei percorsi di
            cui mi ritengo fiero.
          </div>
        </SentencePage>
        <PhotoPage left={true} img={giuseppe}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroH2 textAlign="left">Il percorso in front di Giuseppe</HeroH2>
            <ProductsInfo textAlign="left">
              Giuseppe è un ragazzo che seguo tramite il coaching online ed il
              nostro è un percorso di cui vado particolarmente fiero, visto il
              peso corporeo e la distribuzione di quest'ultimo sicuramente
              svantaggiosa per un soggetto che allena skills. Come sempre il
              lavoro impostato è stato con ampio margine in propedeutiche come
              tuck, adv, onelegadv con loop band e ampio spazio a lavori
              dinamici, soprattutto i raises in one leg che sentiva
              particolarmente bene.
              {/* I miei corsi in presenza presso la palestra LiveFit a
              Grottaminarda e lo studio XDE ad Ariano Irpino. Sarò lì
              personalmente per seguirti durante le sessioni di allenamento. Sia
              che tu sia un principiante o un atleta esperto, i corsi in
              presenza si adattano al tuo livello. Scegli la sede che ti è più
              comoda e inizia il tuo percorso! */}
            </ProductsInfo>
          </div>
        </PhotoPage>
        <PhotoPage img={marco}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroH2 textAlign="right">
              Il percorso di Marco nel Muscle Up
            </HeroH2>
            <ProductsInfo textAlign="right">
              La collaborazione con Marco è iniziata a novembre 2022, con un
              livello basso livello di forza nella parte superiore del corpo
              provenendo dal calcio. Con il passare dei mesi abbiamo lavorato
              dapprima sull'apprendimento della trazione e poi sulle varie
              propedeutiche del muscle up. Il ragazzo ha risposto bene ed ha
              sicuramente una buona componente genetica dal suo lato, ma
              soprattutto tanta abnegazione nei confronti dell'allenamento in
              quanto oltre al muscle up alleniamo planche, front, back,
              verticale e zavorre.
            </ProductsInfo>
          </div>
        </PhotoPage>
        <PhotoPage left={true} img={giuseppe}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <HeroH2 textAlign="left">Il percorso di Marco nel Muscle Up</HeroH2>

            <ProductsInfo textAlign="left">
              Giuseppe è un ragazzo che seguo tramite il coaching online ed il
              nostro è un percorso di cui vado particolarmente fiero, visto il
              peso corporeo e la distribuzione di quest'ultimo sicuramente
              svantaggiosa per un soggetto che allena skills. Come sempre il
              lavoro impostato è stato con ampio margine in propedeutiche come
              tuck, adv, onelegadv con loop band e ampio spazio a lavori
              dinamici, soprattutto i raises in one leg che sentiva
              particolarmente bene.
            </ProductsInfo>
          </div>
        </PhotoPage>
        <SentencePage id="gallery"></SentencePage>
        <SentencePage id="diconoDiMe">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProductsHeading marginBottom={"1rem"}>
              Dicono di me
            </ProductsHeading>

            <Carousel
              showArrows={false}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
            >
              {aboutMe.map((x) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "5rem",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <img style={{ width: "60%", borderRadius: "2rem" }} src={x} />
                </div>
              ))}
            </Carousel>
          </div>
        </SentencePage>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
