import { useState } from "react";
import "../AddMoment/AddMoment.css";
import "./EditMoment.css";

const EditMoment = ({
  handleEditMoment,
  id,
  text,
  momentColor,
  onClose,
  textColor,
}) => {
  const [momentText, setMomentText] = useState(text);
  const [moment_color, setMomentColor] = useState(momentColor);
  const [text_color, setTextColor] = useState(textColor);
  const [isMomentColorTooltipOpen, setIsMomentColorTooltipOpen] =
    useState(false);
  const [isTextColorTooltipOpen, setIsTextColorTooltipOpen] = useState(false);

  const textChangeHandler = (event) => {
    setMomentText(event.target.value);
  };
  const momentColorChangeHandler = (event) => {
    setMomentColor(event.target.value);
    // console.log(event.target.value);
  };
  const textColorChangeHandler = (event) => {
    setTextColor(event.target.value);
  };

  const saveHandler = () => {
    if (momentText.trim().length > 0) {
      handleEditMoment(id, momentText, moment_color, text_color);
      onClose();
    }
  };

  return (
    <div
      className="moment new edit-moment"
      style={{ backgroundColor: moment_color }}
    >
      <textarea
        onChange={textChangeHandler}
        rows="6"
        cols="10"
        value={momentText}
        // dangerouslySetInnerHTML={{ __html: momentText }}

        style={{ backgroundColor: moment_color, color: text_color }}
      ></textarea>
      <div className="moment-footer">
        <div className="tools-container">
          <div className="moment-color-tool tool">
            <div
              className={isMomentColorTooltipOpen ? "tooltip" : "tooltip close"}
            >
              Moment Color
            </div>

            <input
              type="color"
              className="color-picker"
              value={momentColor}
              onChange={momentColorChangeHandler}
              onMouseOver={() => {
                setIsMomentColorTooltipOpen(true);
              }}
              onMouseOut={() => {
                setIsMomentColorTooltipOpen(false);
              }}
            />
          </div>
          <div className="text-color-tool tool">
            <div
              className={isTextColorTooltipOpen ? "tooltip" : "tooltip close"}
            >
              Text Color
            </div>
            <input
              type="color"
              className="color-picker"
              value={textColor}
              onChange={textColorChangeHandler}
              onMouseOver={() => {
                setIsTextColorTooltipOpen(true);
              }}
              onMouseOut={() => {
                setIsTextColorTooltipOpen(false);
              }}
            />
          </div>
        </div>

        <button className="save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditMoment;
