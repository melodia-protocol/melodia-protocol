---

sidebar_label: Overview sidebar_position: 1

---

# Overview

melodia is a decentralized, community-owned and artist-controlled music-sharing protocol. melodia provides a blockchain-based alternative to existing streaming platforms to help artists publish and monetize their work and distribute it directly to fans.

The mission of the project is to give everyone the freedom to share, monetize, and listen to any audio.

The melodia Protocol [repository](https://github.com/melodiaProject/melodia-protocol) is a mono-repository that has all the pieces that make and support the protocol including smart contracts, services, and other supporting libraries.

If you are interested in operating a service, see the [`running a node`](../token/running-a-node/introduction.md) section. If you're interested in contributing to the melodia protocol, explore the code below!

![](/img/architecture.png)

melodia consists of three demographics of users: Artists (content creators), Fans (content consumers), and Service Providers. Some users check fall into all three demographics!

- **Artists** upload tracks, create albums, and share content to their following
- **Fans** stream tracks, create playlists, subscribe to & follow artists, and re-share content to their following
- **Service Providers** serve app traffic, stream songs, and help secure the network

Service providers can provide one or more of the following services by staking $AUDIO tokens and registering their service:

- Discovery node \(host an endpoint with SSL support and register endpoint with stake\)
- Content node \(host an endpoint with SSL support and register endpoint with stake\)

In the above diagram, creators can either run a content node themselves or use one of the network-registered content nodes.

For more details on the melodia architecture, see the [melodia protocol whitepaper](whitepaper.md).

## melodia Services

| Service                                                                                               | Description                                                                                                         |
| :---------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| [`Content-Node`](https://github.com/melodiaProject/melodia-protocol/tree/master/creator-node)         | Maintains the availability of users' content on IPFS including user metadata, images, and audio content             |
| [`Discovery-Node`](https://github.com/melodiaProject/melodia-protocol/tree/master/discovery-provider) | Indexes and stores the contents of the melodia contracts on the Ethereum blockchain for clients to query via an API |
| [`Identity-Service`](https://github.com/melodiaProject/melodia-protocol/tree/master/identity-service) | Stores encrypted auth ciphertexts, does Twitter OAuth and relays transactions (pays gas) on behalf of users         |

## melodia Smart Contracts & Libs

| Lib                                                                                             | Description                                                                                                                                           |
| :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`libs`](https://github.com/melodiaProject/melodia-protocol/tree/master/libs)                   | An easy interface to the distributed web and melodia services: Identity Service, Discovery Node \(discovery provider\), Content Node \(creator node\) |
| [`contracts`](https://github.com/melodiaProject/melodia-protocol/tree/master/contracts)         | The smart contracts being developed for the melodia streaming protocol                                                                                |
| [`eth-contracts`](https://github.com/melodiaProject/melodia-protocol/tree/master/eth-contracts) | The Ethereum smart contracts being developed for the melodia streaming protocol                                                                       |

## Service Provider Quickstart

If you're a service provider, a quickstart guide to running services on melodia can be found [here](../token/running-a-node/introduction.md)
