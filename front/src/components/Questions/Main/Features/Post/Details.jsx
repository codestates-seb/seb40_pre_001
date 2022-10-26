import React from 'react';
import * as S from './Post.style';

const PostDetails = () => {
  return (
    <S.BoxRight>
      <S.Title>
        <a href='/questions/74210325/ansible-merge-2-task-with-condition-checks'>
          ansible merge 2 task with condition checks
        </a>
      </S.Title>
      <p>
        Need help to merge below 2 tasks in 1 task. tasks are divided based on
        vrf value.
      </p>
      {/* Tag Box */}
      <S.ExtraDetailsBox>
        <S.TagBox>
          <ul>
            <li>
              <S.Tab href='/questions/tagged/ansible'>ansible</S.Tab>
            </li>
          </ul>
        </S.TagBox>
        {/* User Box */}
        <S.DetailRight>
          <S.UserCard>
            <S.UserCardLink>
              <a href='/users/17314281/user17314281'>user17314281</a>
            </S.UserCardLink>
            <S.UserPostCount>13</S.UserPostCount>
          </S.UserCard>
          <S.TimeBox>
            <span>asked 1 min ago</span>
          </S.TimeBox>
        </S.DetailRight>
      </S.ExtraDetailsBox>
    </S.BoxRight>
  );
};

export default PostDetails;
