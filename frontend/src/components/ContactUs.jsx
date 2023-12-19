import React from 'react'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ContactUs = () => {

    const contactForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: async (values) => {
            // console.log( values );
            // making request to backend
            // 1. address url
            // 2. request method
            // 3. Data
            // 4. Data Format to be sent

            const res = await fetch('http://localhost:5000/contact/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            console.log(await res.json());

            console.log('Submitted');

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Nice',
                    text: 'submited'
                });

                // navigate to login page
                // navigate('/login');

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            }
        },
    });

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <img src="https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.webp?b=1&s=170667a&w=0&k=20&c=FtxQlZeGn__5ZHpc5zi9tx0GVTDZuZQoQcHT7mxDY4Q=" className='mt-5' />
                </div>
                <div className="col-md-6">
                    <span className=''>
                        <h1>Contact Us</h1>
                    </span>
                    <form style={{ width: "26rem" }} onSubmit={contactForm.handleSubmit}>
                        {/* Name input */}
                        <label className="form-label" htmlFor="form4Example1"
                        >
                            Name
                        </label>
                        <div data-mdb-input-init="" className=" mb-4">
                            <input className="form-control"
                                type="text"
                                id="name"
                                value={contactForm.values.name}
                                onChange={contactForm.handleChange} />
                        </div>
                        {/* Email input */}
                        <div data-mdb-input-init="" className=" mb-4">
                            <label className="form-label" htmlFor="form4Example2">
                                Email address
                            </label>
                            <input type="text" id="email" className="form-control"
                                value={contactForm.values.email}
                                onChange={contactForm.handleChange} />
                        </div>
                        {/* Message input */}
                        <div data-mdb-input-init="" className=" mb-4">
                            <label className="form-label" htmlFor="form4Example3">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                value={contactForm.values.message}
                                onChange={contactForm.handleChange}
                                rows={4}
                                defaultValue={""}
                            />
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue=""
                                id="form4Example4"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>
                        {/* Submit button */}
                        <button
                            data-mdb-ripple-init=""
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactUs