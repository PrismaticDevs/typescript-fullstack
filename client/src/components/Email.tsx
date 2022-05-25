import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef<HTMLFormElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gf1y7ha",
        "template_i0765eo",
        // form.current,
        "Z8sh-4HD70jP-HY-0"
      )
      .then(
        (result) => {
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        // ref={form}
        onSubmit={(e) => sendEmail}
      >
        <input
          type="text"
          name="user_name"
          style={{ width: "60%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="user_email"
          value={email}
          style={{ width: "60%" }}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <textarea
          style={{ width: "60%", height: "10rem" }}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Email;
