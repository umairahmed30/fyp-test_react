import React from 'react'
import "./Rform.scss";
import { useParams } from 'react-router-dom';
const Recommendation = () => {
    const {email}=useParams();
    return (
        <div className="form-wrapper">
      <div className="student-form mt-4">
        <h1>Student Recommendation Form</h1>
        <form action="" className="main-form">
          <div className="row">
            <div className="col-6">
              <div className="form-field">
                <label htmlFor="" className="label">
                    <h1>{email}</h1>
                  Student Name
                </label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-field">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Date
                </label>
                <input
                  type="date"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Program
                </label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Instructor Name
                </label>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-field">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Student Name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Please List the class or classes you have taken with this
                  instructor
                </label>
                <textarea class="custom-textarea" rows="3"></textarea>
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Please List the class or classes you have taken with this
                  instructor
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <ul className="header-ilst">
                  <li className="single-header-content"></li>
                  <li className="single-header-content">Very Good</li>
                  <li className="single-header-content">Good</li>
                  <li className="single-header-content">Fair</li>
                  <li className="single-header-content">Poor</li>
                  <li className="single-header-content">Very Poor</li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
 <div className="col-12">
              <div className="form-field">
                <label htmlFor="" className="label">
                  Please List the class or classes you have taken with this
                  instructor
                </label>
                <ul className="content-list">
                  <li className="content-single">
                    Please List the class or classes you have taken with this
                    instructor
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                  <li className="content-single">
                    <div className="radio-button">
                      <input type="radio" id="test1" name="radio-group" />
                      <label for="test1"></label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>                             
</div>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Recommendation
