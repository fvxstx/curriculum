import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail({
  assunto,
  name,
  surname,
  email,
  message,
}: {
  assunto: string;
  name: string;
  surname: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "faut.btorres@gmail.com", //
      subject: assunto,
      react: EmailTemplate({
        firstName: name,
        lastName: surname,
        email: email,
        message: message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
