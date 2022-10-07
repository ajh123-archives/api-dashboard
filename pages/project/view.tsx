import * as React from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Page from '../Page'

import {props} from "../../lib/database";


export async function getServerSideProps(contex: any) {
  return props(contex)
}

const ViewProject: NextPage = (props) => {
    const router = useRouter()
    const my_id = router.query;

    return (
        <Page data={props} title="View Project">
            {props.clients.map((row) => {
                if (row.client_id == my_id.id) {
                    return (
                        <React.Fragment>
                            <Paper>
                                <Typography component="p" variant="h6">
                                {row.name}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Client ID: {row.client_id}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Client Secret: {row.client_secret}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Redirect URI: {row.redirect_uri}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Grant Types: {row.grant_types}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Scopes: {row.scope}
                                </Typography>
                                <Typography color="text.secondary" sx={{ flex: 1 }}>
                                Owner User ID: {row.user_id}
                                </Typography>
                            </Paper>
                      </React.Fragment>
                    )
                }
            })}
        </Page>
    );
}

export default ViewProject;
