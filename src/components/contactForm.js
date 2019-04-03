import React, { useState } from "react"

handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state }),
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error))

  e.preventDefault()
}

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <form
      data-netlify="true"
      name="contact"
      className="contact-form"
      //placeholder for form submit TODO replace with netlify info
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
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
