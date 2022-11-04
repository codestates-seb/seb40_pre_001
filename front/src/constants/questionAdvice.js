const QUESTION_ADVICE = Object.freeze([
  {
    TITLE: 'Writing a good title',
    SCRIPT: `Your title should summarize the problem.
      ${' '}You might find that you have a better idea of your title after writing out the rest of the question.`,
  },
  {
    TITLE: 'Introduce the problem',
    SCRIPT:
      'Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.',
  },
  {
    TITLE: 'Expand on the problem',
    SCRIPT:
      'Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.        Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example.       Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.',
  },
  {
    TITLE: 'Adding tags',
    SCRIPT:
      'Tags help ensure that your question will get attention from the right people. Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used. Learn more about tagging',
  },
]);

export default QUESTION_ADVICE;
