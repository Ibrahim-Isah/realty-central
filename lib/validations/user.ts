import * as z from 'zod';

export const userSchema = z.object({
	firstName: z
		.string({
			required_error: 'First Name is required',
			invalid_type_error: 'First Name must be a string',
		})
		.min(2, {
			message: 'First Name must be at least 2 characters',
		})
		.nonempty(),
	lastName: z.string().min(2, {
		message: 'Last Name must be at least 2 characters',
	}),
	email: z
		.string({
			required_error: 'Email is required',
			invalid_type_error: 'Email must be a string',
		})
		.email({
			message: 'Invalid Email Address',
		})
		.nonempty(),
	companyName: z
		.string({
			required_error: 'Company Name is required',
			invalid_type_error: 'Company Name must be a string',
		})
		.min(2)
		.nonempty(),
	phone: z
		.string({
			required_error: 'Phone Number is required',
			invalid_type_error: 'Phone Number must be a string',
		})
		.nonempty(),
	profileImage: z.string(),
	address: z.string(),
	city: z
		.string({
			required_error: 'City is required',
			invalid_type_error: 'City must be a string',
		})
		.nonempty(),
	state: z.string(),
	zipCode: z.string(),
	country: z
		.string({
			required_error: 'Country is required',
			invalid_type_error: 'Country must be a string',
		})
		.nonempty(),
	website: z.string().url({
		message: 'Invalid Website Address',
	}),
	about: z.string().nonempty(),
	userId: z.string(),
	on_boarded: z.boolean(),
});
