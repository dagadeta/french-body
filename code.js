function talking(word) {
    const audio = new Audio("audio/" + word + ".mp3");
    audio.play();
}