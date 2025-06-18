const environments = {
  api: process.env.REACT_PUBLIC_API_URL || 'http://localhost:4000/api',
  baseurl: process.env.REACT_PUBLIC_API_URL || 'http://localhost:4000',
  themeName : process.env.REACT_PUBLIC_THEME || 'default',
};

export default environments;
