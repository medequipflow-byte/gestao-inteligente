// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req: Request) => {
  // O Webhook do Supabase envia os dados no corpo da requisição
  const { record } = await req.json()

  // Montando o corpo do e-mail com os dados do banco
  const emailHtml = `
    <h1>Novo Lead: Solicitação de Acesso</h1>
    <p><strong>Nome:</strong> ${record.nome_completo}</p>
    <p><strong>E-mail:</strong> ${record.email_profissional}</p>
    <p><strong>Empresa:</strong> ${record.empresa}</p>
    <p><strong>Telefone:</strong> ${record.telefone || 'Não informado'}</p>
    <p><strong>Mensagem:</strong> ${record.mensagem || 'Sem mensagem adicional'}</p>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      // 1. O remetente TEM que ser o e-mail de teste do Resend:
      from: 'onboarding@resend.dev', 
      
      // 2. O destinatário TEM que ser o mesmo e-mail que você usou para criar a conta no Resend:
      to: ['medequipflow@gmail.com'], 
      
      subject: `Novo Lead - ${record.empresa}`,
      html: emailHtml,
    }),
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})
