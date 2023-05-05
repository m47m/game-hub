const getCropppedImageUrl = (url: string, width: number = 600, height: number = 400) => {
	return url.replace(
		"/media/games/",
		`/media/crop/${width}/${height}/games/`
	);
}

export default getCropppedImageUrl;