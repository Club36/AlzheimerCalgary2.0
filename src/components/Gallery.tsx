//#region Imports
import { CaretLeft, X } from "@phosphor-icons/react";
import MediaUploadZone from "./MediaUploadZone";
import picture from "@/assets/images/pic1.jpg";
//#endregion

interface GalleryProps {
	handleClose: () => void;
	returning: boolean;
}

function Gallery({ handleClose, returning }: GalleryProps) {
	//TODO: Configure the local gallery to display images here
	const imgList: string[] = [picture, picture, picture, picture, picture];

	//#region Functions

	/**
	 * Close the gallery
	 */

	/**
	 * Handle an image in the gallery being clicked
	 */
	const handleImageClicked = () => {};

	//#endregion

	return (
		<div className="h-full flex flex-col items-center justify-center gap-y-6 max-w-5xl px-6 py-8 bg-neutrals-light-200">
			{/* Title */}
			<div className="w-full flex justify-between items-center">
				<div className="flex gap-x-2 items-center font-display text-2xl font-bold">
					{returning && (
						<CaretLeft
							className="cursor-pointer hover:text-primary-main transition ease-in-out"
							weight="bold"
							onClick={handleClose}
						/>
					)}
					<h1 className="">Gallery</h1>
				</div>
				{!returning && (
					<X
						className="cursor-pointer text-2xl hover:text-primary-main transition ease-in-out"
						weight="bold"
						onClick={handleClose}
					/>
				)}
			</div>

			{/* Image gallery */}
			<div className=" grid h-96 w-full grid-cols-2 md:grid-cols-4 gap-6 items-center overflow-y-auto scroller">
				{imgList.map((img, index) => (
					<img
						key={index}
						src={img}
						alt="gallery"
						className="w-56 aspect-square rounded-xl cursor-pointer hover:scale-95 transition ease-in-out duration-200"
						onClick={handleImageClicked}
					/>
				))}
			</div>

			{/* Or */}
			<div className="flex w-full items-center gap-x-4">
				<div className="bg-primary-main w-full h-1.5 rounded-lg"></div>
				<p>or</p>
				<div className="bg-primary-main w-full h-1.5 rounded-lg"></div>
			</div>

			{/* Upload media */}
			<h2 className="w-full text-xl">Upload Media</h2>
			<MediaUploadZone onFilesAdded={() => {}} />
		</div>
	);
}

export { Gallery };
