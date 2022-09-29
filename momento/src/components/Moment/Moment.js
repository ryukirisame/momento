import DeleteIcon from "@material-ui/icons/Delete";
import { indigo } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import "./Moment.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Moment = ({
  id,
  text,
  date,
  handleDeleteMoment,
  momentColor,
  handleEditMoment,
  textColor,
  darkMode,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const onModalClickHandler = () => {
    if (isMoreMenuOpen) {
      setIsMoreMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="moment"
        onClick={onModalClickHandler}
        style={{
          backgroundColor: darkMode ? "#424242" : "#f5f6fa",
        }}
      >
        {/* <EditIcon className="edit-icon" /> */}

        <div
          className="moment-header"
          style={{
            backgroundColor: darkMode ? "#424242" : "#f5f6fa",
          }}
        >
          <small
            className="moment-date"
            style={{ color: darkMode ? "#f5f6fa" : "#212121" }}
          >
            {date}
          </small>
          <div className="moment-menu-container">
            {/* menu-icon */}
            <div
              className={isMoreMenuOpen ? "moment-menu" : "moment-menu close"}
            >
              <div
                className="moment-menu-option"
                onClick={() => setIsModalOpen(true)}
              >
                <EditIcon
                  className="edit-icon"
                  style={{
                    color: "black",
                    fontSize: "18px",
                  }}
                ></EditIcon>
                <small>Edit</small>
              </div>
              <div
                className="moment-menu-option"
                onClick={() => {
                  handleDeleteMoment(id);
                }}
              >
                <DeleteIcon
                  className="delete-icon"
                  style={{ color: "black", fontSize: "18px" }}
                />
                <small>Delete</small>
              </div>
            </div>
            <MoreHorizIcon
              className="menu-icon"
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              style={{ color: darkMode ? "#f5f6fa" : "#212121" }}
            />
          </div>
        </div>

        <div
          className="moment-text-container"
          style={{ backgroundColor: momentColor }}
        >
          <p className="moment-text" style={{ color: textColor }}>
            {text}
          </p>
        </div>

        <Modal
          handleEditMoment={handleEditMoment}
          id={id}
          text={text}
          momentColor={momentColor}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          textColor={textColor}
        ></Modal>
      </div>
    </>
  );
};
export default Moment;
