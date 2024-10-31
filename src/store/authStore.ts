import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // In production, replace with actual API call
    if (email === 'admin@example.com' && password === 'admin123') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));