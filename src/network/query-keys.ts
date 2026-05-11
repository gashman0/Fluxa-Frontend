

const queryKeys = {
    auth: {
        checkAuth: ['auth', 'checkAuth'] as const,
    },
    users: {
        getUsers: ['users', 'getUsers'] as const,
        getMe: ['me', 'getMe'] as const,
    }
}

export default queryKeys;