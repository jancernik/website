import { useState, type FormEvent } from "react"
import StringInput from "./StringInput"
import TextArea from "./TextArea"
import Button from "./Button/Button"
import ContactFormStatus, { type FormStatus } from "./ContactFormStatus"

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const payload = { name, email, message }
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()

    try {
      setFormStatus("loading")
      const response = await fetch("https://submit-form.com/4U2FgJSU", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
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
    <form
      className="contact-form flex flex-col max-w-md gap-6 items-center"
      onSubmit={handleSubmit}
    >
      {showFields && (
        <>
          <h4>Message me!</h4>

          <StringInput
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={setName}
            disabled={formStatus === "loading"}
          />
          <StringInput
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={setEmail}
            disabled={formStatus === "loading"}
          />
          <TextArea
            placeholder="Message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={setMessage}
            disabled={formStatus === "loading"}
          />
          <Button type="submit" disabled={formStatus === "loading"}>
            {formStatus === "loading" ? "Sending…" : "Send"}
          </Button>
        </>
      )}

      <ContactFormStatus status={formStatus} />
    </form>
  )
}

export default ContactForm
