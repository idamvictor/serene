//* TO CHECK IF THE USER HAS JOINED A COMMUNITY OR NOT
export const isCommunityJoined = (communityId, userCommunities) => {
    return userCommunities.map(userCommunity => userCommunity._id === communityId);
};

// export const isCommunityJoined = (communityId, userCommunities) => {
//     return userCommunities.some(userCommunity => userCommunity._id === communityId);
// };
