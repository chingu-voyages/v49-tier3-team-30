import { useEffect, useRef, useState } from "react";
import "../Main/Main.css";
import "./RightSideMenu.css";
import { MdClose } from "react-icons/md";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL;

export default function RightSideMenu({
  lessonData,
  setLessonData,
  authState,
  setAuthState,
}) {
  const [completed, setCompleted] = useState(lessonData.isCompleted);

  let menuRef = useRef();
  const handleLessonComplition = async (id) => {
    try {
      axios
        .put(`${serverUrl}/lesson/checkbox/${id}`, { isCompleted: !completed })
        .then((response) => {
          console.log("response");
        });
      setCompleted(!completed);
      if (!completed) {
        setAuthState((prev) => ({
          ...prev,
          completedLessons: [...authState.completedLessons, id],
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  //functionality to close dropdown menu if click outside of it-------------
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setLessonData(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  //---------------------------------------------------------------------------

  return (
    <div className="rightSideMenu">
      <div className="lessonContainer" ref={menuRef}>
        <div className="closeRightMenuContainer">
          <MdClose
            onClick={() => setLessonData(null)}
            className="closeRightMenuButton"
          />
        </div>
        <div className="lessonContent">
          <div className="lessonTitle">{lessonData?.name}</div>
          <div className="lessonDescription">{lessonData?.desc}</div>
          <div className="urlsContainer">
            {(lessonData?.urls || []).map((url, i) => (
              <a href={url} key={`lessonUrl=${i}`} target="_blank">
                {url}
              </a>
            ))}
          </div>
        </div>
        {authState.status && (
          <label className="container">
            lesson completed
            <input
              type="checkbox"
              checked={completed}
              onChange={() => handleLessonComplition(lessonData?._id)}
            ></input>
            <span className="checkmark"></span>
          </label>
        )}
      </div>
    </div>
  );
}
