import { rest } from 'msw';
import questionData from './data/questions';
import tagsData from './data/tags';
import usersData from './data/users';

export const handlers = [
  // Get All  Post
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questionData));
  }),

  // Get Post By Content Id
  rest.get('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const matchIdData = questionData.find(
      ({ contentId }) => contentId === Number(id),
    );

    return res(ctx.status(200), ctx.json(matchIdData), ctx.delay());
  }),

  // Create New Post
  rest.post('/api/questions/ask', (req, res, ctx) => {
    questionData.unshift(req.body);

    return res(ctx.status(201), ctx.delay());
  }),

  // Access Request Cookies
  rest.post('/api/login', (req, res, ctx) => {
    const { authToken } = req.cookies;
    const { id } = req.body;

    if (authToken === id) {
      return res(
        ctx.delay(),
        ctx.json({
          id: 'mock1234',
          username: 'mock 유저',
        }),
      );
    }
    return res(
      ctx.delay(),
      ctx.json({ message: 'Failed to Authenticate' }),
      ctx.status(403),
    );
  }),

  // Update Vote Count

  rest.put('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;

    console.log(req.body);
    const votes = req.body;

    const question = questionData.find(
      (question) => question.contentId === Number(id),
    );

    if (question === undefined) {
      throw new Error('글을 찾을수 없습니다.');
    }

    question.status.votes = votes;

    return res(ctx.status(200));
  }),

  // login

  // response Cookies
  rest.get('/api/login', (req, res, ctx) => {
    return res(ctx.delay(), ctx.cookie('authToken', 'mock1234'));
  }),

  // GitHub Auth
  rest.get('/api/auth/github', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Tags
  rest.get('/api/tags', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tagsData));
  }),

  //users
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersData));
  }),
];
