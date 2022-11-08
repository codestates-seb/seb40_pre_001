import { atom } from 'recoil';

const questions = atom({
  key: 'questions',
  default: {
    title: '',
    questionsUp: '',
    questionsDown: '',
    tags: [{ tagId: 'javascript' }, { tagId: 'java' }],
    author: '',
  },
});

export { questions };
