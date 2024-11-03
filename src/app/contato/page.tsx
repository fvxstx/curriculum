"use client";
import Header from "@/components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, { message: "Nome é obrigatório" }),
  lastName: z.string().optional(),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .min(1, { message: "Email é obrigatório" }),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assunto: data.subject || "Sem Assunto",
          name: data.firstName,
          surname: data.lastName || "",
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o email");
      }

      toast.success("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      toast.error(
        "Ocorreu um erro ao enviar o email. Tente novamente mais tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <main className="w-full flex flex-col md:flex-row justify-around items-start md:mt-20 px-6 md:px-24 lg:px-32 max-w-[1400px]">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold w-fit mt-4 inline-block md:mt-8">
            Contato
          </h2>
          <p className="text-lg mt-2">Vamos conversar!</p>
          <div className="flex mt-6 flex-col items-start ">
            <p className="text-lg font-bold">Telefone</p>
            <p>(71) 99974-6649</p>
          </div>
          <div className="flex mt-3 flex-col items-start ">
            <p className="text-lg font-bold">Email</p>
            <p>faut.btorres@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-3 justify-start md:justify-center md:p-4 mt-10"
        >
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="firstName" className="block font-semibold">
                Nome
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="lastName" className="block font-semibold">
                Sobrenome
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="col-span-2">
              <label htmlFor="email" className="block font-semibold">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label htmlFor="subject" className="block font-semibold">
                Assunto
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="col-span-2">
              <label htmlFor="message" className="block font-semibold">
                Mensagem
              </label>
              <textarea
                id="message"
                {...register("message")}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none"
                rows={4}
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="col-span-2 flex justify-center md:justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-yellow-500 text-lg md:text-2xl text-black font-bold"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
