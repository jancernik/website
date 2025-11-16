import { type FormEvent, useState } from "react"

import Button from "./Button/Button"
import ContactFormStatus, { type FormStatus } from "./ContactFormStatus"
import StringInput from "./StringInput"
import TextArea from "./TextArea"

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const payload = { email, message, name }
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()

    try {
      setFormStatus("loading")
      const response = await fetch("https://submit-form.com/4U2FgJSU", {
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      setFormStatus(response.ok ? "success" : "error")
    } catch {
      setFormStatus("error")
    } finally {
      setName("")
      setEmail("")
      setMessage("")
    }
  }

  const showFields = formStatus === "idle" || formStatus === "loading"

  return (
    <form className="contact-form flex h-80 w-full max-w-lg flex-col gap-4" onSubmit={handleSubmit}>
      {showFields && (
        <>
          <StringInput
            autoComplete="name"
            disabled={formStatus === "loading"}
            name="name"
            onChange={setName}
            placeholder="Name"
            required
            type="text"
            value={name}
          />
          <StringInput
            autoComplete="email"
            disabled={formStatus === "loading"}
            name="email"
            onChange={setEmail}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
          <TextArea
            disabled={formStatus === "loading"}
            name="message"
            onChange={setMessage}
            placeholder="Message"
            required
            rows={6}
            value={message}
          />
          <Button
            className="w-full"
            disabled={formStatus === "loading"}
            type="submit"
            variant="primary"
          >
            {formStatus === "loading" ? "Sending…" : "Send Message"}
          </Button>
        </>
      )}

      <ContactFormStatus status={formStatus} />
    </form>
  )
}

export default ContactForm
