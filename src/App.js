import { useState } from "react";
import "./App.css";
import { CheckBox } from "./Components/CheckBox";
import { DisplayData } from "./Components/DisplayData";
const Data = [
  {
    teacher_name: "Pratik",
    teacher_status: false,
    students: [
      {
        student_name: "Rohaan",
        student_status: false,
      },
      {
        student_name: "Amit",
        student_status: false,
      },
      {
        student_name: "Amol",
        student_status: false,
      },
      {
        student_name: "Rushab",
        student_status: false,
      },
    ],
  },
  {
    teacher_name: "Yogesh",
    teacher_status: false,
    students: [
      {
        student_name: "James",
        student_status: false,
      },
      {
        student_name: "Robert",
        student_status: false,
      },
      {
        student_name: "John",
        student_status: false,
      },
      {
        student_name: "Michael",
        student_status: false,
      },
    ],
  },
  {
    teacher_name: "Vishal",
    teacher_status: false,
    students: [
      {
        student_name: "David",
        student_status: false,
      },
      {
        student_name: "William",
        student_status: false,
      },
      {
        student_name: "Richard",
        student_status: false,
      },
      {
        student_name: "Joseph",
        student_status: false,
      },
    ],
  },
  {
    teacher_name: "Shivam",
    teacher_status: false,
    students: [
      {
        student_name: "Thomas",
        student_status: false,
      },
      {
        student_name: "Charles",
        student_status: false,
      },
      {
        student_name: "Christopher",
        student_status: false,
      },
      {
        student_name: "Daniel",
        student_status: false,
      },
    ],
  },
  {
    teacher_name: "Vivek",
    teacher_status: false,
    students: [
      {
        student_name: "Matthew",
        student_status: false,
      },
      {
        student_name: "Anthony",
        student_status: false,
      },
      {
        student_name: "Mark",
        student_status: false,
      },
      {
        student_name: "Donald",
        student_status: false,
      },
    ],
  },
];

function App() {
  const [refersh, setrefersh] = useState(false);

  return (
    <>
        <div className="text">Check Box</div>
      <div className="parentDiv">
        <CheckBox Data={Data[0]} refersh={refersh} setrefersh={setrefersh} />
        <CheckBox Data={Data[1]} refersh={refersh} setrefersh={setrefersh} />
        <CheckBox Data={Data[2]} refersh={refersh} setrefersh={setrefersh} />
        <CheckBox Data={Data[3]} refersh={refersh} setrefersh={setrefersh} />
        <CheckBox Data={Data[4]} refersh={refersh} setrefersh={setrefersh} />
        </div>

        <div className="text">result</div>     
        <div className="parentDiv">
        <DisplayData Data={Data[0]} />
        <DisplayData Data={Data[1]} />
        <DisplayData Data={Data[2]} />
        <DisplayData Data={Data[3]} />
        <DisplayData Data={Data[4]} />
      </div>
    </>
  );
}

export default App;
