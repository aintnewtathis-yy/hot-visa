export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);
	console.log(formData)
	console.log(body)

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};
