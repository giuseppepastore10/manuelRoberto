import { useEffect, useState } from "react";

import {
  SliderDescription,
  SliderMenuProfileWrapper,
  SliderName,
  Wrapper,
  SliderMenuContainer,
} from "./SliderMenu.elements";

const allProfiles = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Giuseppe P",
    title: "office manager",
    quote:
      "Beh cosa dire, sono stra contento dei risultati che portiamo avanti nonostante il lavoro pesante che faccio... sei riuscito a strutturarmi delle schede che riuscissero a rispettare il mio infortunio ed il lavoro. Abbiamo curato, e stiamo curando, la tecnica tantissimo e mii hai fatto migliorare cose che prima facevo male. Il tutto senza accorgermi che mi hai fatto migliorare i massimali rispetto a prima dell'infortunio e curando la tecnica... sono molto contento anche del rapporto che abbiamo instaurato... continuiamo cosi coach!",
  },
  {
    id: 5,
    image: "https://nedas.dev/static/images/profile2.jpg",
    name: "Giulio F",
    title: "funny guy",
    quote:
      "Ormai sono 5 mesi che abbiamo iniziato questo percorso e quando ti scrissi ero semplicemente pieno di determinazione ma non sarebbe bastata per farmi raggiungere certi risultati senza una programmazione complessa e approfondita. Ad oggi, anche se sono solo all'inizio, sono felice degli obiettivi raggiunti grazie alla disciplina e perseveranza e soprattutto a te, alla passione che metti in ciò che fai. ",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "Margo D",
    title: "regular guy",
    quote:
      "Ho finito la prima programmazione, è incredibile, quando l'avevo vista la prima volta mi ero spaventato. Ho ribaltato tutti i miei preconcetti sul calisthenics. E questo è merito tuo e della tua meticolosità. In poco più di un mese sento di aver sviluppato forza, equilibrio e maggiore consapevolezza del mio corpo nello spazio. Per non parlare dei miglioramenti estetici. Non posso che ringraziarti della passione e della cura che dedichi ogni volta.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "Antonio S",
    title: "product designer",
    quote:
      "Senza tralasciare il lato psicologico, mi dai supporto quando penso che sia difficile l'allenamento e quando sono svogliato. Ogni inizio mese leggo la scheda e penso di non farcela, invece me le fai chiudere sempre tutte rispettando e migliorando quello che c'è scritto.",
  },
];

function SliderMenu(props) {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobile(isMobile);
    };

    handleResize(); // Controlla le dimensioni iniziali

    window.addEventListener("resize", handleResize); // Aggiungi un listener per rilevare i cambiamenti di dimensione

    return () => {
      window.removeEventListener("resize", handleResize); // Rimuovi il listener quando il componente viene smontato
    };
  }, []);

  useEffect(() => {
    setProfiles(allProfiles);
  }, []);

  const handleClick = (action) => {
    const len = profiles.length;

    if (action === "previous") {
      if (currentIndex - 1 === -1) {
        setCurrentIndex(len - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }

    if (action === "future") {
      if (currentIndex + 1 === len) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      handleClick("future");
    }, 4000);

    return () => clearInterval(myInterval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      {/* <SliderMenuLeftSlider onClick={() => handleClick("previous")} /> */}
      <SliderMenuContainer>
        {profiles.map((person, index) => {
          let personP = profiles[index + 1];
          if (!person) return null;
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <SliderMenuProfileWrapper
                className={(() => {
                  const len = profiles.length;

                  if (currentIndex === 0 && index === len - 1) {
                    return "previous";
                  } else if (currentIndex === len - 1 && index === 0) {
                    return "future";
                  } else if (index === currentIndex) {
                    return "current";
                  } else if (currentIndex > index) {
                    return "previous";
                  } else {
                    return "future";
                  }
                })()}
                key={person.id}
              >
                <SliderName>{person.name}</SliderName>
                <SliderDescription>{person.quote}</SliderDescription>
              </SliderMenuProfileWrapper>
            </div>
          );
        })}
      </SliderMenuContainer>

      {/* <SliderMenuRightSlider
          style={{ border: "1px solid red" }}
          onClick={() => handleClick("future")}
        /> */}
    </>
  );
}

export default SliderMenu;
