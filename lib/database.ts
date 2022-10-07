import Sequelize from "sequelize";
import storage from "./session";

const sequelize = new Sequelize.Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql'
    }
);

export const db = {
    sequelize: sequelize,
    connect:  function() {
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }
}

export async function props(contex: any) {
    const { req, res } = contex;
    await new Promise((resolve, reject) => {
        storage(req, res, function(){
            resolve(req.session);
        });
    });
    if (!req.session.isLoggedIn) {
        return { redirect: { destination: process.env.APP_BASE_URI+'/api/login', permanent: false } };
    }
  
    const axios = require('axios');
  
    return axios.get(
        process.env.APP_BASE_URI+'/api/projects',
        {
            withCredentials: true,
            headers: {cookie: req.headers.cookie} 
        }
    ).then(function (response: any){
        return {
            props: {
                user: req.session.passport.user,
                clients: response.data
            },
        };
    }).catch(function (error: any){
        console.error(error);
        return {
            props: {
                user: req.session.passport.user,
                clients: {}
            },
        };
    });
}