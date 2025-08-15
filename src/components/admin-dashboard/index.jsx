import React from "react";
import Total from "./Total";
import Transactions from "./Transactions";
import ActivityPage from "./ActivityPage";
import TransactionOverview from "./TransactionOverview";
import SubscriptionStatusChart from "./SubscriptionStatusChart";
import InspectionSummary from "./InspectionSummary";
import TopLocations from "./TopLocations";
import PropertyListingsByType from "./PropertyListingsByType";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-xl uppercase font-semibold">Dashboard</h1>
      <div>
        <div>
          <Total />
        </div>
        <div>
          <Transactions />
        </div>
        <div>
          <ActivityPage />
        </div>
     
        <div>
          <div>
            <TransactionOverview />
          </div>
          <div>
            <SubscriptionStatusChart />
          </div>
          <div>
            <div>
              <InspectionSummary />
            </div>
            <div>
              <TopLocations />
            </div>
          </div>
        </div>
        <div>
           <PropertyListingsByType/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
