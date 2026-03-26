import emailjs from "@emailjs/browser";

type SendPayload = {
  nome?: string;
  sobrenome?: string;
  mensagem?: string;
};

export async function sendForm(payload: SendPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS environment variables");
  }

  try {
    // initialize with public key (idempotent)
    try {
      emailjs.init(publicKey);
    } catch (err) {
      // ignore init errors
    }

    await emailjs.send(serviceId, templateId, {
      nome: payload.nome,
      sobrenome: payload.sobrenome,
      mensagem: payload.mensagem,
    });

    return { ok: true };
  } catch (err) {
    console.error("sendForm error:", err);
    throw err;
  }
}

export default sendForm;