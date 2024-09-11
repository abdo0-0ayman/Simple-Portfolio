import { Component } from "react";
import style from "./About.module.css";
export default class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className={style.About_div}>
          <div className={style.About_con}>
            <h1 className={style.About_Head}>About Me</h1>
            <h3 className={style.About_text}>
              I am currently a 4th-year Computer Science student at Assiut
              University with a GPA of 3.73 out of 4.0. I have participated in
              the Upper Egypt Collegiate Programming Contest (ECPC) and have
              been ranked 10th out of 400+ teams in 2024. I have been actively
              involved as a mentor with the ICPC Assiut Community, where I guide
              students in C++ and problem-solving techniques.
            </h3>
          </div>
        </div>
      </>
    );
  }
}
