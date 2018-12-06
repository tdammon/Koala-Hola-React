import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, FormControlLabel, TextField, Radio, Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styling = theme => ({
   sizeForm: {
      width: 800,
      margin: "auto"
   }
})

const koalaInfo = {
   name: '',
   age: 0,
   gender: null,
   readyForTransfer: null,
   notes: ''
}

class KoalaForm extends Component{

    state = koalaInfo

    handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      this.props.dispatch({ type: 'ADD_KOALA', payload: this.state});
   }

    render(){
        
      const {classes} = this.props;
      
      return(
            <div>
               <h1>Add Koala</h1>
               <form onSubmit={this.handleSubmit} className={`${classes.sizeForm} ${classes.margin}`}>
                  <FormGroup>
                     <FormControl>
                           <TextField
                           label="name"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleChange}
                           variant="outlined"
                           margin="normal"
                           required
                           />
                           <TextField
                           label="age"
                           name="age"
                           value={this.state.age}
                           onChange={this.handleChange}
                           variant="outlined"
                           margin="normal"
                           required
                           />
                           <div className="gender">
                              <label htmlFor="male">Male</label>
                              <Radio
                                    className="male"
                                    name="gender"
                                    value="male"
                                    checked={this.state.gender === "male"}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                 />
                              <label htmlFor="female">Female</label>
                              <Radio
                                    className="female"
                                    name="gender"
                                    value="female"
                                    checked={this.state.gender === "female"}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                              />
                           </div>
                           <div className="transfer">
                              <label htmlFor="yes">Yes</label>
                              <Radio
                                    className="yes"
                                    name="readyForTransfer"
                                    value="true"
                                    checked={this.state.readyForTransfer === "true"}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                              />
                              <label htmlFor="no">No</label>
                              <Radio
                                    className="no"
                                    name="readyForTransfer"
                                    value="false"
                                    checked={this.state.readyForTransfer === "false"}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                              />
                           </div>
                           <TextField
                           label="notes"
                           name="notes"
                           value={this.state.notes}
                           onChange={this.handleChange}
                           variant="outlined"
                           margin="normal"
                           required
                           />
                     </FormControl>
                     <Button type="submit" variant="contained">Submit</Button>
                  </FormGroup>
                </form>
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styling)(KoalaForm));