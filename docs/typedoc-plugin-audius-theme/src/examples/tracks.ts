export const getBulkTracks = `
const tracks = await melodiaSdk.tracks.getBulkTracks();
`;

export const getTrack = `
const track = await melodiaSdk.tracks.getTrack({
    trackId: "D7KyD",
});
`;

export const getTrendingTracks = `
const tracks = await melodiaSdk.tracks.getTrendingTracks();
`;

export const searchTracks = `
const searchResult = await melodiaSdk.tracks.searchTracks({
    query: "skrillex",
});
`;

export const streamTrack = `
const url = await melodiaSdk.tracks.streamTrack({
    trackId: "PjdWN",
});
const audio = new Audio(url);
audio.play();
`;
