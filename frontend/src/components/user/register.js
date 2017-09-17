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
import Ionicon from 'react-ionicons'


export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            geocodeResults: null,
            loading: false,
            bloodGroup: 'Choose'
        }
        this.logChange = this.logChange.bind(this)
    }

    logChange(val) {
      this.setState({
            bloodGroup: val.value
        });
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

        var inputProps = {
            type: "text",
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: "Search Places",
            className: "form-control",
            name: 'city',
            id: "city",
        }
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
                    <Validation.components.Form method="POST">
                        <div className="panel panel-default p50 uth-panel">
                            <div className="panel-body uth-panel-body">
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Name</label>
                                        <Validation.components.Input className="form-control" value='' placeholder='John' name='fname' validations={['required']}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Age</label>
                                        <Validation.components.Input className="form-control" value='' placeholder='20' name='number' validations={['required', 'number']}/>
                                    </div>
                                </div>
                                 <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Email</label>
                                        <Validation.components.Input className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Phone Number</label>
                                        <IntlTelInput 
                                            css={['intl-tel-input', 'form-control']} 
                                            utilsScript={'libphonenumber.js'}
                                            preferredCountries={['in']}
                                           />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>City</label>
                                        <Autocomplete
                                            className="form-control"
                                            onPlaceSelected={(place) => {
                                              console.log(place);
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
                                          name="form-field-name"
                                          options={options}
                                          value={this.state.bloodGroup}
                                          onChange={this.logChange}
                                          searchable={searchable}
                                          clearable={searchable}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Date of birth</label>
                                        <DateTimeField />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Password</label>
                                        <Validation.components.Input className="form-control" type='password' value='' name='password' validations={['required', 'password']}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-wrap">
                                        <label>Password Confirm</label>
                                        <Validation.components.Input className="form-control" type='password' value='' name='passwordConfirm' validations={['required', 'password']}/>
                                    </div>
                                </div>
                                <div className="row col-md-12 tc">
                                    <Validation.components.Input id='policy' type='checkbox' errorClassName='is-invalid-input' name='policy' value='1' validations={['required']}/>
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
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />9884237738.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />9884237738.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />9884237738.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />9884237738.</div>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-location" color="#4e585e" />Appolo Hospital, Greams Road.</div>
                                </li>
                                <li className="requiree">
                                    <div style={{"fontWeight": "bold"}}>Mr. Ram, </div>
                                    <span className="highlightme meta-details"><Ionicon fontSize="18px" icon="ion-waterdrop" color="#ff8484" /> O+ - 1 unit</span>
                                    <div className="meta-details"><Ionicon fontSize="18px" icon="ion-android-call" color="#4e585e" />9884237738.</div>
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
