import React, { useContext } from "react";
import { Context } from "../../Context/Context";

export default function OurServisesDesc({ item }) {
  const { dark, setDark } = useContext(Context);

  return (
    <div className="servisesdesc">
      <div className="title-desc-servises">
        <h3 style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>
          О преподавателе
        </h3>
        <p style={{ color: dark !== true ? "#593E69" : "#F9F9F9" }}>{item}</p>
      </div>
    </div>
  );
}
