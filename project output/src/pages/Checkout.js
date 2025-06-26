import React from 'react';
import { useParams } from 'react-router-dom';

function Checkout() {
  const { id } = useParams();

  return (
    <div className="col-md-6 mx-auto mt-5">
      <h2>Checkout Course #{id}</h2>
      <p>Confirm your payment for this course below.</p>
      <button className="btn btn-success">Confirm Payment</button>
    </div>
  );
}

export default Checkout;
