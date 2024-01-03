import React, { useState } from 'react';
import { Footer, Navbar } from '../components';

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    AreaCode: '',
    serviceRequired: 'Hair Cutting',
    agreeToTerms: false,
    receivePromotions: false,
    isOlderThan18: false,
    message: '',
    avatar: null,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    AreaCode: '',
    avatar: '',
  });

  const validateForm = () => {
    const errors = {};

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = 'Invalid email address';
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!formData.phone.match(phonePattern)) {
      errors.phone = 'Invalid phone number format (###-###-####)';
    }

    
    if (formData.AreaCode.length > 5) {
      errors.AreaCode = 'AreaCode name should not exceed 5 characters';
    }

   
    if (formData.avatar && formData.avatar.size > 1024 * 1024) {
      errors.avatar = 'File size should not exceed 1 MB';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        avatar: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }


    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    if (name === 'firstName') {
      if (!value.match(/^[a-zA-Z]+$/)) {
        setErrors({ ...errors, firstName: 'Name should consist of only alphabetic characters' });
      } else {
        setErrors({ ...errors, firstName: '' });
      }
    } else if (name === 'lastName') {
      if (!value.match(/^[a-zA-Z]+$/)) {
        setErrors({ ...errors, lastName: 'Name should consist of only alphabetic characters' });
      } else {
        setErrors({ ...errors, lastName: '' });
      }
    } else if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.match(emailPattern)) {
        setErrors({ ...errors, email: 'Invalid email address' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    } else if (name === 'phone') {
      const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
      if (!value.match(phonePattern)) {
        setErrors({ ...errors, phone: 'Invalid phone number format (###-###-####)' });
      } else {
        setErrors({ ...errors, phone: '' });
      }
    } else if (name === 'AreaCode') {
      if (value.length > 5) {
        setErrors({ ...errors, AreaCode: 'AreaCode name should not exceed 5 characters' });
      } else {
        setErrors({ ...errors, AreaCode: '' });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-[#3f2020] py-8">
          <div className="container mx-auto w-11/12 md:w-1/2 my-8 bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleFormSubmit}>
              <h1 className="font-extrabold text-xl pb-3">Appointment Here!</h1>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="firstName"
                  id="floating_first_name"
                  className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020] ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="First name"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  id="floating_last_name"
                  className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020] ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Last name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020] ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email address"
                  required
                  onChange={handleInputChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="tel"
                  name="phone"
                  id="floating_phone"
                  className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020] ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="Phone number"
                  required
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="AreaCode"
                  id="floating_AreaCode"
                  className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020] ${errors.AreaCode ? 'border-red-500' : ''}`}
                  placeholder="Area Code"
                  required
                  onChange={handleInputChange}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              {errors.AreaCode && <p className="text-red-500 text-xs">{errors.AreaCode}</p>}

              <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">
                Service Required
              </label>
              <select
                name="serviceRequired"
                id="service"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-[#3f2020] f block w-full p-2.5"
                onChange={handleInputChange}
                value={formData.serviceRequired}
              >
                <option value="Hair Cutting">Hair Cutting</option>
                <option value="Hair Dryer">Hair Dryer</option>
                <option value="Facials">Facials</option>
                <option value="Styles">Styles</option>
              </select>

              <label htmlFor="user_avatar" className="block m-2 text-sm font-medium text-gray-900">
                Upload file (max 1 MB)
              </label>
              <input
                className={`block w-full text-sm my-4 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none ${errors.avatar ? 'border-red-500' : ''}`}
                id="user_avatar"
                type="file"
                onChange={handleInputChange}
              />
              {errors.avatar && <p className="text-red-500">{errors.avatar}</p>}

              <fieldset>
                <legend className="sr-only">Checkbox variants</legend>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900">
                    I agree to the terms and conditions.
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    name="receivePromotions"
                    checked={formData.receivePromotions}
                    onChange={handleInputChange}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900">
                    I want to get promotional offers
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox-3"
                    type="checkbox"
                    name="isOlderThan18"
                    checked={formData.isOlderThan18}
                    onChange={handleInputChange}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900">
                    I am 18 years or older
                  </label>
                </div>
              </fieldset>

              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Other details you may wish to highlight
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
                placeholder="Leave a comment..."
                onChange={handleInputChange}
                value={formData.message}
              ></textarea>

              <button
                type="submit"
                className="text-white bg-[#3F2020] hover:bg-[#2c1212] text-sm w-full md:w-auto px-5 py-2.5 text-center mt-4 rounded-3xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
