import React, { useState } from "react"
import axios from "axios"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <form
      className="contact-form"
      //placeholder for form submit TODO replace with netlify info
      onSubmit={e => {
        e.preventDefault()
        axios
          .post("/contact", {
            email: email,
            message: message,
          })
          .then(res => {
            console.log(res)
          })
      }}
    >
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
