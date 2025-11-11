export type FormStatus = "idle" | "loading" | "success" | "error";

type Props = { status: FormStatus };

export default function ContactFormStatus({ status }: Props) {
  switch (status) {
    case "idle":
      return null;
    case "loading":
      return null;
    case "success":
      return (
        <>
          <p className="text-center">Message sent!</p>
          <p className="text-center">
            I'll get back to you as soon as possible
          </p>
        </>
      );
    case "error":
      return (
        <>
          <p className="text-center">Sorry, there was an error!</p>
          <p className="text-center">Ty emailing me instead.</p>
          <p className="text-center">jancernik12@gmail.com</p>
        </>
      );
    default:
      return null;
  }
}
