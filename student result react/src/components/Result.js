import React from 'react';
import './Result.css';

const Result = ({ formData }) => {
  const calculateResult = () => {
    const { sdamESE, oopESE, iotESE, dsaESE } = formData;

    // Convert marks from string to integer
    const sdamESEInt = parseInt(sdamESE, 10);
    const oopESEInt = parseInt(oopESE, 10);
    const iotESEInt = parseInt(iotESE, 10);
    const dsaESEInt = parseInt(dsaESE, 10);

    // Log converted marks to check values
    console.log(sdamESEInt);
    console.log(oopESEInt);
    console.log(iotESEInt);
    console.log(dsaESEInt);

    // Sum up the ESE marks for final percentage calculation
    const totalESEMarks = sdamESEInt + oopESEInt + iotESEInt + dsaESEInt;

    // Log total ESE marks to check value
    console.log(totalESEMarks);

    // Calculate percentage
    const percentage = (totalESEMarks * 100) / 400;

    // Log percentage to check value
    console.log(percentage);

    return percentage.toFixed(2); // Round to two decimal places
  };

  return (
    <div className='box'>
      <div className='header'>
        <div className='content'>
          <div className='right-content'>
            <h2>Provisional Marksheet</h2>
            <p>Bansilal Ramnath Agarwal Charitable Trust's</p>
            <h2>Vishwakarma Institute of Technology, Pune</h2>
            <p>((An Autonomous Institute affiliated to Savitribai Phule Pune University))</p>
            <p>666, Upper Indiranagar, Bibwewadi, Pune- 411 037</p>
          </div>
        </div>
      </div>
      <table className='tb'>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td>PRN:</td>
            <td>{formData.prn}</td>
          </tr>
          <tr>
            <td>Program:</td>
            <td>BACHELOR OF TECHNOLOGY</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>BTech-Computer Engineering</td>
          </tr>
          <tr>
            <td>Class:</td>
            <td>SY</td>
            <td>Semester:</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Month & Year Of Exam:</td>
            <td>MAY, 2023</td>
            <td>Semester Result Date:</td>
            <td>01-Jun-2023</td>
          </tr>
        </tbody>
      </table>
      <table border="1" className='tb'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credits</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>CS2218</td>
            <td>SDAM</td>
            <td>4</td>
            <td>{formData.sdamESE}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>CS2221</td>
            <td>OBJECT ORIENTED PROGRAMMING</td>
            <td>4</td>
            <td>{formData.oopESE}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>CS2227</td>
            <td>INTERNET OF THINGS </td>
            <td>4</td>
            <td>{formData.iotESE}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>CS2231</td>
            <td>Data Structure</td>
            <td>1</td>
            <td>{formData.dsaESE}</td>
          </tr>
        </tbody>
      </table>
      <table border="1" className='tb tb1'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Credits Registered</th>
            <th>Credits Earned</th>
            <th>SGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comp</td>
            <td>23</td>
            <td>23</td>
            <td>{calculateResult()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
