import { NextApiRequest, NextApiResponse } from "next";
import passport from "../../lib/passport-miners-auth";
import nextConnect from "next-connect";
import storage from "../../lib/session";
import Project from "../../lib/models/projects";
import { db } from "../../lib/database";


export default nextConnect()
    .use(storage)
    .use(passport.initialize())
    .use(passport.session())
    .get(
    (req: NextApiRequest & { user: any }, res: NextApiResponse) => {
        db.connect()

        db.sequelize.sync().then(() => {
            console.log('Tables created successfully!');
            console.log(req.session)
            if (req.session != null){
                if (req.session.isLoggedin){
                    Project.findAll({
                        where: {
                          user_id: req.session.passport.user.uuid
                        }
                      }).then(result => {
                        res.send(result)
                    }).catch((error) => {
                        console.error('Failed to retrieve data : ', error);
                        res.send({"error": "Failed to retrieve data"})
                    });
                } else {
                    res.send({"error": "Not logged in"})
                }
            } else {
                res.send({"error": "Invalid session"})
            }
        }).catch((error) => {
            console.error('Unable to create table : ', error);
            res.send({"error": "Unable to update database"})
        });
    }
);