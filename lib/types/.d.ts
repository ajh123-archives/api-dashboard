export {};

interface Session {
    
}

declare global {
    namespace Next {
        interface NextApiResponse<> {
            session: Session
        }
    }
}