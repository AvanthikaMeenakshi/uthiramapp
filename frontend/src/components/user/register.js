import React, {Component} from 'react';
import Validation from 'react-validation';
import "../validation.js";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/libphonenumber.js';
import 'react-intl-tel-input/dist/main.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DateTimeField from 'react-bootstrap-datetimepicker';
import Autocomplete from 'react-google-autocomplete';
import Ionicon from 'react-ionicons';
import moment from 'moment';
import AlertContainer from 'react-alert'

export default class Registration extends Component {
    alertOptions = {
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      }

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone_number: '',
            address: '',
            dob: '',
            password: '',
            passwordConfirm: '',
            loading: false,
            error: false,
            bloodGroup: 'Choose',
            policy: 0
        }
        this.logChange = this.logChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.phoneUpdate = this.phoneUpdate.bind(this)
        this.dateFormat = this.dateFormat.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            dob: this.state.dob,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            bloodGroup: this.state.bloodGroup,
            policy: this.state.policy
        }
        console.log(data)
        fetch("http://localhost:4000/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)
            if(data == "success"){
               this.refs.msg.show('Some text or component', {
                  time: 2000,
                  type: 'success',
                  icon: <img src="path/to/some/img/32x32.png" />
                })
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    phoneUpdate(status, value, countryData, number, id){
        this.setState({'phone_number': number})
    }

    dateFormat(date){
        var theDate = new Date(parseInt(date));
        var years = moment().diff(theDate, 'years');
        if(years < 16){
            var span = this.refs.dateError
            span.style.display = "block"
            this.setState({'dob': moment(theDate).format("DD/MM/YYYY hh:mm a"), 'error': true})
        } else {
            this.setState({'dob': moment(theDate).format("DD/MM/YYYY hh:mm a"), 'error': false})
        }
    }

    logChange(e) {
        console.log(e)
        if(e.target){
            if(e.target.name){
                this.setState({[e.target.name]: e.target.value});

            }
            if(e.target.type == "tel"){
                this.setState({"phone_number": e.target.value});
            }
        } else {
            this.setState({'bloodGroup': e.value});
        }
    }

    render() {
        var options = [
          { value: 'Choose', label: 'Choose your bloodgroup' },
          { value: 'A+', label: 'A+' },
          { value: 'B+', label: 'B+' },
          { value: 'O+', label: 'O+' },
          { value: 'AB+', label: 'AB+' },
          { value: 'A-', label: 'A-' },
          { value: 'B-', label: 'B-' },
          { value: 'O-', label: 'O-' },
          { value: 'AB-', label: 'AB-' }
        ];

        var searchable = false;
        return (
        <div className="container register-form">
            <div className="heading-section">
                <div className="main-heading">
                    Become one of the most <span className="highlightme">revered</span> and <span className="highlightme">celebrated</span> blood donor...
                </div>
                <div className="help-text">
                    Because every pint of blood can save a life. <br/ >India faces fatal accidents <span className="highlightme">6 times higher</span> than other countries...
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
                        <div className="panel panel-default p50 uth-panel">
                            <div className="panel-body uth-panel-body">
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Name</label>
                                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='John' name='name' validations={['required']}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Age</label>
                                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='20' name='number' validations={['required', 'number']}/>
                                    </div>
                                </div>
                                 <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Email</label>
                                        <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Phone Number</label>
                                        <IntlTelInput
                                            css={['intl-tel-input', 'form-control']}
                                            utilsScript={'libphonenumber.js'}
                                            preferredCountries={['in']}
                                            onPhoneNumberChange={this.phoneUpdate}
                                           />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>City</label>
                                        <Autocomplete
                                            className="form-control"
                                            onPlaceSelected={(place) => {
                                                this.setState({'address': place.formatted_address});
                                            }}
                                            types={['(regions)']}
                                            componentRestrictions={{country: "in"}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Blood Group</label>
                                        <Select
                                          name='bloodgroup'
                                          options={options}
                                          value={this.state.bloodGroup}
                                          onChange={this.logChange}
                                          searchable={searchable}
                                          clearable={searchable}
                                          onChange={this.logChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Date of birth</label>
                                        <DateTimeField onChange={this.dateFormat} />
                                        <span style={{"display": "none"}} ref="dateError" className='form-error is-visible'>You should be above 16 to donate blood.</span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Password</label>
                                        <Validation.components.Input onChange={this.logChange} className="form-control" type='password' value='' name='password' validations={['required', 'password']}/>

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Password Confirm</label>
                                        <Validation.components.Input onChange={this.logChange} className="form-control" type='password' value='' name='passwordConfirm' validations={['required', 'password']}/>
                                    </div>
                                </div>
                                <div className="row col-md-12 tc">
                                    <Validation.components.Input onChange={this.logChange} id='policy' type='checkbox' errorClassName='is-invalid-input' name='policy' value='1' validations={['required']}/>
                                    &nbsp;&nbsp;<label htmlFor="policy">I authorise the website to display my telephone number, e-mail ID and mailing address so that the needy could contact me, as and when there is an emergency.
                                    And I also agree to the <a>terms and conditions.</a>
                                    </label>
                                </div>
                                <div className="submit-section">
                                    <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                                </div>
                            </div>
                        </div>
                    </Validation.components.Form>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default p25 uth-panel">
                        <div className="uth-panel-head">Current Requirements</div>
                        <div className="panel-body uth-panel-body">
                            <ul className="list-unstyled blood-requirements">
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />1234567890.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />1234567890.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />1234567890.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />1234567890.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />1234567890.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
