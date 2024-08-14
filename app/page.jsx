"use client";

import React, { useState } from "react";
import "@styles/app.scss";

const Page = () => {
  const [deduction, setDeduction] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deduction submitted:", deduction);
    setDeduction("");
  };

  return (
    <>
      <div className="container">
        <div className="mystery-text">
          <h2>Mystery</h2>
          <p>
            <strong>Case:</strong> <em>The vanishing Necklace</em>
            <br />A priceless necklace has disappeared from the museum. The only
            clue left behind is a mysterious note that reads:
          </p>
          <p className="mystery-description">
            <strong>
              <em>
                The thief knows the value of what is stolen but not the cost of
                its recovery.
              </em>
            </strong>
          </p>
        </div>
        <div className="input-area">
          <form onSubmit={handleSubmit}>
            <label htmlFor="deduction">Enter Your Deduction:</label>
            <textarea
              id="deduction"
              rows="4"
              cols="50"
              placeholder="Type your deduction here..."
              value={deduction}
              onChange={(e) => setDeduction(e.target.value)}
              style={{ resize: "none" }}
            />
            <button type="submit">Submit Mystery</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
