import { fail, redirect } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { formSchema, formNumberSchema } from '$lib/schemas';
import nodemailer from 'nodemailer';

export const actions = {
	formHandle: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), formSchema);

		const transporter = nodemailer.createTransport({
			host: 'smtp.yandex.ru',
			port: 465,
			secure: true, // true for port 465, false for other ports
			auth: {
				user: 'web-all-wp@yandex.ru',
				pass: 'jzdmtemyzmtubdrx'
			}
		});

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			const info = await transporter.sendMail({
				from: '"Moskow Visa Agency - визовый-центр.москва" <web-all-wp@yandex.ru>',
				to: 'vyshyvanovilya@gmail.com',
				subject: 'Форма консультации',
				html: `
					<p>Имя: <b>${formData.name}</b></p>
					<p>Телефон: <b>${formData.phone}</b></p>
					<p>Email: <b>${formData.email}</b></p>
				`
			});

			console.log('success');
		} catch (err) {
			console.error('Error sending email:', err);
			return fail(500, { error: 'Failed to send email' });
		}

		throw redirect(303, '/thanks');
	},
	formNumber: async ({ request }) => {
		const { formData, errors } = await validateData(await request.formData(), formNumberSchema);

		const transporter = nodemailer.createTransport(
			{
				host: 'smtp.mail.ru',
				port: 465,
				secure: true,
				auth: {
					user: '1loso@mail.ru',
					pass: 'H4yLJxV6dpQf7ubnHiL2'
				}
			},
			{
				logger: true,
				debug: true
			}
		);

		if (errors) {
			console.log(errors, 'errors');
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			const info = await transporter.sendMail({
				from: '"Moskow Visa Agency - визовый-центр.москва" <1loso@mail.ru>',
				to: 'vyshyvanovilya@gmail.com',
				subject: 'Форма номера телефона',
				html: `
					<p>Телефон: <b>${formData.phone}</b></p>
				`
			});

			console.log('success');

			return { success: true };
		} catch (err) {
			console.error('Error sending email:', err);
			return fail(500, { error: 'Failed to send email' });
		}
	}
};
