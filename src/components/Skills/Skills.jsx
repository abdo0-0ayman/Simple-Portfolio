import { Component } from "react";
import style from "./Skills.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";

export default class Skills extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className={style.Skills_div}>
          <h2 className={style.Head}>My Skills</h2>
          <p className={style.text}>
            I specialize in C++, SQL, Java, and C#, with additional skills in
            backend development and communication.
          </p>
          <div className={style.List}>
            <ListGroup className={style.Skills_ListG}>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }} className={style.Skills_List_item}>
                C++
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={98} label={`${98}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }}className={style.Skills_List_item}>
                C#
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={85} label={`${85}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }}className={style.Skills_List_item}>
                SQL
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={90} label={`${90}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }}className={style.Skills_List_item}>
                Node js
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={85} label={`${85}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }}className={style.Skills_List_item}>
                Java 
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={80} label={`${80}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className={style.Skills_ListH}>
              <ListGroup.Item action variant="dark" style={{ width: "20%" }}className={style.Skills_List_item}>
                Data structure and Algorithms
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" style={{ width: "80%" }}>
                <ProgressBar variant="success" now={95} label={`${95}%`} style={{ height:"20px",fontSize:"12px", fontWeight:"bold" }}/>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
          </div>
        </div>
      </>
    );
  }
}
