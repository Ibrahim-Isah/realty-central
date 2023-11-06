import { UploadCloudIcon, UploadIcon } from 'lucide-react';
import React, { useCallback, useMemo } from 'react';
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
				console.log(binaryStr);
			};
			reader.readAsArrayBuffer(file);
		});
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
		</div>
	);
};

export default FileUpload;
