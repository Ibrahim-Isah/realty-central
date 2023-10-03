'use client';
import { UserData } from '@/types';
import React from 'react';

interface AccountProfileProps {
	userData: UserData;
	btnTitle: string;
}

const AccountProfile: React.FC<AccountProfileProps> = ({
	userData,
	btnTitle,
}) => {
	return <div>AccountProfile</div>;
};

export default AccountProfile;
