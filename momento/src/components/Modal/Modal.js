import "./Modal.css";
import ReactDOM from "react-dom";
import EditMoment from "../EditMoment/EditMoment";
import CloseIcon from "@material-ui/icons/Close";

const Modal = ({
  open,
  onClose,
  handleEditMoment,
  id,
  text,
  momentColor,
  textColor,
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="overlay">
      <CloseIcon
        onClick={onClose}
        style={{
          fontSize: "36px",
          margin: "12px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Close
      </CloseIcon>
      <div className="modal-content">
        <EditMoment
          handleEditMoment={handleEditMoment}
          id={id}
          text={text}
          momentColor={momentColor}
          onClose={onClose}
          textColor={textColor}
        ></EditMoment>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
