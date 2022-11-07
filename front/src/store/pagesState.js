import { atom } from 'recoil';

const pagesState = atom({
  key: 'pagesState',
  default: {
    selectedLimit: 15,
    currentPage: 1,
    postsLength: 0,
    currentQuestionId: null,
    keyword: '',
  },
});

const filterState = atom({
  key: 'filterState',
  default: 'Newest',
});

export { pagesState, filterState };
