import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Project(project: any) {
  return (
    <React.Fragment>
      <Title>{""}</Title>
      <Typography component="p" variant="h6">
        {project.project.row.name}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {project.project.row.grant_types}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View project
        </Link>
      </div>
    </React.Fragment>
  );
}
