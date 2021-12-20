export const Posts = [
  {
    id: '1',
    userId: '1',
    author: 'Gianluigi Trontini',
    date: '10',
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    media: 'ascoli-piazza.jpg',
    likes: ['2'],
    comments: [
      {
        userId: '2',
        author: 'Lisa Sympsown',
        content: "Che bella la piazza! Peró non c'é nessuno o sbaglio?",
      },
      {
        userId: '1',
        author: 'Gianluigi Trontini',
        content: 'Eh giá, sempre cosí purtroppo',
      },
    ],
  },
  {
    id: '2',
    userId: '2',
    author: 'Lisa Sympsown',
    date: '15',
    content:
      "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    likes: ['3', '1'],
    comments: [],
  },
  {
    id: '3',
    userId: '3',
    author: 'Tonya Hellow',
    date: '20',
    content:
      'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. ',
    likes: ['2'],
    comments: [],
  },
  {
    id: '4',
    userId: '2',
    author: 'Lisa Sympsown',
    date: '20',
    content:
      'Just another brick in the wall! I cannot believe that Mark Zuckerberg wanted to use that song. Mpf.',
    likes: [],
    comments: [],
  },
];

export const universityClass = [{ name: 'design-1', students: ['1', '3'] }];

export const Users = [
  {
    id: '1',
    profilePicture: '/assets/uploaded/profile/profile-avatar.jpg',
    username: 'Gianluigi Trontini',
    universityClass: ['design-1'],
  },
  {
    id: '2',
    profilePicture: '/assets/uploaded/profile/profile-1.jpg',
    username: 'Lisa Sympsown',
    universityClass: ['arch-1'],
  },
  {
    id: '3',
    profilePicture: '/assets/uploaded/profile/profile-2.jpg',
    username: 'Tonya Hellow',
    universityClass: ['design-1'],
  },
];
export const Friends = {};

export const Class = {};
