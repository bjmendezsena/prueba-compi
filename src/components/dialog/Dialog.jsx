import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dialog } from "./Dialog.module.css";

export default function Dialog({ message, link }) {

  return (
    <>
      <section className={dialog}>
        <h3>{message}</h3>
        {link ? (
          <Link to={link}>
            <p>
              <FaArrowLeft />
            </p>
          </Link>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
