import React from 'react';
import * as S from './Pagination.style';
import { useRecoilState } from 'recoil';
import { pagesState } from '../../../../store';
import { pageLimits } from '../../../../constants';

const RightBox = () => {
  const [limit, setLimit] = useRecoilState(pagesState);

  return (
    <S.RightBox>
      {pageLimits.map((page) => {
        return (
          <S.PageButton
            onClick={(e) =>
              setLimit({ ...limit, selectedLimit: Number(e.target.value) })
            }
            className={limit.selectedLimit === page && 'active'}
            value={page}
            key={page}
          >
            {page}
          </S.PageButton>
        );
      })}
      <S.Text>per page</S.Text>
    </S.RightBox>
  );
};

export default RightBox;
