import { Resend } from "resend"

const resend = new Resend("re_9zo9BNHt_Nqs5ky3b8ZPU8eE5iauy7jY5")

export async function POST(req: Request) {

    try {

        const body = await req.json()

        const { name, email, amount, message } = body

        await resend.emails.send({
            from: "ImpactBridge <onboarding@resend.dev>",
            to: ["lsujan2007@gmail.com"],
            subject: "New Donation Submission",
            html: `
        <div style="font-family:sans-serif;padding:20px">
          <h1>New Donation Submission</h1>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Amount:</strong> ${amount}</p>

          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
        })

        return Response.json({
            success: true,
        })

    } catch (error) {

        return Response.json({
            success: false,
        })

    }
}