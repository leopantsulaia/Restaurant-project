import React, { useState } from "react";
import useLocalStorage from "../../UseLocalStorage";
import { useNavigate } from "react-router-dom";
import "./style.scss";

// Simple confirmation modal
function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-modal-backdrop">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="confirm-modal-actions">
          <button
            style={{ background: "#2ecc40", color: "#fff" }}
            onClick={onConfirm}>
            Yes
          </button>
          <button
            style={{ background: "#e74c3c", color: "#fff" }}
            onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

const Tables = () => {
  const [saveTapped, setSaveTapped] = useLocalStorage("saveTapped", {});
  const navigate = useNavigate();

  // Modal state
  const [modal, setModal] = useState({
    show: false,
    message: "",
    onConfirm: null,
  });

  const handleBack = () => {
    navigate("/Home");
  };

  // Delete ingredient (food/drink)
  const handleDeleteIngredient = (tableNumber, type, title) => {
    setModal({
      show: true,
      message: `Deleting "${title}" from Table ${tableNumber}. Are you sure?`,
      onConfirm: () => {
        setSaveTapped((prev) => {
          const updated = { ...prev };
          if (updated[tableNumber] && updated[tableNumber][type]) {
            delete updated[tableNumber][type][title];
          }
          return updated;
        });
        setModal({ show: false });
      },
    });
  };

  // Delete entire table
  const handleDeleteTable = (tableNumber) => {
    setModal({
      show: true,
      message: `Deleting Table ${tableNumber}. Are you sure?`,
      onConfirm: () => {
        setSaveTapped((prev) => {
          const updated = { ...prev };
          delete updated[tableNumber];
          return updated;
        });
        setModal({ show: false });
      },
    });
  };

  return (
    <div className="mid-div tables-dark-bg">
      <button className="back-btn" onClick={handleBack}>
        Back
      </button>
      {Object.entries(saveTapped).length === 0 && <p>No tables saved.</p>}
      {Object.entries(saveTapped).map(
        ([tableNumber, { selectedFood, selectedDrink }]) => (
          <div key={tableNumber} className="table-panel">
            <h2>
              Table {tableNumber}
              <button
                className="delete-table-btn"
                onClick={() => handleDeleteTable(tableNumber)}
                title="Delete Table">
                🗑️
              </button>
            </h2>
            {selectedFood && (
              <>
                <h3>Drink</h3>
                <ul>
                  {Object.entries(selectedFood)
                    .filter(([_, quantity]) => quantity > 0)
                    .map(([title, quantity]) => (
                      <li key={title}>
                        {title}: {quantity}
                        <button
                          className="delete-ingredient-btn"
                          onClick={() =>
                            handleDeleteIngredient(
                              tableNumber,
                              "selectedFood",
                              title
                            )
                          }
                          title={`Delete ${title}`}>
                          ❌
                        </button>
                      </li>
                    ))}
                </ul>
              </>
            )}
            {selectedDrink && (
              <>
                <h3>Food</h3>
                <ul>
                  {Object.entries(selectedDrink)
                    .filter(([_, quantity]) => quantity > 0)
                    .map(([title, quantity]) => (
                      <li key={title}>
                        {title}: {quantity}
                        <button
                          className="delete-ingredient-btn"
                          onClick={() =>
                            handleDeleteIngredient(
                              tableNumber,
                              "selectedDrink",
                              title
                            )
                          }
                          title={`Delete ${title}`}>
                          ❌
                        </button>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
        )
      )}
      {modal.show && (
        <ConfirmModal
          message={modal.message}
          onConfirm={() => {
            if (modal.onConfirm) modal.onConfirm();
          }}
          onCancel={() => setModal({ show: false })}
        />
      )}
    </div>
  );
};

export default Tables;
