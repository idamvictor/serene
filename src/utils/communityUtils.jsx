//* TO CHECK THE COMMUNITIES THE USER HAS JOINED
export const isCommunityJoined = (communityId, userCommunities) => {
    return userCommunities.some(userCommunity => userCommunity.communityId === communityId);
};