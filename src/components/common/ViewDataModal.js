import React from "react";
import { Button, Table } from "react-bootstrap";

const ViewDataModal = (props) => {
  const { title, onClose, closeButtonText, data, isOpen } = props;

  return (
    <div className={`sales-overlay ${isOpen ? "open-drawer" : ""}`}>
      <div className="sidebar-data">
        <div className="side-close">
          <h5>{title ? title : ""}</h5>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="manage-height">
          <div className="sales-sidebar-body pt-0">
            <div className="common-table">
              <thead>
                <tr>
                  <th className="sales-table-action sticky-action">
                    <div className="fixed-content">Name</div>
                  </th>
                  <th className="sales-table-action sticky-action">
                    <div className="fixed-content">Phone Number</div>
                  </th>
                  <th className="sales-table-action sticky-action">
                    <div className="fixed-content">Email</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data && data.length > 0 ? (
                  data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="fixed-content">{item.name}</div>
                        </td>
                        <td>
                          <div className="fixed-content">{item.phnNumber}</div>
                        </td>
                        <td>
                          <div className="fixed-content">{item.email}</div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3">
                      <div className="no-data-table">
                        <p>No Data Found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDataModal;
