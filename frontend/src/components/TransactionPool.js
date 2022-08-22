import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transaction from "./Transaction";
import { API_BASE_URL } from "../config";
import { Button } from "react-bootstrap";

const TransactionPool = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    fetch(`${API_BASE_URL}/transactions`)
      .then((response) => response.json())
      .then((json) => {
        console.log("transactions json", json);
        setTransactions(json);
      });
  };

  useEffect(() => {
    fetchTransactions();

    const intervalId = setInterval(fetchTransactions, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchMineBlock = () => {
    fetch(`${API_BASE_URL}/blockchain/mine`).then(() => {
      alert("Success!");
    });
  };

  return (
    <div className="TransactionPool">
      <Link to="/">Home</Link>
      <hr />
      <h3>Transaction Pool</h3>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <hr />
            <Transaction transaction={transaction} />
          </div>
        ))}
      </div>
      <hr />
      <Button variant="danger" onClick={fetchMineBlock}>
        Mine a block of these transactions
      </Button>
    </div>
  );
};

export default TransactionPool;
