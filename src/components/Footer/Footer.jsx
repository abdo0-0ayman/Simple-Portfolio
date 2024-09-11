import { Component } from "react";
import style from "./Footer.module.css";

export default class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <footer className={style.Footer_div}>
          <div className={style.Col}>
            <h5 className={style.Head}>Contact Information</h5>
            <ul>
              <li className={style.text}>
                <strong>Email:</strong> abdoayman9@gmail.com
              </li>
              <li className={style.text}>
                <strong>Phone:</strong> 01097443391
              </li>
              <li className={style.text}>
                <strong>Address:</strong> Cairo, Egypt
              </li>
            </ul>
          </div>

          <div className={style.Col}>
            <h5 className={style.Head}>Accounts</h5>
            <ul>
              <li>
                <a className={style.text} href="https://www.facebook.com/profile.php?id=100040897850380">
                  Facebook
                </a>
              </li>
              <li>
                <a className={style.text} href="https://codeforces.com/profile/abdo0_0ayman">
                  CodeForces
                </a>
              </li>
              <li>
                <a className={style.text} href="https://github.com/abdo0-0ayman">
                  GitHub
                </a>
              </li>
              <li>
                <a className={style.text} href="https://www.linkedin.com/in/abdulrahman-ayman-6b4230262/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
