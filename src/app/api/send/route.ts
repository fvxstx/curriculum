import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { assunto, name, surname, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "faut.btorres@gmail.com",
      subject: assunto,
      react: EmailTemplate({
        firstName: name,
        lastName: surname,
        email: email,
        message: message,
      }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao enviar o e-mail" }), {
      status: 500,
    });
  }
}
