
import React, { useState, useMemo, useCallback } from 'react';
import { Game, Official, AvailabilityStatus, UserRole, PassPreference, GameStatus } from './types.ts';
import { INITIAL_GAMES, OFFICIALS, ADMIN_IDS } from './constants.ts';
import Header from './components/Header.tsx';
import ScheduleView from './components/ScheduleView.tsx';
import { AppContext } from './components/AppContext.ts';
import Login from './components/Login.tsx';
import ChangePasswordModal from './components/ChangePasswordModal.tsx';

export default function App() {
  const [games, setGames] = useState<Game[]>(INITIAL_GAMES);
  const [officials, setOfficials] = useState<Official[]>(OFFICIALS);
  const [loggedInUser, setLoggedInUser] = useState<Official | null>(null);
  
  // View role is tied to the logged-in user
  const [viewRole, setViewRole] = useState<UserRole>(UserRole.OFFICIAL);
  
  const handleLogin = (user: Official) => {
    setLoggedInUser(user);
    // When a user logs in, set their view role accordingly.
    // Admins default to Admin View, Officials are locked to Official View.
    if (ADMIN_IDS.includes(user.id)) {
      setViewRole(UserRole.ADMIN);
    } else {
      setViewRole(UserRole.OFFICIAL);
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };
  
  const isLoggedInUserAdmin = loggedInUser ? ADMIN_IDS.includes(loggedInUser.id) : false;

  const setAvailability = useCallback((gameId: string, officialId: string, status: AvailabilityStatus) => {
    setGames(prevGames =>
      prevGames.map(game => {
        if (game.id === gameId) {
          const newAvailability = { ...game.availability, [officialId]: status };
          return { ...game, availability: newAvailability };
        }
        return game;
      })
    );
  }, []);

  const assignOfficial = useCallback((gameId: string, role: string, officialId: string | null) => {
    setGames(prevGames =>
      prevGames.map(game => {
        if (game.id === gameId) {
          const newAssignments = { ...game.assignments, [role]: officialId };
          return { ...game, assignments: newAssignments };
        }
        return game;
      })
    );
  }, []);

  const updateGameStatus = useCallback((gameId: string, status: GameStatus) => {
    setGames(prevGames =>
      prevGames.map(game => {
        if (game.id === gameId) {
          return { ...game, status };
        }
        return game;
      })
    );
  }, []);

  const updatePassword = useCallback(async (officialId: string, oldPassword: string, newPassword: string): Promise<{ success: boolean; message: string; }> => {
    const official = officials.find(o => o.id === officialId);
    if (!official) {
        return { success: false, message: 'User not found.' };
    }
    if (official.password_DO_NOT_USE_IN_PRODUCTION !== oldPassword) {
        return { success: false, message: 'Incorrect current password.' };
    }

    setOfficials(prevOfficials => 
        prevOfficials.map(o => 
            o.id === officialId 
                ? { ...o, password_DO_NOT_USE_IN_PRODUCTION: newPassword, forcePasswordChange: false } 
                : o
        )
    );
    
    setLoggedInUser(prevUser => {
        if (prevUser && prevUser.id === officialId) {
            return { ...prevUser, password_DO_NOT_USE_IN_PRODUCTION: newPassword, forcePasswordChange: false };
        }
        return prevUser;
    });

    return { success: true, message: 'Password updated successfully!' };
  }, [officials]);

    const updateOfficialProfile = useCallback(async (officialId: string, profileData: Partial<Pick<Official, 'phone' | 'address' | 'email' | 'passPreference'>>): Promise<{ success: boolean; message: string; }> => {
        setOfficials(prevOfficials =>
            prevOfficials.map(o =>
                o.id === officialId
                    ? { ...o, ...profileData }
                    : o
            )
        );

        setLoggedInUser(prevUser => {
            if (prevUser && prevUser.id === officialId) {
                return { ...prevUser, ...profileData };
            }
            return prevUser;
        });

        return { success: true, message: 'Profile updated successfully!' };
    }, []);

  const addOfficial = useCallback(async (name: string, password: string): Promise<{ success: boolean; message: string; }> => {
    if (!name.trim() || !password.trim()) {
      return { success: false, message: 'Name and password cannot be empty.' };
    }
    
    if (officials.some(o => o.name.toLowerCase() === name.toLowerCase())) {
        return { success: false, message: 'An official with this name already exists.' };
    }

    const newOfficial: Official = {
        id: `o_${Date.now()}`,
        name,
        password_DO_NOT_USE_IN_PRODUCTION: password,
        email: '',
        phone: '',
        address: '',
        passPreference: PassPreference.DIGITAL,
        forcePasswordChange: true,
    };

    setOfficials(prevOfficials => [...prevOfficials, newOfficial]);

    setGames(prevGames =>
        prevGames.map(game => ({
            ...game,
            availability: {
                ...game.availability,
                [newOfficial.id]: AvailabilityStatus.PENDING,
            },
        }))
    );
    
    return { success: true, message: 'Official added successfully!' };
  }, [officials]);

  const removeOfficial = useCallback(async (officialId: string): Promise<{ success: boolean; message: string; }> => {
    if (!officials.some(o => o.id === officialId)) {
        return { success: false, message: 'Official not found.' };
    }

    if (ADMIN_IDS.includes(officialId)) {
        const adminCount = officials.filter(o => ADMIN_IDS.includes(o.id)).length;
        if (adminCount <= 1) {
            return { success: false, message: 'Cannot remove the last administrator.' };
        }
    }
    
    setOfficials(prevOfficials => prevOfficials.filter(o => o.id !== officialId));

    setGames(prevGames =>
        prevGames.map(game => {
            const newAvailability = { ...game.availability };
            delete newAvailability[officialId];

            const newAssignments = { ...game.assignments };
            Object.keys(newAssignments).forEach(role => {
                if (newAssignments[role] === officialId) {
                    newAssignments[role] = null;
                }
            });

            return {
                ...game,
                availability: newAvailability,
                assignments: newAssignments,
            };
        })
    );
    
    return { success: true, message: 'Official removed successfully!' };
  }, [officials]);


  const contextValue = useMemo(() => {
      if (!loggedInUser) return null;
      return {
        games,
        officials,
        currentUser: loggedInUser,
        viewRole,
        setAvailability,
        assignOfficial,
        updatePassword,
        addOfficial,
        removeOfficial,
        updateOfficialProfile,
        updateGameStatus,
      }
  }, [games, officials, loggedInUser, viewRole, setAvailability, assignOfficial, updatePassword, addOfficial, removeOfficial, updateOfficialProfile, updateGameStatus]);

  if (!loggedInUser || !contextValue) {
      return <Login onLogin={handleLogin} officials={officials} games={games} />;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-icedogs-black font-sans">
        <Header 
            currentUser={loggedInUser} 
            onLogout={handleLogout} 
            viewRole={viewRole} 
            setViewRole={setViewRole} 
            isCurrentUserAdmin={isLoggedInUserAdmin}
            games={games}
            officials={officials}
        />
        <main className="p-4 sm:p-6 lg:p-8">
          <ScheduleView />
        </main>
        {loggedInUser.forcePasswordChange && (
            <ChangePasswordModal
                isOpen={true}
                onClose={() => {}} // Non-closable by design
                isForced={true}
            />
        )}
      </div>
    </AppContext.Provider>
  );
}