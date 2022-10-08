import * as React from 'react';
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import Project from '../../lib/objects/Project';
import Title from '../../lib/objects/Title';

import Page from '../../lib/objects/Page'
import {PageData} from '../../lib/objects/Page'

import {props} from "../../lib/database";


export async function getServerSideProps(contex: any): Promise<{ props: PageData; }>{
  return await props(contex);
}

const DashboardContent: NextPage = (props: PageData) => {
  return (
    <Page data={props} title="Project Dashboard">
      <Grid container spacing={3}>
        {/* Projects */}
        {props.clients.map((row) => (
          <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Project project={{row}}/>
          </Paper>
        </Grid>
        ))}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <React.Fragment>
              <Title>{""}</Title>
              <Typography component="p" variant="h6">
                Add project
              </Typography>
              <AddIcon style={{verticalAlign:"middle"}}/>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}

export default DashboardContent;
