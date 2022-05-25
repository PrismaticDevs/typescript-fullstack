import { FaGithub, FaEnvelope, FaSlack } from "react-icons/fa";
import Email from "../components/Email";
const Contact = () => {
  return (
    <>
      <section className="page">
        <div className="title">Contact</div>
        <article
          className="paragraph"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <section className="contact-card">
            <FaEnvelope style={{ fontSize: "3em" }} />
            <h3>
              <a href="mailto:matthewbrignola@gmail.com">
                matthewbrignola@gmail.com
              </a>
            </h3>
          </section>
          <section className="contact-card">
            <FaGithub style={{ fontSize: "3em" }} />
            <h3>
              <a
                href="http://github.com/prismaticdevs"
                rel="noreferrer"
                target="_blank"
              >
                github.com/PrismaticDevs
              </a>
            </h3>
          </section>
          <section className="contact-card">
            <FaSlack style={{ fontSize: "3em" }} />
            <h3>
              <a
                href="https://media-gvn6693.slack.com"
                rel="noreferrer"
                target="_blank"
              >
                send a message on Slack
              </a>
            </h3>
          </section>
        </article>
        <br />
        <Email />
      </section>
    </>
  );
};

export default Contact;
