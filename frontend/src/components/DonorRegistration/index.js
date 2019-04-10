import React, { Component } from 'react';

const options = [
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

class DonorRegistration extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      phone_number: event.target.phone_number.value,
      dob: event.target.dob.value,
      bloodGroup: event.target.bloodGroup.value
    };
    console.log(data);
    fetch("/users/new", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((respData) => {
      console.log(respData);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="section-content-block section-process">
        <div className="col-md-12 col-sm-12 text-center">
          <h2 className="section-heading"><span>Register</span> Today</h2>
          <p className="section-subheading">Because every pint of blood can save a life. India faces fatal accidents <span className="highlightme">6 times higher</span> than other countries...</p>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 appointment-form-wrapper text-center clearfix">
            <form onSubmit={event => this.handleSubmit(event)} className="appoinment-form">
              <div className="form-group col-md-6">
                <input required name="username" className="form-control" placeholder="Name" type="text" />
              </div>
              <div className="form-group col-md-6">
                <input required name="email" className="form-control" placeholder="Email" type="email" />
              </div>
              <div className="form-group col-md-6">
                <input required name="phone_number" className="form-control" placeholder="Phone" type="text" />
              </div>
              <div className="form-group col-md-6">
                <div className="select-style">
                  <select required className="form-control" name="bloodGroup">
                    {options.map(optionVal => <option key={optionVal.value} value={optionVal.value}>{optionVal.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-6">
                <input required id="dob" className="form-control" placeholder="Date of Birth" type="text" />
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <button className="btn-submit" type="submit">Get Appointment</button>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default DonorRegistration;
