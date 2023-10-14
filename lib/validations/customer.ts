import * as z from 'zod';

export const customerSchema = z.object({
	id: z.string().optional(),
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
		}),
	phone: z
		.string({
			required_error: 'Phone Number is required',
			invalid_type_error: 'Phone Number must be a string',
		})
		.min(10, {
			message: 'Phone Number must be at least 10 characters',
		})
		.nonempty(),
	address: z
		.string({
			required_error: 'Address is required',
			invalid_type_error: 'Address must be a string',
		})
		.nonempty(),
	city: z
		.string({
			required_error: 'City is required',
			invalid_type_error: 'City must be a string',
		})
		.nonempty(),
	state: z
		.string({
			required_error: 'State is required',
			invalid_type_error: 'State must be a string',
		})
		.nonempty(),
	country: z
		.string({
			required_error: 'Country is required',
			invalid_type_error: 'Country must be a string',
		})
		.nonempty(),
});
