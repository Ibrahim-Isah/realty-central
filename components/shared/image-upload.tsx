import React, { useState, useRef } from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

type Props = {
	imageUrl: string;
};

const ImageUpload: React.FC<Props> = ({ imageUrl }) => {
	const imageRef = useRef(null);
	const [image, setImage] = useState('');
	return (
		<Card className='max-w-xs h-72 p-0 flex flex-col items-center'>
			<CardContent className='flex flex-col items-center w-full space-y-3'>
				<Avatar className='h-32 w-auto my-5'>
					<AvatarImage
						src={imageUrl || 'https://www.gravatar.com/avatar?d=mp'}
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Separator />
				<CardFooter className='w-full '>
					<form>
						<input
							type='file'
							name='image'
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
						<Button variant='outline' className='border-none w-full'>
							Upload Picture
						</Button>
					</form>
				</CardFooter>
			</CardContent>
		</Card>
	);
};

export default ImageUpload;
