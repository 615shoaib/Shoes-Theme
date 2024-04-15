import React from "react";

const FormComp = () => {
  return (
    <div className="mb-3 mt-2 formStyle" style={{ maxWidth: '800px', margin: 'auto' }}>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control mb-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
            style={{ padding: '16px 20px', fontFamily: 'Poppins, sans-serif', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control mb-4"
            id="exampleInputPassword1"
            placeholder="Password"
            autoComplete="false"
            style={{ padding: '16px 20px', fontFamily: 'Poppins, sans-serif', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div className="mt-2">
          <textarea
            className="form-control mb-3"
            cols={5}
            rows={5}
            style={{ padding: '16px 20px', fontFamily: 'Poppins, sans-serif', width: '100%', boxSizing: 'border-box' }}
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark w-100 mt-2"
          style={{ padding: '15px 10px', fontFamily: 'Poppins, sans-serif', width: '100%', boxSizing: 'border-box' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComp;
