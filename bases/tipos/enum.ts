(() => {
	enum AudioLevel {
		min,
		medium,
		max,
	}

	let currentAudio: AudioLevel = AudioLevel.medium;

	console.log(currentAudio);
	console.log(AudioLevel);
})();
