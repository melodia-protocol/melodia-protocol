export const getConnectedWallets = `
const wallets = await melodiaSdk.users.getConnectedWallets({
    id: "eAZl3"
})
`;

export const getFavorites = `
const favorites = await melodiaSdk.users.getFavorites({
    id: "eAZl3"
})
`;

export const getReposts = `
const reposts = await melodiaSdk.users.getReposts({
    id: "eAZl3"
})
`;

export const getSupporters = `
const supporters = await melodiaSdk.users.getSupporters({
    id: "eAZl3"
})
`;

export const getSupportings = `
const supportings = await melodiaSdk.users.getSupportings({
    id: "eAZl3"
})
`;

export const getTopTrackTags = `
const tags = await melodiaSdk.users.getTopTrackTags({
    id: "eAZl3"
})
`;

export const getTracksByUser = `
const tracks = await melodiaSdk.users.getTracksByUser({
    id: "eAZl3"
})
`;

export const getUser = `
const user = await melodiaSdk.users.getUser({
    id: "eAZl3"
})
`;

export const getUserIdFromWallet = `
const id = await melodiaSdk.users.getUserIDFromWallet({
    associatedWallet: '0x10c16c7B8b1DDCFE65990ec822DE4379dd8a86dE'
})
`;

export const searchUsers = `
const users = await melodiaSdk.users.searchUsers({
    query: 'skrillex'
})
`;
