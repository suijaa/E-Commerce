import React from "react";
import Transaction from "../components/wallet/Transaction";
import ErrorPage from "../components/ErrorPage";




function TransactionPage() {

    
  return (
    <div>
      {localStorage.getItem("Token") ? (
        <div>
          <Transaction />
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default TransactionPage;
