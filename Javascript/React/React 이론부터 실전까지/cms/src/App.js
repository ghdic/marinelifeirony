import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'marine',
  'birthday':'19960728',
  'gender':'man',
  'job':'student'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'justin bibu',
  'birthday':'20170728',
  'gender':'man',
  'job':'baby'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/any',
  'name': 'jane',
  'birthday':'19961111',
  'gender':'female',
  'job':'professor'
}
]

class App extends Component{
  render(){
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/> ); }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles) (App);
