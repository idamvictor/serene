import { useGetCommunitiesQuery, useGetUserCommunityQuery } from "@/services/community/CommunitySlice";
import { isCommunityJoined } from "@/utils/communityUtils";

//* TO CHECK THE COMMUNITIES THE USER HAS JOINED
export const isCommunityJoined = (communityId, userCommunities) => {
    return userCommunities.some(userCommunity => userCommunity.communityId === communityId);
};

//* TO GET THE COMMUNITIES THE USERS HAVE JOINED