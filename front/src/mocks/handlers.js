import { rest } from 'msw';
import questionsData from './data/questions';

let mockData = [...questionsData];

export const handlers = [
  // Get All  Post
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),

  // Get Post By Content Id
  rest.get('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const matchIdData = mockData.find(
      ({ questionId }) => questionId === Number(id),
    );

    return res(ctx.status(200), ctx.json(matchIdData), ctx.delay());
  }),

  // Create New Post
  rest.post('/api/questions/ask', (req, res, ctx) => {
    mockData.unshift(req.body);

    return res(ctx.status(201), ctx.delay());
  }),

  // Access Request Cookies
  rest.post('/api/login', (req, res, ctx) => {
    const { authToken } = req.cookies;
    const { id } = req.body;

    console.log(id);

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

  // Get Filtered Items by Search
  rest.get('/api/search?q=:keyword', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('q').toUpperCase();

    const Filtered = mockData.filter((question) =>
      question.title.toUpperCase().includes(keyword),
    );

    return res(ctx.status(200), ctx.json(Filtered));
  }),

  // Update Vote Count

  rest.patch('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const status = req.body;
    const index = mockData.findIndex((data) => data.questionId === Number(id));
    const modified = { ...mockData[index], status };

    // console.log('id', id);
    // console.log('status', status);
    // console.log('modi', modified);

    mockData[index] = modified;

    return res(ctx.delay(), ctx.status(201), ctx.json(mockData));
  }),

  rest.delete('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;

    mockData = mockData.filter(
      (question) => question.questionId !== Number(id),
    );

    return res(ctx.status(204), ctx.delay());
  }),

  // Auth
];
