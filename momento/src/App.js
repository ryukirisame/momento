import "./App.css";
import MomentsList from "./components/MomentsList/MomentsList";
import { useEffect, useState } from "react";

import { nanoid } from "nanoid";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

import api from "./api/moments";

function App() {
  const [moments, setMoments] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Retrieve moments
  const retrieveMoments = async () => {
    const response = await api.get("/moments");
    return response.data;
  };

  useEffect(() => {
    const getAllMoments = async () => {
      const allMoments = await retrieveMoments();
      allMoments.reverse();
      if (allMoments) {
        setMoments(allMoments);
      }
    };

    getAllMoments();
  }, []);

  const addMoment = async (text, momentColor, textColor) => {
    const date = new Date();
    const newMoment = {
      text: text,
      date: date.toLocaleString("en-US", {
        dateStyle: "medium",
      }),
      id: nanoid(),
      momentColor: momentColor,
      textColor: textColor,
    };

    const response = await api.post("/moments", newMoment); //axios post call
    console.log(response);
    // response.data will contain the newMoment object

    setMoments([response.data, ...moments]);
  };

  const deleteMoment = async (id) => {
    await api.delete(`/moments/${id}`);

    const newMoments = moments.filter((moment) => moment.id !== id);
    setMoments(newMoments);
  };

  const editMoment = async (id, text, momentColor, textColor) => {
    const indexOfMomentToEdit = moments.findIndex((moment) => moment.id === id);
    const temp = [...moments];
    temp[indexOfMomentToEdit] = {
      text: text,
      date: moments[indexOfMomentToEdit].date,
      id: id,
      momentColor: momentColor,
      textColor: textColor,
    };

    await api.put(`/moments/${id}`, temp[indexOfMomentToEdit]);

    setMoments(temp);
  };

  return (
    <div className={`${darkMode && "dark-mode"} containers-container`}>
      <div className="container">
        <Header
          handleToggleDarkMode={setDarkMode}
          handleSearchMoment={setSearchText}
          darkMode={darkMode}
        />
        {/* <Search handleSearchMoment={setSearchText}></Search> */}
        <MomentsList
          handleDeleteMoment={deleteMoment}
          handleAddMoment={addMoment}
          handleEditMoment={editMoment}
          moments={moments.filter((moment) =>
            moment.text.toLowerCase().includes(searchText)
          )}
          darkMode={darkMode}
        >
          {" "}
        </MomentsList>
      </div>
    </div>
  );
}

export default App;
