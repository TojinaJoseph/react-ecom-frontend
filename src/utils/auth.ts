export const getUserRole = (): string | null => {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    } catch {
      return null;
    }
  };