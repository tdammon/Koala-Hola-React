import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    containers: {
        display: 'flex',
        justifyContent: 'center',
    },
    table: {
        width: 750,
        marginTop: 40,
        margin: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    header: {
        fontSize: 18,

    }
})

class KoalaList extends Component {
  state = {
  
  };

      componentDidMount() {
          this.getKoalas();
      }

      getKoalas = () => {
              this.props.dispatch({
                  type: 'GET_KOALAS'
              });
            }

    renderTransferBtn = (koala) => {
        if(koala) {
            return (<p>true</p>)
        } else {
            return (<Button>Transfer</Button>)
        }
        
    }

  

  render() {
      const {classes} = this.props
    return (
      <div>
     
        <Paper className={classes.table} >
        <Table >
          <TableHead>
            <TableRow >
              <TableCell className={classes.header}>Name</TableCell>
              <TableCell className={classes.header}>Gender</TableCell>
              <TableCell className={classes.header}>Age</TableCell>
              <TableCell className={classes.header}>Ready For Transfer</TableCell>
            <TableCell className={classes.header}>Notes</TableCell>
            </TableRow>
          </TableHead>
        {this.props.reduxState.map(koala => {
          return(
            <TableRow className={classes.row} key={koala._id} >
              <TableCell>{koala.name}</TableCell>
              <TableCell>{koala.gender}</TableCell>
              <TableCell>{koala.age}</TableCell>
               <TableCell style={{textAlign: 'center'}}>{this.renderTransferBtn(koala.readyForTransfer)}</TableCell>
                <TableCell>{koala.notes}</TableCell>
            </TableRow>
          )
        })}
        
        </Table>
        </Paper>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(withStyles(styles)(KoalaList));
