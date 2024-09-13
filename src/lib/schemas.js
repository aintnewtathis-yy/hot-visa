import { z } from 'zod';

export const formSchema = z.object({
    name: z
		.string({ required_error: 'Имя обязательно' })
		.regex(/^[а-яА-Я]+$/, { message: 'Имя может состоять только из кириллических букв' }),
	email: z
		.string({ required_error: 'Email обязателен' })
		.email({ message: 'Введите корректный Email' }),
    phone: z
		.string({ required_error: 'Телефон обязателен' })
});
export const formNumberSchema = z.object({
    phone: z
		.string({ required_error: 'Телефон обязателен' })
		.min(6, { message: 'Введите корректный Телефон' })
});