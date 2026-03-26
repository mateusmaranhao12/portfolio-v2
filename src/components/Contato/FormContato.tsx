"use client";

import { useTheme } from "@/components/theme/theme";
import FormCard from "@/components/Contato/FormCard";
import InputText from "@/components/Contato/InputText";
import TextArea from "@/components/Contato/TextArea";
import { Button } from "../Common/Button";

export default function FormContato() {
  const { isDark } = useTheme();
  const dark = isDark ?? false;

  return (
    <FormCard isDark={dark}>
      <form className="w-full flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText
            label="Nome"
            name="nome"
            placeholder="Digite seu nome"
            required
            isDark={dark}
          />
          <InputText
            label="Sobrenome"
            name="sobrenome"
            placeholder="Digite seu sobrenome"
            required
            isDark={dark}
          />
        </div>

        <TextArea
          label="Sua Mensagem"
          name="mensagem"
          placeholder="Escreva sua mensagem aqui..."
          rows={6}
          required
          isDark={dark}
        />

        <Button
          label="Enviar Mensagem"
          type="submit"
          variant={dark ? "default_dark" : "default"}
        />
      </form>
    </FormCard>
  );
}
