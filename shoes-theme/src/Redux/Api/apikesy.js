



export const apikesy = () => {
    const username = import.meta.env.VITE_USERNAME_KEY;
    const password = import.meta.env.VITE_PASSWORD_KEY;
    const auth = btoa(`${username}:${password}`);
    return auth;
  };
  
