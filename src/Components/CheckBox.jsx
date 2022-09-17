import React from "react";

export const CheckBox = ({ Data, refersh, setrefersh }) => {
  const handleCheckBoxStatus = (nums) => {
    if (nums === 0 && Data.teacher_status === false) {
      Data.teacher_status = true;
      Data.students[0].student_status = true;
      Data.students[1].student_status = true;
      Data.students[2].student_status = true;
      Data.students[3].student_status = true;
    } else if (nums === 0 && Data.teacher_status === true) {
      Data.teacher_status = false;
      Data.students[0].student_status = false;
      Data.students[1].student_status = false;
      Data.students[2].student_status = false;
      Data.students[3].student_status = false;
    } else if (nums !== 0) {
      Data.students[nums - 1].student_status =
        !Data.students[nums - 1].student_status;

      if (
        Data.students[0].student_status === true &&
        Data.students[1].student_status === true &&
        Data.students[2].student_status === true &&
        Data.students[3].student_status === true
      ) {
        Data.teacher_status = true;
      } else {
        Data.teacher_status = false;
      }
    }

    setrefersh(!refersh);
  };
  return (
    <div className="MeanCheckBox">
      <div className="checkbox">
        <input
          type="checkbox"
          name="techear"
          id="techear"
          className="techearCheckBox"
          checked={Data.teacher_status}
          onClick={() => {
            handleCheckBoxStatus(0);
          }}
        />
        <label>{Data.teacher_name}</label>
      </div>

      {Data.students?.map((item, index) => (
        <div className="checkbox" key={index}>
          <input
            type="checkbox"
            name="student"
            id="student1"
            className="studentCheckBox"
            checked={item.student_status}
            onClick={() => handleCheckBoxStatus(index + 1)}
          />
          <label>{item.student_name}</label>
        </div>
      ))}
    </div>
  );
};
