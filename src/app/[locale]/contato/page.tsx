"use client";
import PageScaffold from "@/components/PageScaffold";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

type ContactFormData = {
  firstName: string;
  lastName?: string;
  email: string;
  subject?: string;
  message: string;
};

export default function ContatoPage() {
  const textLang = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactSchema = z.object({
    firstName: z.string().min(1, { message: textLang("firstNameRequired") }),
    lastName: z.string().optional(),
    email: z
      .string()
      .min(1, { message: textLang("emailRequired") })
      .email({ message: textLang("emailInvalid") }),
    subject: z.string().optional(),
    message: z.string().min(1, { message: textLang("messageRequired") }),
  });
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
          assunto: data.subject || textLang("subjectFallback"),
          name: data.firstName,
          surname: data.lastName || "",
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error(textLang("sendRequestError"));
      }

      toast.success(textLang("sendSuccess"));
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      toast.error(textLang("sendError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageScaffold>
      <section className="grid w-full grid-cols-1 gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(66,75,84,0.12)] backdrop-blur-sm md:grid-cols-2 md:gap-10 md:p-10">
        <div className="animate-fade-right animate-duration-[1400ms]">
          <h2 className="mt-2 inline-block w-fit text-3xl font-bold text-[#1f2d3d] md:text-5xl">
            {textLang("title")}
          </h2>
          <p className="mt-2 text-lg text-[#425264]">{textLang("subtitle")}</p>

          <div className="mt-8 space-y-4 rounded-2xl border border-[#93a8ac]/30 bg-[#f7fbff] p-5 text-[#334155]">
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold">{textLang("phone")}</p>
              <p>+55 (71) 99974-6649</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold">{textLang("emailLabel")}</p>
              <p>faut.btorres@gmail.com</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#e2b4bd]/35 bg-[#fff6fa] p-4 text-sm text-[#4f6173]">
            {textLang("availability")}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 rounded-3xl border border-[#93a8ac]/30 bg-white/75 p-5 animate-fade-left animate-duration-[1400ms] md:p-7"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block font-semibold text-[#334155]"
              >
                {textLang("name")}
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="mt-1 w-full rounded-xl border border-[#b7c6d4] bg-white p-2.5 focus:outline-none"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block font-semibold text-[#334155]"
              >
                {textLang("surname")}
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="mt-1 w-full rounded-xl border border-[#b7c6d4] bg-white p-2.5 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-[#334155]"
              >
                {textLang("emailRequiredLabel")}
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="mt-1 w-full rounded-xl border border-[#b7c6d4] bg-white p-2.5 focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-semibold text-[#334155]"
              >
                {textLang("subject")}
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                className="mt-1 w-full rounded-xl border border-[#b7c6d4] bg-white p-2.5 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-[#334155]"
            >
              {textLang("message")}
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="mt-1 w-full rounded-xl border border-[#b7c6d4] bg-white p-2.5 focus:outline-none"
              rows={5}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="min-w-36 rounded-2xl border border-[#424b54]/20 bg-gradient-to-r from-[#ffd89f] to-[#ffb88f] px-6 py-3 text-lg font-bold text-[#1f2d3d] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? textLang("sending") : textLang("send")}
            </button>
          </div>
        </form>
      </section>
    </PageScaffold>
  );
}
