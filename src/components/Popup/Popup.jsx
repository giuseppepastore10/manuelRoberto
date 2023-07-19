import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



export default function Popup(props) {
	return (<div
        style={{
          position: "fixed",
          bottom: "5vw",
          right: "5vw",
          width: "8vh",
          height: "8vh",
          borderRadius: "4vh",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          opacity: props.isScrolled ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 999,
          transform: props.isScrolled ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <a
          href={props.link}
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ fontSize: "4vh", marginTop: "0.3vh", color: "white" }}
          />
        </a>
      </div>)

}
