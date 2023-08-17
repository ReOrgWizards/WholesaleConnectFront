import React from "react";

const WCReviewAddBtn = ({ title }) => {
  return (
    <div className="review__btn">
      <button
        type="button"
        class="review__add__btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {title}
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
              Add your Valuable Reviews!
              </h5>
              <p>Give a Rating:</p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <div class="d-grid">
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCReviewAddBtn ;
