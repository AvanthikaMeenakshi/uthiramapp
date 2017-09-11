import React, {Component, PropTypes} from 'react';
import Validation from 'react-validation';
import "../validation.js";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';

export default class Registration extends Component {
    render() {
        var options = [
          { value: '', label: 'Choose your city' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
        ];
        console.log(this.props.route.server_url)
        return (
            <div className="container">
                <Validation.components.Form >
                <h3>Registration</h3>
                <div>
                    <b>First Name*</b>
                    <Validation.components.Input className="form-control" value='' placeholder='John' name='fname' validations={['required']}/>
                </div>
                <div>
                    <b>Last Name*</b>
                    <Validation.components.Input className="form-control" value='' placeholder='Doe' name='lname' validations={['required']}/>
                </div>
                <div>
                    <b>Email*</b>
                    <Validation.components.Input className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                </div>
                <div>
                    <b>Age*</b>
                    <Validation.components.Input className="form-control" value='' placeholder='20' name='number' validations={['required', 'number']}/>
                </div>
                <div>
                    <b>Gender*</b>
                    <label className="radio-inline"><Validation.components.Input value='F' type="radio" id="female" name="gender" validations={['required']} />Female</label>
                    <label className="radio-inline"><Validation.components.Input value='M' type="radio" id="male" name="gender" validations={['required']}  />Male</label>
                </div>
                <div>
                    <b>Password*</b>
                    <Validation.components.Input className="form-control" type='password' value='' name='password' validations={['required', 'password']}/>
                </div>
                <div>
                    <b>Password Confirm*</b>
                    <Validation.components.Input className="form-control" type='password' value='' name='passwordConfirm' validations={['required', 'password']}/>
                </div>
                <div>
                    <b>Phone Number*</b>
                    <IntlTelInput 
                        css={['intl-tel-input', 'form-control']} 
                        utilsScript={'libphonenumber.js'}
                       />
                </div>
                <div>
                    <b>City*</b>
                    <Select
                      name="form-field-name"
                      value=""
                      defaultCountry={ 'auto' }
                      options={options}
                    />
                </div>
                <div>
                    <label htmlFor='policy'>I accept policy*</label><Validation.components.Input id='policy' type='checkbox' errorClassName='is-invalid-input' name='policy' value='1' validations={['required']}/>
                    <div>
                        <Validation.components.Button className="btn btn-primary">Submit</Validation.components.Button>
                    </div>
                </div>
            </Validation.components.Form>
        </div>
        );
    }
}