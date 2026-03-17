interface AuthState {
    isSignedIn: boolean,
    username: string | null,
    userId: string | null,
}

type AuthContextType = {
    isSignedIn: boolean,
    username: string | null,
    userId: string | null,
    refreshAuth: () => Promise<boolean>,
    signIn: () => Promise<boolean>,
    signOut: () => Promise<boolean>,
}