import { rest } from 'msw';
import questionData from './data/questions';

export const handlers = [
  //
  rest.get('/api/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questionData));
  }),

  rest.get('/api/questions/:id', (req, res, ctx) => {
    const { id } = req.params;
    const matchIdData = questionData.find(
      ({ contentId }) => contentId === Number(id),
    );

    return res(ctx.status(200), ctx.json(matchIdData), ctx.delay());
  }),
];
