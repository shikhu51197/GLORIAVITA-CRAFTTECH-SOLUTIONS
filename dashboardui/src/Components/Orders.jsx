import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const orders = [
  { id: 1, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { id: 2, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered' },
  { id: 3, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { id: 4, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { id: 5, img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzI2NjB8MHwxfGFsbHwxfHx8fHx8fHwxNjQ0NzUyMTI4&ixlib=rb-1.2.1&q=80&w=400", customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },

];

const Orders = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered':
        return { color: 'green' };
      case 'Pending':
        return { color: 'orange' };
      case 'Cancelled':
        return { color: 'red' };
      default:
        return {};
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Profile</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <img src={order.img} alt={order.customer} style={{ width: 50, height: 50, marginRight: 10, borderRadius: '50%' }} />
              </TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell style={getStatusStyle(order.status)}>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Orders;