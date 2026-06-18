(function () {
	const DESIGN_WIDTH = 1200;

	function updateScale() {
		document.querySelectorAll(".partner-prog-scaler").forEach((scaler) => {
			const parent = scaler.parentElement;
			const w = parent.clientWidth;
			scaler.style.zoom = w <= 640 ? "1" : w / DESIGN_WIDTH;
		});
	}

	function getYouTubeEmbedUrl(url) {
		if (!url) return null;
		if (url.includes("youtube.com/embed/")) return url + "?autoplay=1&rel=0";
		const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
		if (shortMatch)
			return (
				"https://www.youtube.com/embed/" + shortMatch[1] + "?autoplay=1&rel=0"
			);
		const watchMatch = url.match(/[?&]v=([^?&]+)/);
		if (watchMatch)
			return (
				"https://www.youtube.com/embed/" + watchMatch[1] + "?autoplay=1&rel=0"
			);
		return null;
	}

	function isYouTubeUrl(url) {
		return url && (url.includes("youtube.com") || url.includes("youtu.be"));
	}

	function activateVideo(btn, block) {
		const placeholder = block.querySelector(".partner-prog__video-poster");
		const rotatingText = block.querySelector(".partner-prog__rotating-text");
		const videoSrc = block.dataset.videoSrc;

		if (placeholder) placeholder.style.display = "none";
		btn.style.display = "none";
		if (rotatingText) rotatingText.style.display = "none";

		if (isYouTubeUrl(videoSrc)) {
			const embedUrl = getYouTubeEmbedUrl(videoSrc);
			const container = block.querySelector(".partner-prog__youtube-container");
			if (container && embedUrl) {
				const iframe = document.createElement("iframe");
				iframe.src = embedUrl;
				iframe.allow = "autoplay; encrypted-media; fullscreen";
				iframe.allowFullscreen = true;
				iframe.style.cssText = "width:100%;height:100%;border:0;display:block;";
				container.appendChild(iframe);
			}
		} else {
			const video = block.querySelector("video");
			if (video) {
				video.play().catch(function () {});
			}
		}
	}

	function initVideoPlayback() {
		document.querySelectorAll(".partner-prog__play-icon").forEach((btn) => {
			btn.addEventListener("click", function () {
				const block = this.closest(".partner-prog__video-block");
				if (block) activateVideo(this, block);
			});
		});
	}

	window.addEventListener("load", () => {
		updateScale();
		initVideoPlayback();
	});
	window.addEventListener("resize", updateScale);
})();
