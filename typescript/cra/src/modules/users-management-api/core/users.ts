interface Data {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: 'Banned' | 'Active';
}

function createData(
  id: number,
  name: string,
  company: string,
  role: string,
  verified: boolean,
  status: 'Banned' | 'Active'
): Data {
  return {
    id,
    name,
    company,
    role,
    verified,
    status
  };
}

const rowsData = [
  createData(1, 'Sahil Shepard', 'Google', 'Frontend Developer', true, 'Active'),
  createData(2, 'Kayla Friedman', 'Apple', 'Frontend Developer', false, 'Active'),
  createData(3, 'Bibi Petersen', 'Facebook', 'Backend Developer', true, 'Active'),
  createData(4, 'Emma Mejia', 'Netflix', 'Project Manager', true, 'Active'),
  createData(5, 'Kara Briggs', 'Amazon', 'Director', true, 'Active'),
  createData(6, 'Juliet Mercado', 'Microsoft', 'Frontend Developer', true, 'Active'),
  createData(7, 'Yusuf Clayton', 'AMD', 'Sales Manager', false, 'Banned'),
  createData(8, 'Thalia Luna', 'Intel', 'Frontend Developer', true, 'Banned'),
  createData(9, 'Hanna Burke', 'Ubisoft', 'Project Manager', true, 'Active'),
  createData(10, 'Isabelle Obrien', 'Nvidio', 'Full stack developer', false, 'Active'),
  createData(11, 'Aaliyah Hicks', 'Binance', 'Sales Manager', true, 'Active'),
  createData(12, 'Darcie Church', 'Accenture', 'Sales Manager', true, 'Banned'),
  createData(13, 'Mahdi Harris', 'Tesla', 'Project Manager', false, 'Banned')
];

export { type Data, createData, rowsData };
