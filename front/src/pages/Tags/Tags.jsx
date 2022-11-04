import React, { useEffect, useState } from 'react';
import * as S from './Tags.style';
import Title from '../../components/Title/Title';
import TagsTitleText from './TagsTitleText';
import TagsAll from './TagsAll';
import TagsFilter from '../../components/TagsFilter/TagsFilter';
import axios from 'axios';
import Contents from '../../components/Tags/Contents';
import LeftBox from '../../components/Questions/Content/PostBody/LeftBox';

const Tags = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/tags');

    if (response) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <Title title={'Tags'} />
      <TagsTitleText />
      <TagsAll />
      <TagsFilter />
      <S.TagsContainer>
        {data?.map(({ content }, i) => {
          return <Contents key={i}>{content}</Contents>;
        })}
      </S.TagsContainer>
      <S.PagiNationContainer>
        <LeftBox />
      </S.PagiNationContainer>
    </S.Container>
  );
};

export default Tags;
