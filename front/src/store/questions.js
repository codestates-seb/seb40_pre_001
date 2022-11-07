import { atom } from 'recoil';

const questions = atom({
  key: 'questions',
  default: {
    title: '',
    questionsUp: '',
    questionsDown: '',
    tags: [],
    author: '',
  },
});

export { questions };
