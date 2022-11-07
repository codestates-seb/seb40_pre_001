const ASK_FORM = Object.freeze([
  {
    TITLE: 'Title',
    SCRIPT:
      'Be specific and imagine you’re asking a question to another person.',
    INDEX: 1,
    BUTTON: true,
    MARKDOWN: false,
    PLACEHOLDER:
      'e.g. Is there an R function for finding the index of an element in a vector?',
    TYPE: 'title',
  },
  {
    TITLE: 'What are the details of your problem?',
    SCRIPT:
      'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
    INDEX: 2,
    BUTTON: false,
    MARKDOWN: true,
    TYPE: 'contextUp',
  },
  {
    TITLE: 'What did you try and what were you expecting?',
    SCRIPT:
      'Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.',
    INDEX: 3,
    BUTTON: false,
    MARKDOWN: true,
    TYPE: 'contextDown',
  },
  {
    TITLE: 'Tags',
    SCRIPT:
      'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
    INDEX: 4,
    BUTTON: false,
    MARKDOWN: false,
    PLACEHOLDER: 'e.g. (objective-c json asp.net)',
    TYPE: 'tags',
  },
]);

export default ASK_FORM;
