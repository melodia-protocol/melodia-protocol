---
id: "ResolveApi"
title: "Resolve"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### resolve

**resolve**<`T`\>(`requestParameters`): `Promise`<`T`\>

Resolves a provided melodia app URL to the API resource it represents

Example:

```typescript
const track = await melodiaSdk.resolve<Track>({
  url: "https://melodia.co/camouflybeats/hypermantra-86216",
});
```

#### Type parameters

| Name | Type                                                                                                                    |
| :--- | :---------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`Track`](../interfaces/Track.md) \| [`Playlist`](../interfaces/Playlist.md) \| [`User`](../interfaces/User.md) |

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `requestParameters` | [`ResolveRequest`](../interfaces/ResolveRequest.md) |

#### Returns

`Promise`<`T`\>
