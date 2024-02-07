function make_album(artist: string, albumTitle: string, numTracks?: number)
    : { artist: string, albumTitle: string, numTracks?: number } {
    let albumInfo = {
        artist,
        albumTitle,
        numTracks
    }
    return albumInfo;
}

console.log(make_album("Ali Zafar", "Dhoom"));
console.log(make_album("Atif Aslam", "ABC", 19));
console.log(make_album("Erique", "xyz", 13));