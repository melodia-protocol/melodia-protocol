---
id: "TracksApi"
title: "Tracks"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Methods

### getBulkTracks

**getBulkTracks**(`requestParameters?`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Gets a list of tracks using their IDs or permalinks

Example:

```typescript
const tracks = await melodiaSdk.tracks.getBulkTracks();
```

#### Parameters

| Name                | Type                                                            |
| :------------------ | :-------------------------------------------------------------- |
| `requestParameters` | [`GetBulkTracksRequest`](../interfaces/GetBulkTracksRequest.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

#### Inherited from

GeneratedTracksApi.getBulkTracks

---

### getTrack

**getTrack**(`requestParameters`): `Promise`<[`Track`](../interfaces/Track.md)\>

Gets a track by ID

Example:

```typescript
const track = await melodiaSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

#### Parameters

| Name                | Type                                                  |
| :------------------ | :---------------------------------------------------- |
| `requestParameters` | [`GetTrackRequest`](../interfaces/GetTrackRequest.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)\>

#### Inherited from

GeneratedTracksApi.getTrack

---

### getTrendingTracks

**getTrendingTracks**(`requestParameters?`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Gets the top 100 trending (most popular) tracks on melodia

Example:

```typescript
const tracks = await melodiaSdk.tracks.getTrendingTracks();
```

#### Parameters

| Name                | Type                                                                    |
| :------------------ | :---------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingTracksRequest`](../interfaces/GetTrendingTracksRequest.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

#### Inherited from

GeneratedTracksApi.getTrendingTracks

---

### searchTracks

**searchTracks**(`requestParameters`): `Promise`<[`Track`](../interfaces/Track.md)[]\>

Search for a track or tracks

Example:

```typescript
const searchResult = await melodiaSdk.tracks.searchTracks({
  query: "skrillex",
});
```

#### Parameters

| Name                | Type                                                          |
| :------------------ | :------------------------------------------------------------ |
| `requestParameters` | [`SearchTracksRequest`](../interfaces/SearchTracksRequest.md) |

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

#### Inherited from

GeneratedTracksApi.searchTracks

---

### streamTrack

**streamTrack**(`requestParameters`): `Promise`<`string`\>

Get the url of the track's streamable mp3 file

Example:

```typescript
const url = await melodiaSdk.tracks.streamTrack({
  trackId: "PjdWN",
});
const audio = new Audio(url);
audio.play();
```

#### Parameters

| Name                | Type                                                        |
| :------------------ | :---------------------------------------------------------- |
| `requestParameters` | [`StreamTrackRequest`](../interfaces/StreamTrackRequest.md) |

#### Returns

`Promise`<`string`\>
