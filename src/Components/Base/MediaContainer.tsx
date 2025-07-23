
import "./MediaContainer.css";
import { useEffect, useState, useRef, useId } from "react";

interface MediaProps {
	id?: string;
	title?: string;
    className?: string;
	
    href?: string;
    
    width    ?: string;
    height   ?: string;
    minWidth ?: string;
    minHeight?: string;
    maxWidth ?: string;
    maxHeight?: string;
    aspectRatio?: string;
    borderRadius?: string;
	
	mediaSource?: string;
	placeholderSource?: string;

    ariaLabel?: string;
	ariaDescribedBy?: string;

	children?: React.ReactNode;
}

//#region Container
export const MediaContainer = ({
	id,
	title,
    className = "",
	
	width,
	height,
	maxWidth,
	maxHeight,
	minWidth,
	minHeight,
	aspectRatio,
    borderRadius,
	
    ariaLabel = title,
	ariaDescribedBy = title,

	children
}: MediaProps) => {
	return (
		<figure
			id={ id || useId() }
			className={"Container" + " " + className}
			style={{
				borderRadius,
				width: width,
				height,
				maxWidth,
				maxHeight,
				minWidth,
				minHeight,
				aspectRatio,
				overflow: "hidden"
			}}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
		>
			{children}
		</figure>
	);
};
//#endregion

//#region Video
type VideoProps = Omit<MediaProps, "href" | "children" | "alt"> & {
	loop?: boolean;
	muted?: boolean;
	poster?: string;
	preload?: string;
	autoPlay?: boolean;
	controls?: boolean;

	isPlaying?: boolean;
};
const Video: React.FC<VideoProps> = ({
	className,

	loop,
	muted,
	poster,
	preload,
	autoPlay,
	controls,
	
	isPlaying = false,

    mediaSource,
	placeholderSource ="https://www.w3schools.com/html/mov_bbb.mp4",
	
	...props
}) => {
	const source = mediaSource || placeholderSource;
    const makePlaceholder = !mediaSource ? " placeholder" : "";
	const vidProps: React.VideoHTMLAttributes<HTMLVideoElement> = {
		loop,
		muted,
		poster,
		preload,
		autoPlay,
		controls
	}
	const [playback, setPlayback] = useState<boolean>(true);

	const ref = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		if (isPlaying) {
			ref.current?.play();  // Calling these while rendering isn't allowed.
		} else {
			ref.current?.pause(); // Also, this crashes.
		}
	}, [isPlaying]);

	return (
		<MediaContainer className={className + makePlaceholder} {...props}>
			<video 
				src={source}
				className={className + " Media"}
				ref={ref}
				{...vidProps} 
			/>
			<button onClick={() => setPlayback(!playback)}>⏯️</button>
		</MediaContainer>
	)
}
//#endregion

//#region Image
type ImageProps = MediaProps & {
	alt: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
}
const Image: React.FC<ImageProps> = ({
	id,
	alt = id || "Media content",
    className = "",

	href,
	target = "_blank",

    mediaSource,
	placeholderSource = "https://thispersondoesnotexist.com/",

	...props
}) => {
	const source = mediaSource || placeholderSource;
    const makePlaceholder = !mediaSource ? " placeholder" : "";
	const content = (
		<img src={source} alt={alt} className={className + "-img" + " Media"} />
	);
	const hrefContent = (
		<a href={href} target={target}>{content}</a>
	);

	return (
		<MediaContainer className={className + makePlaceholder} {...props}>
			{href ? hrefContent : content}
		</MediaContainer>
	);
}
//#endregion

//#region IFrame
type IframeProps = Omit<MediaProps, "href" | "children" | "alt"> & {
	allow?: string
	allowFullScreen?: boolean;
	allowPaymentRequest?: boolean;
	loading?: "eager" | "lazy";
	name?: string;
	referrerPolicy?: string;
	sandbox?: string;
	sourceCode?: string;
}
const Iframe: React.FC<IframeProps> =({
	title,
	className,

	allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
	allowFullScreen = false,
	allowPaymentRequest = false,
	loading = "lazy",
	name,
	sandbox,
	sourceCode,

    mediaSource,
	placeholderSource,
	
	
	...props
}) => {
	const source = mediaSource || placeholderSource
    const makePlaceholder = !mediaSource ? " placeholder" : "";
	const iframeProps: React.IframeHTMLAttributes<HTMLIFrameElement> = {
		allowFullScreen,
		loading,
		allow,
		name,
		sandbox,
		src: sourceCode || source
	};

	return (
		<MediaContainer className={className + makePlaceholder} {...props} 
		>
			<iframe
				className="Media"
				title={title || "Embedded Content"}
				{...iframeProps}
			/>
		</MediaContainer>
	);
}
//#endregion

//#Export
MediaContainer.Video  = Video
MediaContainer.Image  = Image
MediaContainer.Iframe = Iframe

type CompoundMediaContainer = React.FC<MediaProps> & {
	Video : React.FC<VideoProps>;
	Image : React.FC<ImageProps>;
	Iframe: React.FC<IframeProps>;
}

export default MediaContainer as CompoundMediaContainer;
//#endregion

