import React from "react";

export const DisplayData = ({ Data }) => {
  const studentsTrueCount = Data.students.filter(
    (item) => item.student_status === true
  ).length;
  // console.log(studentsTrueCount,"studentsTrueCount");

  const Colors = {
    1: "#E9EFC0",
    2: "#B4E197",
    3: "#83BD75",
    4: "#4E944F",
  };
  if (studentsTrueCount === 0) {
    return "";
  }
  return (
    <div
      className="MeanCheckBox"
      style={{
        backgroundColor: Colors[studentsTrueCount],
        transition: "all 0.6s",
      }}
    >
      <div className="checkbox">
        <li htmlFor="techear">{Data.teacher_name}</li>
      </div>

      {Data.students?.map((item, index) =>
        item.student_status ? (
          <ul className="checkbox" key={index}>
            <li htmlFor="student1">{item.student_name}</li>
          </ul>
        ) : (
          ""
          )
          )}
    </div>
  );
};
