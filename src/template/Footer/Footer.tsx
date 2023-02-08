import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footerLeft">© 2023 Viblo. All rights reserved.</div>
      <div className="footerRight">
        <ul>
          <li>
            <Link to="/" target="_blank">
              Về chúng tôi
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              Phản hồi
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              Giúp đỡ
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              RSS
            </Link>
          </li>
          <li>
            <Link to="/" target="_blank">
              Điều khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
