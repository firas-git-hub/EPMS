import { Resend } from 'resend';
import ContactUsEmail from '@/emails/contactUsEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const { fname, lname, email, phone, msg } = await request.json();
	try {
		const { data, error } = await resend.emails.send({
			from: 'example@epmslb.com',
			to: ['epms999@outlook.com'],
			subject: 'Message from website',
			react: ContactUsEmail({ fname, lname, email, phone, msg }),
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
