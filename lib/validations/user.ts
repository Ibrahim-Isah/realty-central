import * as z from 'zod';

export const userSchema = z.object({
	firstName: z.string().min(2).nonempty(),
	lastName: z.string().min(2),
	email: z.string().email().nonempty(),
	companyName: z.string().min(2).nonempty(),
	phone: z.string().nonempty(),
	profileImage: z.string(),
	address: z.string(),
	city: z.string().nonempty(),
	state: z.string(),
	zipCode: z.string().nonempty(),
	country: z.string(),
	website: z.string(),
	about: z.string().nonempty(),
	userId: z.string(),
	on_boarded: z.boolean(),
});
