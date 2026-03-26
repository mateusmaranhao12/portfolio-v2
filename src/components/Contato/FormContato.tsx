"use client";

import { useTheme } from "@/components/theme/theme";
import FormCard from "@/components/Contato/FormCard";
import InputText from "@/components/Contato/InputText";
import TextArea from "@/components/Contato/TextArea";
import { Button } from "../Common/Button";
import { translations, Lang } from "@/app/translate/tradutor";

export default function FormContato({ lang }: { lang?: Lang }) {
  const { isDark } = useTheme();
  const dark = isDark ?? false;
  const currentLang = lang ?? "pt";
  const t = translations[currentLang as Lang] as any;

  return (
    <FormCard isDark={dark}>
      <form className="w-full flex flex-col gap-4">
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
          variant={dark ? "default_dark" : "default"}
        />
      </form>
    </FormCard>
  );
}
