import { Rate } from "antd";
import React from "react";

function FilterRate({ rate, setRate, isRating, rating }) {
  let desc = ["terrible", "bad", "good", "excellent", "awsome"];
  return (
    <div style={{ marginLeft: "600px", marginBottom: "100px" }}>
      {isRating ? (
        <div>
          {" "}
          <Rate disabled value={rating} />
        </div>
      ) : (
        <div>
          <Rate onChange={(e) => setRate(e)} tooltips={desc} value={rate} />{" "}
        </div>
      )}
    </div>
  );
}

export default FilterRate;
