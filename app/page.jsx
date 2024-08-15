"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@styles/app.scss";

const Page = () => {
  const [deduction, setDeduction] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/senddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deduction }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsCorrect(result.correct);
        setDeduction("");
      } else {
        console.error("Failed to submit deduction");
      }
    } catch (error) {
      console.error("Error submitting deduction:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="mystery-text">
            <h2>Mystery</h2>
            <p>
              <b>Case Title: </b>
              <q>The Sinister Night at the Velvet Club</q>
            </p>
            <p>
              <b>Case Overview:</b>
              <br />
              Detective Sarah has been called to investigate the murder of Alex
              Romano, a notorious crime lord found dead in his private suite at
              the Velvet Club, a high-end, underground establishment known for
              its illicit activities, including drug deals and prostitution.
            </p>
            <div>
              <p>
                <b>Crime Scene:</b>
                <br />
              </p>
              <ul>
                <li>
                  Victim: Alex Romano, mid-40s, found dead in a luxurious
                  armchair in his private suite.
                </li>
                <li>
                  Cause of Death: Multiple stab wounds, likely from a sharp
                  instrument. The body shows signs of a struggle.
                </li>
                <li>
                  Crime Scene Details: The suite is a mess. Empty champagne
                  bottles and drugs are scattered around. The door was locked
                  from the inside, and the windows are securely fastened.
                </li>
              </ul>
            </div>
            <p className="mystery-description">
              <strong>
                <em>
                  In a world where everyone’s hands are dirty, trust is the
                  sharpest blade. But tonight, only one man was caught holding
                  it.
                </em>
              </strong>
            </p>
            <div>
              <p>
                <b>Suspects:</b>
                <br />
              </p>
              <ol>
                <li>
                  Lena Martinez - A dancer at the club with a known relationship
                  with Romano.
                </li>
                <li>
                  Vincent “Vince” Caruso - Romano’s right-hand man, seen arguing
                  with the victim earlier that night.
                </li>
                <li>
                  Maria “The Vixen” Russo - A rival crime lord, present at the
                  club on the night of the murder.
                </li>
                <li>
                  John “Johnny” Esposito - The club owner, known for his ties to
                  both Romano and Russo.
                </li>
              </ol>
            </div>
          </div>
          <div className="mystery-image">
            <Image
              src="/assets/Designer.png"
              alt="Mystery Image"
              width={300}
              height={300}
              className="image-style"
            />
          </div>
          <div>
            <p className="cinzel-font">
              <b>Clues and Hints:</b>
              <br />
            </p>
            <ol>
              <li>
                Blood-Stained Knife - Found under the victim&apos;s armchair.
                The handle is wiped clean, but the blade has traces of both
                Romano&apos;s and another person&apos;s blood.
              </li>
              <li>
                Witness Testimony - Lena was seen leaving Romano&apos;s suite in
                a hurry around the time of the murder. She claims Romano was
                alive when she left.
              </li>
              <li>
                Security Footage - Shows Vince entering the suite just before
                the estimated time of death and leaving after 20 minutes. He
                claims he found Romano already dead and panicked.
              </li>
              <li>
                Phone Records - Romano received a call from Maria minutes before
                his death. Maria claims she was trying to negotiate a truce.
              </li>
              <li>
                Drug Analysis - A large amount of cocaine was found on the
                scene, but only Romano&apos;s prints are on the bag.
              </li>
              <li>
                Anonymous Tip - The police received an anonymous tip that Romano
                had a falling out with Vince over a botched drug deal.
              </li>
            </ol>
          </div>
        </div>
        <div className="input-area">
          <form onSubmit={handleSubmit} action="/senddata" method="post">
            <label className="cinzel-font" htmlFor="deduction">
              Enter Your Deduction:
            </label>
            <textarea
              id="deduction"
              rows="4"
              cols="50"
              placeholder="Type your deduction here..."
              value={deduction}
              onChange={(e) => setDeduction(e.target.value)}
              style={{ resize: "none" }}
              name="deduction"
            />
            <button type="submit">Submit Mystery</button>
          </form>
          {isCorrect !== null && (
            <div
              className={`result-message ${
                isCorrect ? "correct" : "incorrect"
              }`}
            >
              {isCorrect ? (
                <>
                  <h3>🎉 Congratulations! 🎉</h3>
                  <p>
                    Your deduction is spot on! You&apos;ve cracked the case and
                    uncovered the real culprit.
                  </p>
                </>
              ) : (
                <>
                  <h3>🔍 Try Again 🔍</h3>
                  <p>
                    Your deduction is not correct. Keep investigating and
                    looking for more clues!
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
