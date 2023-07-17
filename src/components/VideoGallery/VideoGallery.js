import { useRef } from "react";
import antonio from "../../videos/storieDiSuccesso/antonio.mp4";
import giuseppe from "../../videos/storieDiSuccesso/giuseppe.mp4";
import marco from "../../videos/storieDiSuccesso/marco.mp4";
import { HeroVideo } from "../Hero/HeroElements";
import { ProductsInfoVideo } from "../Products/ProductsElements";
import front from "../../images/front.png";
import marcoPoster from "../../images/marco.png";

const videos = [
  {
    video: marco,
    name: "Marco",
    main: "Il Muscle Up di Marco",
    cover: marcoPoster,
    desc: "Giuseppe è un ragazzo che seguo tramite il coaching online ed il nostro è un percorso di cui vado particolarmente fiero, visto il peso corporeo e la distribuzione di quest'ultimo sicuramente svantaggiosa per un soggetto che allena skills. Come sempre il lavoro impostato è stato con ampio margine in propedeutiche come tuck, adv, onelegadv con loop band e ampio spazio a lavori dinamici, soprattutto i raises in one leg che sentiva particolarmente bene.",
  },
  {
    video: giuseppe,
    name: "Giuseppe",
    main: "Giuseppe in Front Lever",
    cover: front,
    desc: "Giuseppe è un ragazzo che seguo tramite il coaching online ed il nostro è un percorso di cui vado particolarmente fiero, visto il peso corporeo e la distribuzione di quest'ultimo sicuramente svantaggiosa per un soggetto che allena skills. Come sempre il lavoro impostato è stato con ampio margine in propedeutiche come tuck, adv, onelegadv con loop band e ampio spazio a lavori dinamici, soprattutto i raises in one leg che sentiva particolarmente bene.",
  },
  {
    video: antonio,
    name: "Antonio",
    main: "Antonio e il Calisthenics dopo i 35 anni ",
    cover: front,
    desc: "Giuseppe è un ragazzo che seguo tramite il coaching online ed il nostro è un percorso di cui vado particolarmente fiero, visto il peso corporeo e la distribuzione di quest'ultimo sicuramente svantaggiosa per un soggetto che allena skills. Come sempre il lavoro impostato è stato con ampio margine in propedeutiche come tuck, adv, onelegadv con loop band e ampio spazio a lavori dinamici, soprattutto i raises in one leg che sentiva particolarmente bene.",
  },
];
function VideoGallery() {
  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];

    // videoRefs.current.map((x, i) => {
    //   if (i != index) {
    //     x.classList.remove("active");
    //     videoRefs.current[i].pause();
    //     videoRefs.current[i].currentTime = 0;
    //   }
    // });
    // video.classList.toggle("active");

    if (video.paused) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="video-main-container">
      <div style={{ width: "100%" }} className="video-container">
        {videos.map((videoSrc, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
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
            <ProductsInfoVideo>{videoSrc.desc}</ProductsInfoVideo>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoGallery;
