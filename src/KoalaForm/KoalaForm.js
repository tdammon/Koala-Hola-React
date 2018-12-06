import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, FormControl, TextField, Radio} from '@material-ui/core';

class KoalaForm extends Component{

    state = {
        name: '',
        age: '',
        transfer: false,
        notes: ''
    }

    render(){
        return(
            <div>
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
                        <TextField
                        label="gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        />
                        <Radio
                        label="Yes"
                        name="transfer"
                        value= {true}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        />
                        <Radio
                        label="No"
                        name="transfer"
                        value= {false}
                        onChange={this.handleChange}
                        variant="outlined"
                        margin="normal"
                        required
                        />
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
                </FormGroup>
            </div>
        )
    }
}


const mapStateToProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(KoalaForm);