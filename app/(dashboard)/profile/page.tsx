import { fetchUser } from '@/actions/user';
import BreadCrumb from '@/components/shared/breadcrumb';
import { UserData } from '@/types';
import { User } from 'lucide-react';
import ProfileForm from './components/profile-form';

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
				icon={<User />}
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
