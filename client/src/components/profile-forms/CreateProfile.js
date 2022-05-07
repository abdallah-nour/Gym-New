import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';

const CreateProfile = () => {

  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    waistdiameter: '',
    shoulderdiameter: '',
    chestdiameter: '',
    legsdiameter: ''

  });

  const {
    weight,
    height,
    age,
    waistdiameter,
    shoulderdiameter,
    chestdiameter,
    legsdiameter
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      weight,
      height,
      age,
      waistdiameter,
      shoulderdiameter,
      chestdiameter,
      legsdiameter
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/profile', body, config);
      console.log(res.data);
      toast.success('Saved Measurements!',
        {
          position: 'top-center',
          duration: 4000,
          style: {
            borderRadius: '20px',
            background: '#427AA1',
            border: '1px solid #427AA1',
            padding: '1rem',
            color: '#fff',
          },
        }
      );
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <section className="container-fluid register py-4">
      <Link to="/" className="fs-5 ps-3 text-white register-logo">
        Gym New
      </Link>
      <div className="container rounded shadow p-5 register-form">
        <h2 className="fs-3 text-center">User data</h2>
        <form className="row g-5 register-inputs" onSubmit={e => onSubmit(e)}>
          <div className="col-md-6">
            <label className="form-label fs-5">Weight</label>
            <input
              type="text"
              className="form-control"
              name='weight'
              value={weight}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Height</label>
            <input
              type="text"
              className="form-control"
              name="height"
              value={height}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={age}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Waist diameter</label>
            <input
              type="text"
              className="form-control"
              name="waistdiameter"
              value={waistdiameter}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Shoulder diameter</label>
            <input
              type="text"
              className="form-control"
              name="shoulderdiameter"
              value={shoulderdiameter}
              onChange={e => onChange(e)}
              minlenght='6'
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Chest diameter</label>
            <input
              type="text"
              className="form-control"
              name="chestdiameter"
              minlenght='6'
              value={chestdiameter}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">Legs diameter</label>
            <input
              type="text"
              className="form-control"
              name="legsdiameter"
              minlenght='6'
              value={legsdiameter}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5 contact-label">Why do you want to enter the gym?</label>
            <textarea className="form-control" required name="message" rows="3"></textarea>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button type="submit" className="btn btn-primary btn-lg fs-6 register-btn">Create or Update Data</button>
            <Toaster />
            <Link to="/dashboard" className="btn btn-primary btn-lg fs-6 register-btn">
              Go to Dashboard
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
