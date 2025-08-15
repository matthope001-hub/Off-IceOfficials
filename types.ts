import React from 'react';

export enum AvailabilityStatus {
  AVAILABLE = 'Available',
  UNAVAILABLE = 'Unavailable',
  PENDING = 'Pending',
}

export enum UserRole {
  ADMIN = 'Admin',
  OFFICIAL = 'Official',
}

export enum PassPreference {
    PHYSICAL = 'Physical',
    DIGITAL = 'Digital',
}

export enum GameStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  OFFICIAL = 'Official',
}

export interface Official {
  id: string;
  name: string;
  password_DO_NOT_USE_IN_PRODUCTION: string;
  phone?: string;
  address?: string;
  email?: string;
  passPreference?: PassPreference;
  forcePasswordChange?: boolean;
}

export interface Game {
  id: string;
  date: string;
  opponent: string;
  time: string;
  opponentLogo: string;
  status: GameStatus;
  availability: {
    [officialId: string]: AvailabilityStatus;
  };
  assignments: {
    [role: string]: string | null; // officialId or null
  };
}

export interface AppContextType {
    games: Game[];
    officials: Official[];
    currentUser: Official;
    viewRole: UserRole;
    setAvailability: (gameId: string, officialId: string, status: AvailabilityStatus) => void;
    assignOfficial: (gameId: string, role: string, officialId: string | null) => void;
    updatePassword: (officialId: string, oldPassword: string, newPassword: string) => Promise<{ success: boolean; message: string; }>;
    addOfficial: (name: string, password: string) => Promise<{ success: boolean; message: string; }>;
    removeOfficial: (officialId: string) => Promise<{ success: boolean; message: string; }>;
    updateOfficialProfile: (officialId: string, profileData: Partial<Pick<Official, 'phone' | 'address' | 'email' | 'passPreference'>>) => Promise<{ success: boolean; message: string; }>;
    updateGameStatus: (gameId: string, status: GameStatus) => void;
}