import { useCallback, useEffect, useState } from "react";
import { sections } from "src/constants";
import GeneralTopics from "../GeneralTopics";
import Contents from "../Contents";

import "./main.css";

function Main() {
  const minNavigationWidth = 350; // px
  const maxNavigationWidth = 500;

  const [navigationWidth, setNavigationWidth] = useState(minNavigationWidth);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = useCallback(() => setIsResizing(false), []);
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (
        !isResizing ||
        event.clientX <= minNavigationWidth ||
        event.clientX >= maxNavigationWidth
      )
        return;
      setNavigationWidth(event.clientX);
    },
    [isResizing]
  );

  useEffect(() => {
    // handle left navigation resize
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, handleMouseUp, handleMouseMove]);

  return (
    <div
      className="main-grid"
      style={{ gridTemplateColumns: `${navigationWidth}px 5px 1fr` }}
    >
      <div className="indices column">
        {sections.map((section) => (
          <GeneralTopics key={section} section={section} />
        ))}
      </div>
      <span className="resize-handler" onMouseDown={handleMouseDown} />
      <Contents />
    </div>
  );
}

export default Main;
