"use client";

import { useTheme } from "@/components/theme/theme";
import FormCard from "@/components/Contato/FormCard";
import InputText from "@/components/Contato/InputText";
import TextArea from "@/components/Contato/TextArea";
import { Button } from "../Common/Button";
import emailjs from "@emailjs/browser";
import { translations, Lang } from "@/app/translate/tradutor";

export default function FormContato({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const dark = isDark ?? false;
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  // Envio do formulário (usa EmailJS)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data (pre-send):", data);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nome: data.nome,
          sobrenome: data.sobrenome,
          mensagem: data.mensagem,
        },
        publicKey,
      );

      console.log("Email enviado com sucesso (mock)");
      form.reset();
    } catch (err) {
      console.error("Erro ao enviar email (mock):", err);
      console.log(
        "serviceId:",
        serviceId,
        "templateId:",
        templateId,
        "publicKey:",
        publicKey,
      );
    }
  }

  return (
    <FormCard isDark={dark}>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText
            label={t.form_contato_nome}
            name="nome"
            placeholder={t.form_placeholder_nome}
            required
            isDark={dark}
          />
          <InputText
            label={t.form_contato_sobrenome}
            name="sobrenome"
            placeholder={t.form_placeholder_sobrenome}
            required
            isDark={dark}
          />
        </div>

        <TextArea
          label={t.form_contato_mensagem}
          name="mensagem"
          placeholder={t.form_placeholder_mensagem}
          rows={6}
          required
          isDark={dark}
        />

        <Button
          label={t.form_contato_enviar}
          type="submit"
          variant="default"
          isDark={dark}
        />
      </form>
    </FormCard>
  );
}
