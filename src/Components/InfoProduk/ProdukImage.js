import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

const ProdukImage = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const InfoFiles = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<>
			<div className="infoProduk_img" {...getRootProps()}>
				<input {...getInputProps()} />
				<AiOutlinePlusCircle className="infoProduk_icon" />
			</div>
			<p className="dropzone_InfoFiles text-center">{InfoFiles}</p>
		</>
	);
};

export default ProdukImage;
