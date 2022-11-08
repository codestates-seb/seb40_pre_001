import React from 'react';
import UserCommunities from './Side/Communities/Communities';
import UserStats from './Side/Stats/UserStats';
import CategoryTop from './Top/CategoryTop';

const Category = ({ userStatus }) => {
  return (
    <div>
      <CategoryTop />
      <UserStats userStatus={userStatus} />
      <UserCommunities />
    </div>
  );
};

export default Category;
