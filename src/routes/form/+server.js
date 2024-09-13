import { fail, json } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { formNumberSchema } from '$lib/schemas';
import nodemailer from 'nodemailer';

export async function POST({ request }) {
    const { formData, errors } = await validateData(await request.formData(), formNumberSchema);
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, 
        auth: {	
            user: '1loso@mail.ru',
            pass: 'H4yLJxV6dpQf7ubnHiL2'
        }
    });

    if (errors) {
        console.log(errors, 'errors');
        return json({
            data: formData, 
            errors: errors.fieldErrors
        }, { status: 400 });
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

        return json({ success: true }, { status: 201 });
    } catch (err) {
        console.error('Error sending email:', err);
        return json({ error: 'Failed to send email' }, { status: 400 });
    }
};
