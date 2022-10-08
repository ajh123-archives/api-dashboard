import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Project(project: any) {
  return (
    <React.Fragment>
      <Title>{""}</Title>
      <Typography component="p" variant="h6">
        {project.project.row.name}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
      <div>
        <Link color="primary" href={process.env.APP_BASE_URI+"/project/view?id="+project.project.row.client_id}>
          View project
        </Link>
      </div>
    </React.Fragment>
  );
}
