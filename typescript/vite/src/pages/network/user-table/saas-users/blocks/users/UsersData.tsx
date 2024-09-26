interface IUsersData {
  user: {
    avatar: string;
    name: string;
    email: string;
  },

  labels: string[]; 
  license: {
    type: string;
    left: string;
  },
  payment: string;
  enforce: boolean;
}

const UsersData: IUsersData[] = [

  {
    user: {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
    },
    labels: ['NFT', 'Artwork', 'Widget'],
    license: {
      type: 'Premium',
      left: '4 months left'
    },
    payment: '6 Aug, 2024',
    enforce: true
  },
  {
    user: {
      avatar: '300-1.png',
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
    },
    labels: ['Design', 'Template'],
    license: {
        'type': 'Trial',
        'left': '16 days left'
    },
    payment: '21 Apr, 2024',
    enforce: false
  },
  {
    user: {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
    },
    labels: ['App', 'Plugin'],
    license: {
        type: 'Premium',
        left: '2 months left'
    },
    payment: '14 Mar, 2024',
    enforce: true
  },
  {
    user: {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
    },
    labels: ['Template', 'NFT'],
    license: {
        type: 'Standard',
        left: ''
    },
    payment: '20 Apr, 2024',
    enforce: true
  },
  {
    user: {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      email: 'leslie.alexander@gmail.com',
    },
    labels: ['Artwork', 'App'],
    license: {
        type: 'Premium',
        left: '6 months left'
    },
    payment: '29 Jan, 2024',
    enforce: false
  },
  {
    user: {
      avatar: '300-4.png',
      name: 'Robert Fox',
      email: 'robert.fox@gmail.com',
    },
    labels: ['Design', 'Widget'],
    license: {
        type: 'Trial',
        left: '5 days left'
    },
    payment: '17 Mar, 2024',
    enforce: false
  },
  {
    user: {
      avatar: '300-20.png',
      name: 'Guy Hawkins',
      email: 'guy.hawkins@gmail.com',
  },
    labels: ['Plugin', 'Artwork'],
    license: {
        type: 'Standard',
        left: ''
    },
    payment: '20 Jul, 2024',
    enforce: false
  },
  {
    user: {
      avatar: '300-23.png',
      name: 'Theresa Webb',
      email: 'theresa.webb@gmail.com',
    },
    labels: ['NFT', 'Template'],
    license: {
        type: 'Trial',
        left: '2 days left'
    },
    payment: '06 May, 2024',
    enforce: true
  },
  {
    user: {
      avatar: '300-22.png',
      name: 'Marvin McKinney',
      email: 'marvin.mckenney@gmail.com',
    },
    labels: ['Widget', 'App'],
    license: {
        type: 'Premium',
        left: '1 months left'
    },
    payment: '16 Apr, 2024',
    enforce: true
  },
  {
    user: {
      avatar: '300-18.png',
      name: 'Ronald Richards',
      email: 'ronald.richards@gmail.com',
    },
    labels: ['Artwork', 'Design', 'Plugin'],
    license: {
        type: 'Premium',
        left: '3 months left'
    },
    payment: '15 Jun, 2024',
    enforce: false
  },
  {
    user: {
      avatar: '300-6.png',
      name: 'William Wilson',
      email: 'william.wilson@gmail.com',
    },
    labels: ['App', 'Design'],
    license: {
        type: 'Trial',
        left: '10 days left'
    },
    payment: '28 Jul, 2024',
    enforce: true
  }
];

export { UsersData, type IUsersData };