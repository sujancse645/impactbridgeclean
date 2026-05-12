import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

    try {

        const body = await req.json()

        const { name, email, amount, message } = body

        if (!name || !email || !amount || !message) {

            return Response.json({
                success: false,
                error: "Missing fields",
            })
        }

        await resend.emails.send({
            from: "onboarding@resend.dev",

            to: ["lsujan2007@gmail.com"],

            subject: "New Donation Submission",

            html: `
        <h1>New Donation</h1>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Amount:</strong> ${amount}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
        })

        return Response.json({
            success: true,
        })

    } catch (error) {

        console.log(error)

        return Response.json({
            success: false,
            error: "Email failed",
        })
    }
}