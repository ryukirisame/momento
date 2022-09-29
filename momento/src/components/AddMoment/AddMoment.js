import { useState } from "react";

import "./AddMoment.css";

const AddMoment = (props) => {
  const [momentText, setMomentText] = useState("");
  const [momentColor, setMomentColor] = useState("#1abc9c");
  const [textColor, setTextColor] = useState("#2f3640");

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
      props.handleAddMoment(momentText, momentColor, textColor);
      setMomentText("");
      setMomentColor("#1abc9c");
      setTextColor("#2f3640");
    }
  };

  return (
    <div className="moment new" style={{ backgroundColor: momentColor }}>
      <textarea
        onChange={textChangeHandler}
        rows="6"
        cols="10"
        value={momentText}
        // dangerouslySetInnerHTML={{ __html: momentText }}
        placeholder="Record your moment..."
        style={{
          backgroundColor: momentColor,
          color: textColor,
        }}
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

          {/* <div className="format-bold">
            <FormatBoldIcon
              style={{ color: grey[900], fontSize: "24px" }}
            ></FormatBoldIcon>
          </div> */}
        </div>

        <button className="save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddMoment;
