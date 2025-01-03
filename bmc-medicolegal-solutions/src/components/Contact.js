import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    howDidYouHear: '',
    insuranceCompany: '',
    queryType: '',
    query: '',
    supportingDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      emailAddress: formData.emailAddress,
      howDidYouHear: formData.howDidYouHear,
      insuranceCompany: formData.insuranceCompany,
      queryType: formData.queryType,
      query: formData.query,
    };

    emailjs.send('service_iwg8ihv', 'template_d5lm5g8', templateParams, 'YenGeHPK1aN30WWj7')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name *</label>
        <input type="text" id="fullName" name="fullName" placeholder="E.g. John" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number *</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+91" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address *</label>
        <input type="email" id="emailAddress" name="emailAddress" placeholder="E.g. john@doe.com" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="howDidYouHear">How did you hear about us? *</label>
        <input type="text" id="howDidYouHear" name="howDidYouHear" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="insuranceCompany">Insurance Company Name *</label>
        <input type="text" id="insuranceCompany" name="insuranceCompany" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="queryType">Query Type *</label>
        <input type="text" id="queryType" name="queryType" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="supportingDocuments">Upload Supporting Documents If Any</label>
        <input type="file" id="supportingDocuments" name="supportingDocuments" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="query">Explain your query *</label>
        <textarea id="query" name="query" required onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;