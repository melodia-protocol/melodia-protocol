---
id: "full.TracksApi"
title: "Tracks"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### bestNewReleases

**bestNewReleases**(): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Best New Releases\" smart playlist

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getBulkTracks

**getBulkTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a list of tracks using their IDs or permalinks

Example:

```typescript
const tracks = await melodiaSdk.tracks.getBulkTracks();
```

#### Parameters

| Name                | Type                                                                 |
| :------------------ | :------------------------------------------------------------------- |
| `requestParameters` | [`GetBulkTracksRequest`](../interfaces/full.GetBulkTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

---

### getMostLovedTracks

**getMostLovedTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Most Loved\" smart playlist

#### Parameters

| Name                | Type                                                                           |
| :------------------ | :----------------------------------------------------------------------------- |
| `requestParameters` | [`GetMostLovedTracksRequest`](../interfaces/full.GetMostLovedTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getRecommendedTracks

**getRecommendedTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Get recommended tracks

#### Parameters

| Name                | Type                                                                               |
| :------------------ | :--------------------------------------------------------------------------------- |
| `requestParameters` | [`GetRecommendedTracksRequest`](../interfaces/full.GetRecommendedTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getRecommendedTracksWithVersion

**getRecommendedTracksWithVersion**(`requestParameters`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Get recommended tracks using the given trending strategy version

#### Parameters

| Name                | Type                                                                                                     |
| :------------------ | :------------------------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetRecommendedTracksWithVersionRequest`](../interfaces/full.GetRecommendedTracksWithVersionRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getRemixableTracks

**getRemixableTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a list of tracks that have stems available for remixing

#### Parameters

| Name                | Type                                                                           |
| :------------------ | :----------------------------------------------------------------------------- |
| `requestParameters` | [`GetRemixableTracksRequest`](../interfaces/full.GetRemixableTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

---

### getTrack

**getTrack**(`requestParameters`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

Gets a track by ID. If `show_unlisted` is true, then `handle` and `url_title` are required.

Example:

```typescript
const track = await melodiaSdk.tracks.getTrack({
  trackId: "D7KyD",
});
```

#### Parameters

| Name                | Type                                                       |
| :------------------ | :--------------------------------------------------------- |
| `requestParameters` | [`GetTrackRequest`](../interfaces/full.GetTrackRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)\>

---

### getTrackRemixParents

**getTrackRemixParents**(`requestParameters`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets all the tracks that the given track remixes

#### Parameters

| Name                | Type                                                                               |
| :------------------ | :--------------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrackRemixParentsRequest`](../interfaces/full.GetTrackRemixParentsRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getTrackRemixes

**getTrackRemixes**(`requestParameters`): `Promise`<[`RemixesResponse`](../interfaces/full.RemixesResponse.md)\>

Get all tracks that remix the given track

#### Parameters

| Name                | Type                                                                     |
| :------------------ | :----------------------------------------------------------------------- |
| `requestParameters` | [`GetTrackRemixesRequest`](../interfaces/full.GetTrackRemixesRequest.md) |

#### Returns

`Promise`<[`RemixesResponse`](../interfaces/full.RemixesResponse.md)\>

---

### getTrackStems

**getTrackStems**(`requestParameters`): `Promise`<[`StemFull`](../interfaces/full.StemFull.md)[]\>

Get the remixable stems of a track

#### Parameters

| Name                | Type                                                                 |
| :------------------ | :------------------------------------------------------------------- |
| `requestParameters` | [`GetTrackStemsRequest`](../interfaces/full.GetTrackStemsRequest.md) |

#### Returns

`Promise`<[`StemFull`](../interfaces/full.StemFull.md)[]\>

---

### getTrendingTrackIDs

**getTrendingTrackIDs**(`requestParameters?`): `Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

Gets the track IDs of the top trending tracks on melodia

#### Parameters

| Name                | Type                                                                             |
| :------------------ | :------------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingTrackIDsRequest`](../interfaces/full.GetTrendingTrackIDsRequest.md) |

#### Returns

`Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

---

### getTrendingTracks

**getTrendingTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending (most popular) tracks on melodia

Example:

```typescript
const tracks = await melodiaSdk.tracks.getTrendingTracks();
```

#### Parameters

| Name                | Type                                                                         |
| :------------------ | :--------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingTracksRequest`](../interfaces/full.GetTrendingTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getTrendingTracksIDsWithVersion

**getTrendingTracksIDsWithVersion**(`requestParameters`): `Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

Gets the track IDs of the top trending tracks on melodia based on the given trending strategy version

#### Parameters

| Name                | Type                                                                                                     |
| :------------------ | :------------------------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingTracksIDsWithVersionRequest`](../interfaces/full.GetTrendingTracksIDsWithVersionRequest.md) |

#### Returns

`Promise`<[`TrendingTimesIds`](../interfaces/full.TrendingTimesIds.md)\>

---

### getTrendingTracksWithVersion

**getTrendingTracksWithVersion**(`requestParameters`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending (most popular tracks on melodia using a given trending strategy version

#### Parameters

| Name                | Type                                                                                               |
| :------------------ | :------------------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetTrendingTracksWithVersionRequest`](../interfaces/full.GetTrendingTracksWithVersionRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getUnderTheRadarTracks

**getUnderTheRadarTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the tracks found on the \"Under the Radar\" smart playlist

#### Parameters

| Name                | Type                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetUnderTheRadarTracksRequest`](../interfaces/full.GetUnderTheRadarTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getUndergroundTrendingTracks

**getUndergroundTrendingTracks**(`requestParameters?`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending underground tracks on melodia

#### Parameters

| Name                | Type                                                                                               |
| :------------------ | :------------------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetUndergroundTrendingTracksRequest`](../interfaces/full.GetUndergroundTrendingTracksRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getUndergroundTrendingTracksWithVersion

**getUndergroundTrendingTracksWithVersion**(`requestParameters`): `Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

Gets the top 100 trending underground tracks on melodia using a given trending strategy version

#### Parameters

| Name                | Type                                                                                                                     |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| `requestParameters` | [`GetUndergroundTrendingTracksWithVersionRequest`](../interfaces/full.GetUndergroundTrendingTracksWithVersionRequest.md) |

#### Returns

`Promise`<[`TrackFull`](../interfaces/full.TrackFull.md)[]\>

---

### getUsersFromFavorites

**getUsersFromFavorites**(`requestParameters`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get users that favorited a track

#### Parameters

| Name                | Type                                                                                 |
| :------------------ | :----------------------------------------------------------------------------------- |
| `requestParameters` | [`GetUsersFromFavoritesRequest`](../interfaces/full.GetUsersFromFavoritesRequest.md) |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

---

### getUsersFromReposts

**getUsersFromReposts**(`requestParameters`): `Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>

Get the users that reposted a track

#### Parameters

| Name                | Type                                                                             |
| :------------------ | :------------------------------------------------------------------------------- |
| `requestParameters` | [`GetUsersFromRepostsRequest`](../interfaces/full.GetUsersFromRepostsRequest.md) |

#### Returns

`Promise`<[`UserFull`](../interfaces/full.UserFull.md)[]\>
