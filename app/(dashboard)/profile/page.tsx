import { fetchUser } from '@/actions/user';
import BreadCrumb from '@/components/shared/breadcrumb';
import { UserData } from '@/types';
import { LuUser } from 'react-icons/lu';
import ProfileForm from './components/profile-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/lib/validations/user';

const Profile = async () => {
	const userInfo = await fetchUser();
	if (!userInfo) {
		return null;
	}

	const userData = {
		...userInfo,
	};

	const breadcrumb = 'profile';
	return (
		<main className=''>
			<BreadCrumb
				icon={<LuUser />}
				title='Profile'
				subtitle='Edit your profile'
				breadcrumb={breadcrumb}
			/>
			<div>
				<ProfileForm userData={userData as UserData} />
			</div>
		</main>
	);
};

export default Profile;
