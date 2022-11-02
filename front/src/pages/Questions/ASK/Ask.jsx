import React, { useState } from 'react';

import useGetAllPost from '../../../hooks/questions/useGetAllPosts';
import usePost from '../../../hooks/usePost';

const Ask = () => {
  // useState를 useRef로 대체했을때 차이 (렌더링 ), debounce 적용하면 onChange마다 rendering 일어나지 않음??
  // 예시
  const [state, setState] = useState({ title: '', author: '', context: '' });
  const { data, status } = useGetAllPost();
  const addPost = usePost('questions', '/questions');

  // createdAt
  const date = new Date().getDate();
  const day = new Date().getDay();
  const year = new Date().getFullYear();
  const randomDate = `${year}-${day}-${date}`;

  const onClick = () => {
    const mockData = Object.assign({
      contentId: data.length + 1,
      userId: Math.floor(Math.random() * 123456),
      title: state.title,
      author: state.author,
      createdAt: randomDate,
      tags: ['Mock', 'Service', 'Network'],
      status: {
        votes: 2022,
        answers: 12,
        views: 25,
      },
      content: {
        image: 'url',
        context: state.context,
        code: `<div>code</div>`,
      },
    });

    status === 'success'
      ? addPost.mutate(mockData)
      : status === 'error'
      ? console.log('Failed to add new Post')
      : null;
  };

  return (
    <div style={{ marginTop: 300 }}>
      <form type='submit' style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='author'>Author</label>
        <input
          type='author'
          value={state.author}
          name='author'
          style={{ width: 300, height: 30 }}
          onChange={(e) => setState({ ...state, author: e.target.value })}
          required
        />
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          value={state.title}
          name='title'
          style={{ width: 300, height: 30 }}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          required
        />
        <label htmlFor='context'>Context</label>
        <textarea
          type='text'
          name='context'
          style={{ width: 300, height: 300 }}
          onChange={(e) => setState({ ...state, context: e.target.value })}
          required
        />
        <button type='button' onClick={onClick}>
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Ask;
