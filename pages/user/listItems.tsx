import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SaveIcon from '@mui/icons-material/Save';

interface Client {
  client_id: string,
  client_secret: string,
  redirect_uri: string,
  grant_types: string|null,
  scope: string|null,
  user_id: string,
  name: string,
}

interface ListMenuProps {
  data: [Client]
}


export default function ListMenu(props: ListMenuProps) {
  return (
    <List component="nav">
      <React.Fragment>
        <a href={process.env.APP_BASE_URI+"/user/Dashboard"}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Projects Dashboard" />
          </ListItemButton>
        </a>
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          Projects
        </ListSubheader>
          {props.data.map((row: Client) => (
            <a href={process.env.APP_BASE_URI+"/project/view?id="+row.client_id}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary={row.name} />
              </ListItemButton>
            </a>
          ))}
      </React.Fragment>
      <Divider sx={{ my: 1 }} />
      <React.Fragment>
        <ListSubheader component="div" inset>
          Services
        </ListSubheader>
        {/* <a href="https://minersonline.tk"> */}
          <ListItemButton>
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText primary="Data Store Engine" />
          </ListItemButton>
        {/* </a> */}
      </React.Fragment>
    </List>
  )
}