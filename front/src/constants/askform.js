const ASK_FORM = Object.freeze([
  {
    TITLE: 'Title',
    SCRIPT:
      'Be specific and imagine you’re asking a question to another person.',
    BUTTON: false,
  },
  {
    TITLE: 'What are the details of your problem?',
    SCRIPT:
      'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
    BUTTON: true,
  },
  {
    TITLE: 'What did you try and what were you expecting?',
    SCRIPT:
      'Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.',
    BUTTON: true,
  },
  {
    TITLE: 'Tags',
    SCRIPT:
      'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
    BUTTON: true,
  },
]);

export default ASK_FORM;
