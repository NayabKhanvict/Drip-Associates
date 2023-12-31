import React from "react"; 
import ContactInfo from "./ContactInfo";

const ContactForm = () => {
  return (
    <>
      <div className="contact-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Contact Us
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              {/* ContactInfo */}
              <ContactInfo />
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="contact-form">
                <h3>Drop Us A Line</h3>
                <p>
                  We’re happy to answer any questions you have or provide you
                  with an estimate. Just send us a message in the form below
                  with any questions you may have.
                </p>

                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Name <span>(required)*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required={true}
                          data-error="Please enter your name"
                          placeholder="Enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Email <span>(required)*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required={true}
                          data-error="Please enter your email"
                          placeholder="Enter your Email Address"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Phone Number <span>(required)*</span>
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          className="form-control"
                          required={true}
                          data-error="Please enter your phone number"
                          placeholder="Enter your Phone Number"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Your Message <span>(required)*</span>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="8"
                          required={true}
                          data-error="Please enter your message"
                          className="form-control"
                          placeholder="Enter your Message"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
