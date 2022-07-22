---
id: "PlaylistsApi"
title: "Playlists"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### getPlaylist

**getPlaylist**(`requestParameters`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

Get a playlist by ID

Example:

```typescript
const playlist = await melodiaSdk.playlists.getPlaylist({
  playlistId: "AxRP0",
});
```

#### Parameters

| Name                | Type                                                        |
| :------------------ | :---------------------------------------------------------- |
| `requestParameters` | [`GetPlaylistRequest`](../interfaces/GetPlaylistRequest.md) |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

---

### getPlaylistTracks

**getPlaylistTracks**(`requestParameters`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Fetch tracks within a playlist.

Example:

```typescript
const tracks = await melodiaSdk.playlists.getPlaylistTracks({
  playlistId: "AxRP0",
});
```

#### Parameters

| Name                | Type                                                                    |
| :------------------ | :---------------------------------------------------------------------- |
| `requestParameters` | [`GetPlaylistTracksRequest`](../interfaces/GetPlaylistTracksRequest.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

---

### getTrendingPlaylists

**getTrendingPlaylists**(`requestParameters?`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

Gets trending playlists for a time period

Example:

```typescript
const playlists = await melodiaSdk.playlists.getTrendingPlaylists();
```

#### Parameters

| Name                | Type                                                                          |
| :------------------ | :---------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingPlaylistsRequest`](../interfaces/GetTrendingPlaylistsRequest.md) |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

---

### searchPlaylists

**searchPlaylists**(`requestParameters`): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

Search for a playlist

Example:

```typescript
const playlists = await melodiaSdk.playlists.searchPlaylists({
  query: "lo-fi",
});
```

#### Parameters

| Name                | Type                                                                |
| :------------------ | :------------------------------------------------------------------ |
| `requestParameters` | [`SearchPlaylistsRequest`](../interfaces/SearchPlaylistsRequest.md) |

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>
