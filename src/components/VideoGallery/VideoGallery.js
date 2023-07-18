import { useEffect, useRef, useState } from "react";
import front from "../../images/front.png";
import marcoPoster from "../../images/marco.png";
import antonio from "../../videos/storieDiSuccesso/antonio.mov";
import giuseppe from "../../videos/storieDiSuccesso/giuseppe.mp4";
import marco from "../../videos/storieDiSuccesso/marco.mp4";
import antonioC from "../../videos/storieDiSuccesso/antonio.png";
import giuseppeC from "../../videos/storieDiSuccesso/giuseppe.png";
import marcoC from "../../videos/storieDiSuccesso/marco.png";
import { HeroP, HeroVideo } from "../Hero/HeroElements";

const videos = [
  {
    video: marco,
    name: "Marco",
    main: "Il Muscle Up di Marco",
    cover: marcoC,
    desc: "La collaborazione con Marco è iniziata a novembre 2022, con un livello basso livello di forza nella parte superiore del corpo provenendo dal calcio. Con il passare dei mesi abbiamo lavorato dapprima sull'apprendimento della trazione e poi sulle varie propedeutiche del muscle up. Il ragazzo ha risposto bene ed ha sicuramente una buona componente genetica dal suo lato, ma soprattutto tanta abnegazione nei confronti dell'allenamento in quanto oltre al muscle up alleniamo planche, front, back, verticale e zavorre.",
  },
  {
    video: giuseppe,
    name: "Giuseppe",
    main: "Giuseppe in Front Lever",
    cover: giuseppeC,
    desc: "Giuseppe è un ragazzo che seguo tramite il coaching online ed il nostro è un percorso di cui vado particolarmente fiero, visto il peso corporeo e la distribuzione di quest'ultimo sicuramente svantaggiosa per un soggetto che allena skills. Come sempre il lavoro impostato è stato con ampio margine in propedeutiche come tuck, adv, onelegadv con loop band e ampio spazio a lavori dinamici, soprattutto i raises in one leg che sentiva particolarmente bene.",
  },
  {
    video: antonio,
    name: "Antonio",
    main: "Antonio: iniziare il Calisthenics dopo i 35 anni ",
    cover: antonioC,
    desc: "Antonio ha iniziato ad allenarsi con me all'età di 35 anni nel gennaio del 2022. Dopo aver praticato una disciplina che non gli dava soddisfazione, ha intrapreso il percorso nel Calisthenics. Grazie a tanta tenacia e costanza negli allenamenti, sempre tenendo come riferimento il lavoro sugli esercizi base, oltre ai sorprendenti miglioramenti dal punto di vista estetico con una condizione invidiabile dai più, ha appreso schemi motori più avanzati simbolo del Calisthenics come: Planche, Handstand, Piegamenti in verticale libera, Back lever, Muscle up, Human flag, Doppie a 65 kg di dip in allenamento e tanto altro ancora...",
  },
];
function VideoGallery() {
  const videoRefs = useRef([]);
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setVertical(false);
      } else {
        setVertical(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];

    if (video.paused) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="video-container">
      {videos.map((videoSrc, index) => (
        <div
          className="video-c"
          style={{
            width: !vertical ? "26vw" : "70vw",
          }}
          key={index + "2"}
        >
          <div className="video" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoSrc.video}
              muted
              poster={videoSrc.cover}
              onClick={() => handleVideoClick(index)}
            />
          </div>

          <HeroVideo>{videoSrc.main}</HeroVideo>
          <HeroP>{videoSrc.desc}</HeroP>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;
