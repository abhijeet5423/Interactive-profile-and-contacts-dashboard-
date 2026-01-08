import { useState } from "react";

const Toggle = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} {title}
      </button>

      {isVisible && <div style={{ marginTop: "1rem" }}>{children}</div>}
    </div>
  );
};

export default Toggle;
