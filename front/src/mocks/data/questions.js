// questions table

const questionsData = [
  {
    contentId: 1,
    userId: 12345,
    title:
      'Inquirer will not wait to select in async function, JavascriptInquirer will not wait to select in async function,',
    author: 'keonhee Lee',
    createdAt: '2022-10-27',
    tags: ['javascript', 'react'],
    status: {
      votes: 10,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context: `<h3>this question is pretty much out of context tho <br></h3><p>skladjklzcxxz</p><h2><br></h2><div contenteditable="false"><hr><code>const html = '21'</code></div><p><strong>lkjdslfjsdlkf</strong></p><p><br></p><p>sadkljzxclkjxzldeasdm,nsadqw</p>`,
    },
    upVotedUsers: [312],
    downVotedUsers: [],
    answers: [
      {
        answerId: 1,
        author: 'John doe',
        userId: 1231244,
        createdAt: '2022-1-17',
        content: {
          image: 'url',
          context: `<span>힘드렁<strong>심드렁</strong></span>`,
        },
        status: {
          votes: 3,
          answers: 2,
          views: 99,
        },
        tags: ['MoCkDaDa', 'Angel Di Maria'],
        upVotedUsers: [],
        downVotedUsers: [],
      },
      {
        answerId: 2,
        author: 'wowzer',
        userId: 1231244,
        createdAt: '2012-10-27',
        content: {
          image: 'url',
          context: `<span>심드렁<strong>힘드렁</strong></span>`,
        },
        status: {
          votes: 32,
          answers: 11,
          views: 9,
        },
        tags: ['MoCkDaDa', 'Leo Messi'],
        upVotedUsers: [],
        downVotedUsers: [],
      },
    ],
  },
  {
    contentId: 2,
    userId: 12343,
    title:
      'instead of finding flutter-debug.aar gradle try to find flutter-debug.jar',
    author: 'dameun Choi',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'flutter'],
    status: {
      votes: 3,
      answers: 2,
      views: 23,
    },
    content: {
      image: 'url',
      context:
        'instead of finding flutter-debug.aar gradle try to find flutter-debug.ja',
      code: `<div>code</div>`,
    },
    upVotedUsers: [],
    downVotedUsers: [],
    answers: [
      {
        answerId: 1213,
        author: 'Jodsxchn doe',
        userId: 12341244,
        createdAt: '2021-1-17',
        content: {
          image: 'url',
          context: `<span>ow<strong>sdzczxcx</strong></span>`,
        },
        status: {
          votes: 3,
          answers: 21,
          views: 39,
        },
        tags: ['MoCkDaDa', 'Angel Di Maria'],
        upVotedUsers: [],
        downVotedUsers: [],
      },
      {
        answerId: 2,
        author: 'wowsdzer',
        userId: 1231244,
        createdAt: '2012-10-27',
        content: {
          image: 'url',
          context: `<span>심드렁<strong>힘드렁</strong></span>`,
        },
        status: {
          votes: 2,
          answers: 11,
          views: 94,
        },
        tags: ['MoCksdDaDa', 'Leo Messi'],
        upVotedUsers: [],
        downVotedUsers: [],
      },
    ],
  },
  {
    contentId: 3,
    userId: 123435,
    title: 'How to get server time with KOA js',
    author: 'wontae Cho',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'ui'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'How can I get the server time with KOA js? I know how to get the time from the users PC but I need to get the actual server time.',
      code: `<div>djaksdlasjd<p>djkjda</p> <strong>asdlaksjhda</strong></div>`,
    },
  },
  {
    contentId: 4,
    userId: 1232345,
    title: 'where to find my wallet',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 5,
    userId: 1232345,
    title: 'Rails includes for self-referential associations',
    author: 'God G',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 6,
    userId: 1232345,
    title: 'How to subset rows of df based on unique values?',
    author: 'yun jae Hwang',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 7,
    userId: 1232345,
    title: 'How to implement Individual Column Searching using checkboxes?',
    author: 'young un Oh',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 8,
    userId: 1232345,
    title:
      'Why the font color setting button does not shown in Ckeditor4 Tool bar',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 9,
    userId: 1232345,
    title: 'where to find my wallet',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 10,
    userId: 1232345,
    title: 'How to do two conditions in same if statement? c++',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 11,
    userId: 12312345,
    title:
      'is there another way to print an output to the user without using console.log? [duplicate]',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 12,
    userId: 12323345,
    title: 'How to print the api response to the console? Xcode 14',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 13,
    userId: 12322345,
    title: 'OAuth2.0 and Custom Account Creation with PostgreSQL',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 14,
    userId: 123122345,
    title: 'Matrix size in Back Propagation',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
  {
    contentId: 15,
    userId: 12322345,
    title: 'Run flask application on linux server with nohup',
    author: 'anonymous',
    createdAt: '2022-01-20',
    tags: ['javascript', 'react', 'money'],
    status: {
      votes: 0,
      answers: 1,
      views: 2,
    },
    content: {
      image: 'url',
      context:
        'In the void tampil or results section to display the final result of my program, there is a problem because the result is always repeated without stopping continuously. how to solve a problem like that? Ive tried to fix it but havent found a solution',
      code: `<div>code</div>`,
    },
  },
];

export default questionsData;
