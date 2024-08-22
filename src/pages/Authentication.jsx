import React from 'react'
import AuthFlow from '@/features/authentication/AuthFlow';
import Survey from '@/features/survey/Survey';
import WelcomeMsg from '@/features/survey/WelcomeMsg';

const Authentication = () => {
  return (
    <>
    {/* <Survey/> */}
      <AuthFlow />
    </>
  );
}

export default Authentication