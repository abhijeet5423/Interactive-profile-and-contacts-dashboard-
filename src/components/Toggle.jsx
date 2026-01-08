import { useState } from "react";
import "./../styles/Toggle.css";

const Toggle = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="toggle">
      <button
        className="toggle-btn"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"} {title}
      </button>

      {isVisible && (
        <div className="toggle-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Toggle;
