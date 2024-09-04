

export const getJoinedCommunitiesUtils = () => {
    //* All API queries
  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();
  const {data: allUserCommunities, refetch} = useGetUserCommunityQuery();

  if (allCommunitiesError) {
      return <h1>NA ERROR BE THIS</h1>
  }

  //* Destructuring
  const communities = allCommunities?.data || [];
  const userCommunities = allUserCommunities?.data || [];

  // console.log(allCommunities);

 //* Filter to get only joined communities
 const joinedCommunities = communities.filter((community) => 
    isCommunityJoined(community._id, userCommunities)
  );

  return joinedCommunities;
}

// export default getJoinedCommunitiesUtils;
