import * as zod from 'zod';

export const userSchema = zod.object({
	email: zod.string(),
	password: zod.string(),
	profileImage: zod.string(),
});
