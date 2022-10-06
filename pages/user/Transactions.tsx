import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  amount: number,
) {
  return { id, date, name, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Asda',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Tesco',
    866.99,
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Morrisons',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Lidil',
    212.79,
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Transactions() {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{`- $${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more transactions
      </Link>
    </React.Fragment>
  );
}
