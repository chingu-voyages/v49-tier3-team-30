import { useEffect, useRef } from "react";
import "../Main/Main.css";
import "./RightSideMenu.css";
import { MdClose } from "react-icons/md";

export default function RightSideMenu({
  lessonData,
  showLessonData,
  setShowLessonData,
}) {
  let menuRef = useRef();
  //   const [open, setOpen] = useState(false);
  console.log("RightSideMenulessonData", lessonData);

  //functionality to close dropdown menu if click outside of it-------------
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowLessonData(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  //---------------------------------------------------------------------------

  return (
    <div
      className={`rightSideMenu ${showLessonData ? "active" : ""}`}
      
    >
      <div className="lessonContainer" ref={menuRef}>
        <div className="closeRightMenuContainer">
          <MdClose
            onClick={() => setShowLessonData(false)}
            className="closeRightMenuButton"
          />
        </div>
        <div className="lessonContent">
          <div className="lessonTitle">{lessonData?.name}</div>
          <div className="lessonDescription">{lessonData?.desc}</div>
          <div className="urlsContainer">{(lessonData?.urls || []).map((url, i) => (<a href={url} key={`lessonUrl=${i}`} target="_blank">{url} </a>))}</div>
        </div>
      </div>
    </div>
  );
}
