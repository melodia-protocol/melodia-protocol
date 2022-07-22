export const getPlaylist = `
const playlist = await melodiaSdk.playlists.getPlaylist({
    playlistId: "AxRP0",
});
`;

export const getPlaylistTracks = `
const tracks = await melodiaSdk.playlists.getPlaylistTracks({
    playlistId: "AxRP0",
});
`;

export const getTrendingPlaylists = `
const playlists = await melodiaSdk.playlists.getTrendingPlaylists();
`;

export const searchPlaylists = `
const playlists = await melodiaSdk.playlists.searchPlaylists({
    query: 'lo-fi',
});
`;
