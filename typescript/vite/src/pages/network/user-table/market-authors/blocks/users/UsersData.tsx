interface IUsersData {
  user: {
    avatar: string;
    userName: string;
    description: string;
  };
  total: string;
  team: { 
    logo: string;
    label: string;
  }; 
  products: string;
  rating: {
    value: number;  
    round: number;  
  };
}

const UsersData: IUsersData[] = [
  {
    user: {
      avatar: '300-3.png',
      userName: 'Tyler Hero',
      description: 'IT Consultant'
    }, 
    total: '$27,456.09',
    team: { 
      logo: 'weave.svg',   
      label: 'Tech Titans',     
    },
    products: '905',
    rating: {'value': 3, 'round': 0.5}
  }, 
 
   
];

export { UsersData, type IUsersData };
