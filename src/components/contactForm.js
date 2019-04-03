import React, { useState } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  function handleSubmit(e) {
    // axios.post("/").then((req, res) => {
    //   console.log(req)
    // })
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email: email, message: message }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>Your Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            console.log(email)
          }}
          required
        />
      </div>
      <div>
        <label>Your Message</label>
        <textarea
          name="message"
          value={message}
          onChange={e => {
            setMessage(e.target.value)
          }}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ContactForm
