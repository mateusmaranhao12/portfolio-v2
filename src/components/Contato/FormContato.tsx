"use client";

import { useTheme } from "@/components/theme/theme";
import FormCard from "@/components/Contato/FormCard";
import InputText from "@/components/Contato/InputText";
import TextArea from "@/components/Contato/TextArea";
import { Button } from "../Common/Button";
import { translations, Lang } from "@/app/translate/tradutor";
import sendForm from "@/composables/formContato";
import { useToast } from "@/components/Common/Toast";

export default function FormContato({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const dark = isDark ?? false;
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;
  const { showSuccess, showError } = useToast();

  //Função para lidar com o envio do formulário
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as any;

    try {
      await sendForm({ nome: data.nome, sobrenome: data.sobrenome, mensagem: data.mensagem });
      showSuccess(t.toast_mensagem_sucesso);
      form.reset();
    } catch (err) {
      console.error(err);
      showError(t.toast_mensagem_erro);
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
