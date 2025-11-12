// =========================================
// =========================================
// =========================================

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';
import { authService } from '../src/services/api'; // Import API service

interface User {
  id: string;
  email: string;
  username?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
}

interface UserProfile {
  id: number;
  supabase_user_id: string;
  username: string;
  email: string;
  full_name: string;
  avatar_url: string | null;
  phone: string;
  bio: string;
  is_email_verified: boolean;
  last_login_ip: string;
  last_login_date: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  login: () => void;
  logout: () => Promise<void>;
  logoutAll: () => Promise<void>;
  isAuthenticated: boolean;
  isLoggingOut: boolean;
  djangoToken: string | null;
  sessionId: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [djangoToken, setDjangoToken] = useState<string | null>(
    localStorage.getItem('django-token')
  );
  const [sessionId, setSessionId] = useState<string | null>(
    localStorage.getItem('session-id')
  );

  // Google OAuth login
  const login = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  // Logout from current device
  const logout = async () => {
    try {
      setIsLoggingOut(true);

      // Call Django logout endpoint
      if (djangoToken && sessionId) {
        try {
          await authService.logout(djangoToken, sessionId);
        } catch (err) {
          console.warn('Backend logout call failed:', err);
        }
      }

      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Supabase signout error:', error);
      }

      // Clear local state
      setUser(null);
      setProfile(null);
      setDjangoToken(null);
      setSessionId(null);

      // Clear localStorage
      localStorage.removeItem('user-profile');
      localStorage.removeItem('django-token');
      localStorage.removeItem('session-id');
      localStorage.removeItem('supabase.auth.token');

      // Redirect to signin
      window.location.href = '/signin';
    } catch (error) {
      console.error('Logout failed:', error);
      window.location.href = '/signin';
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Logout from all devices
  const logoutAll = async () => {
    try {
      setIsLoggingOut(true);

      // Call Django logout-all endpoint
      if (djangoToken) {
        try {
          await authService.logoutAll(djangoToken);
        } catch (err) {
          console.warn('Backend logout-all call failed:', err);
        }
      }

      // Sign out from Supabase
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Supabase signout error:', error);
      }

      // Clear local state
      setUser(null);
      setProfile(null);
      setDjangoToken(null);
      setSessionId(null);

      // Clear localStorage
      localStorage.removeItem('user-profile');
      localStorage.removeItem('django-token');
      localStorage.removeItem('session-id');
      localStorage.removeItem('supabase.auth.token');

      // Redirect to signin
      window.location.href = '/signin';
    } catch (error) {
      console.error('Logout all failed:', error);
      window.location.href = '/signin';
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Handle OAuth callback - SENDS DATA TO BACKEND HERE
  // const handleCallback = async () => {
  //   try {
  //     // Get session from Supabase
  //     const { data, error } = await supabase.auth.getSession();

  //     if (error || !data.session) {
  //       console.error('OAuth callback error:', error);
  //       window.location.href = '/signin?error=auth_failed';
  //       return;
  //     }

  //     const session = data.session;
  //     const supabaseUser = session.user;

  //     // ========================================
  //     // SEND SUPABASE TOKENS TO DJANGO BACKEND
  //     // This is in: api/api.ts → authService.oauthCallback()
  //     // ========================================
  //     const backendData = await authService.oauthCallback(
  //       session.access_token,
  //       session.refresh_token || null
  //     );

  //     if (!backendData.success) {
  //       console.error('Backend returned error:', backendData);
  //       window.location.href = '/signin?error=backend_returned_error';
  //       return;
  //     }

  //     // Store tokens and session
  //     localStorage.setItem('django-token', backendData.token);
  //     localStorage.setItem('session-id', backendData.session_id);
  //     localStorage.setItem('user-profile', JSON.stringify(backendData.profile));

  //     // Update state
  //     setDjangoToken(backendData.token);
  //     setSessionId(backendData.session_id);
  //     setUser(supabaseUser as User);
  //     setProfile(backendData.profile);

  //     // Redirect to dashboard
  //     window.location.href = '/';
  //   } catch (err) {
  //     console.error('Callback error:', err);
  //     window.location.href = '/signin?error=callback_failed';
  //   }
  // };

// ✅ UPDATED handleCallback replaces old stale token storage

const handleCallback = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session) {
      window.location.href = '/signin?error=auth_failed';
      return;
    }

    const session = data.session;
    const supabaseUser = session.user;

    const backendData = await authService.oauthCallback(
      session.access_token,
      session.refresh_token || null
    );

    if (!backendData?.success || !backendData?.token) {
      window.location.href = '/signin?error=backend_returned_error';
      return;
    }

    // ✅ Correct token update
    localStorage.setItem('django-token', backendData.token);
    localStorage.setItem('session-id', backendData.session_id);
    localStorage.setItem('user-profile', JSON.stringify(backendData.profile));

    console.log('✅ Stored Django token:', backendData.token);

    setDjangoToken(backendData.token);
    setSessionId(backendData.session_id);
    setUser(supabaseUser as User);
    setProfile(backendData.profile);

    window.location.href = '/';
  } catch {
    window.location.href = '/signin?error=callback_failed';
  }
};


  // Fetch user profile from Django backend
  const fetchProfile = async (token?: string) => {
    try {
      const authToken = token || djangoToken || localStorage.getItem('django-token');

      if (!authToken) {
        console.warn('No auth token available');
        return;
      }

      const data = await authService.getProfile(authToken);
      setProfile(data);
      localStorage.setItem('user-profile', JSON.stringify(data));
    } catch (err) {
      console.error('Profile fetch error:', err);
    }
  };

  // Initialize auth on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (window.location.pathname === '/auth/callback') {
          // Handle OAuth callback
          await handleCallback();
        } else {
          // Check existing session
          const { data } = await supabase.auth.getUser();
          const token = localStorage.getItem('django-token');
          const cachedProfile = localStorage.getItem('user-profile');

          if (data?.user && token) {
            // User is logged in
            setUser(data.user as User);
            setDjangoToken(token);

            // Restore session ID
            const sessionId = localStorage.getItem('session-id');
            if (sessionId) setSessionId(sessionId);

            // Restore cached profile
            if (cachedProfile) {
              setProfile(JSON.parse(cachedProfile));
            }

            // Refresh profile from backend
            await fetchProfile(token);
          } else if (data?.user && !token) {
            // Supabase user exists but no Django token (edge case)
            console.warn('Supabase user exists but no Django token');
            await supabase.auth.signOut();
          }
        }
      } catch (err) {
        console.error('Auth init error:', err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const value: AuthContextType = {
    user,
    profile,
    loading,
    login,
    logout,
    logoutAll,
    isAuthenticated: !!user && !!djangoToken,
    isLoggingOut,
    djangoToken,
    sessionId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
