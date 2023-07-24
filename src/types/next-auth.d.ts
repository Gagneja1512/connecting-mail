import { JWT } from "next-auth/jwt"
import { Session , User } from "next-auth"

type UserID = string

declare module 'next-auth/jwt' {
    interface JWT {
        id : UserID
    }
}

declare module 'next-auth' {
    interface Session {
        user : User & {
            id : UserID
        }
    }
}