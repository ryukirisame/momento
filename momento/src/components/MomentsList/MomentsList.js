import Moment from "../Moment/Moment";
import AddMoment from "../AddMoment/AddMoment";
import "./MomentsList.css";

const MomentsList = ({
  moments,
  handleAddMoment,
  handleDeleteMoment,
  handleEditMoment,
  darkMode,
}) => {
  return (
    <div className="moments-list">
      <AddMoment handleAddMoment={handleAddMoment} />

      {moments.map((moment) => (
        <Moment
          handleDeleteMoment={handleDeleteMoment}
          handleEditMoment={handleEditMoment}
          key={moment.id}
          id={moment.id}
          text={moment.text}
          date={moment.date}
          momentColor={moment.momentColor}
          textColor={moment.textColor}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default MomentsList;
