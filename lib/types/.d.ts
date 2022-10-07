import { NextApiResponse } from "next";

export {};

declare global {
    interface MyNextApi extends NextApiResponse {
        session: {
            destroy: function,
            save: function,
            isLoggedIn: boolean,
            passport: {
                user: {
                    uuid: string,
                    name: string
                }
            }
        }
    }
}