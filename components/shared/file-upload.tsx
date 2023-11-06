import { UploadCloudIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '100px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	outline: 'none',
	transition: 'border .24s ease-in-out',
};

const focusedStyle = {
	borderColor: '#2196f3',
};

const acceptStyle = {
	borderColor: '#00e676',
};

const rejectStyle = {
	borderColor: '#ff1744',
};

const FileUpload = () => {
	const [files, setFiles] = useState<string[] | []>([]);

	const onDrop = useCallback((acceptedFiles: any) => {
		// Do something with the files
		acceptedFiles.forEach((file: File) => {
			// Perform your desired actions with each file
			console.log(file.name);
			const reader = new FileReader();

			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			reader.onload = () => {
				// Do whatever you want with the file contents
				const binaryStr = reader.result;
				const url = URL.createObjectURL(file);
				setFiles((prev) => [...prev, url]);
				console.log(binaryStr);
			};
			reader.readAsArrayBuffer(file);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
		useDropzone({
			onDrop,
		});

	const style: any = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);
	return (
		<div className='container '>
			<div {...getRootProps({ style })}>
				<input {...getInputProps()} />
				<UploadCloudIcon size={50} />
				<p>Drag &apos;n&apos; drop some files here, or click to select files</p>
			</div>
			{files.map((file, index) => (
				<div key={index}>
					<Image src={file} alt='Uploaded file' width={200} height={200} />
				</div>
			))}
		</div>
	);
};

export default FileUpload;
