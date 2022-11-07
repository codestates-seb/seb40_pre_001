import React from 'react';
import * as S from './Tags.style';
// import TagsTitleText from './TagsTitleText';
// import TagsAll from './TagsAll';
// import TagsFilter from '../../components/TagsPage/TagsFilter/TagsFilter';
// import axios from 'axios';
// import Contents from '../../components/TagsPage/Tags/Contents';
// import { getAlltagsData } from '../../apis/tags';
// import { useQuery } from '@tanstack/react-query';

const Tags = () => {
  // const fetchData = async () => {
  //   const response = await axios.get(
  //     'https://630c-125-177-243-74.jp.ngrok.io/tags',
  //     {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //       withCredentials: true,
  //     },
  //   );
  //   return response.data;
  // };
  // const { data, status } = useQuery(['tags'], fetchData);
  // data;

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (status === 'error') {
  //   return <div>Error</div>;
  // }

  // // getAlltagsData();
  return (
    <S.Container style={{ height: 1000 }}>
      {/* <Title title={'Tags'} />
      <TagsTitleText />
      <TagsAll />
      <TagsFilter />
      <S.TagsContainer>
        {/* {data.results.map((tags) => {
          <Contents>{tags.tagName}</Contents>;
        })}
        {console.log(data.results)} */}
      {/* <Contents />
      </S.TagsContainer>
      <S.PagiNationContainer></S.PagiNationContainer> */}{' '}
    </S.Container>
  );
};

export default Tags;
