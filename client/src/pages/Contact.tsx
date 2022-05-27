import { useEffect, useState } from "react";
import { FaGithub, FaEnvelope, FaSlack } from "react-icons/fa";
// import Email from "../components/Email";
const Contact = () => {
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const resizeWindow = () => {
    setWidth(window.innerWidth);
    width < 800 ? setMobile(true) : setMobile(false);
    console.log(width, mobile);
  };
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });
  return (
    <>
      <section className="page">
        <div className="title">Contact</div>
        {mobile ? (
          <article
            className="paragraph"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <section className="contact-card">
              <a
                href="mailto:matthewbrignola@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaEnvelope className="icon" style={{ fontSize: "3em" }} />
                <h3>matthewbrignola@gmail.com</h3>
              </a>
            </section>
            <section className="contact-card">
              <a
                href="http://github.com/prismaticdevs"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaGithub className="icon" style={{ fontSize: "3em" }} />
                <h3>github.com/PrismaticDevs</h3>
              </a>
            </section>
            <section className="contact-card">
              <a
                href="https://media-gvn6693.slack.com"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaSlack className="icon" style={{ fontSize: "3em" }} />
                <h3>send us a message on Slack</h3>
              </a>
            </section>
          </article>
        ) : (
          <article className="paragraph">
            <section className="contact-card">
              <a
                href="mailto:matthewbrignola@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaEnvelope className="icon" style={{ fontSize: "3em" }} />
                <h3>matthewbrignola@gmail.com</h3>
              </a>
            </section>
            <section className="contact-card">
              <a
                href="http://github.com/prismaticdevs"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaGithub className="icon" style={{ fontSize: "3em" }} />
                <h3>github.com/PrismaticDevs</h3>
              </a>
            </section>
            <section className="contact-card">
              <a
                href="https://media-gvn6693.slack.com"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign: "center" }}
              >
                <FaSlack className="icon" style={{ fontSize: "3em" }} />
                <h3>send us a message on Slack</h3>
              </a>
            </section>
          </article>
        )}
        <br />
        {/* <Email /> */}
      </section>
    </>
  );
};

export default Contact;
