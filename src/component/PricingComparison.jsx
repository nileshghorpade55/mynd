import "./PricingComparison.css";

function PricingComparison() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Compare Our Laundry Services</h2>

      <div className="pricing-table text-white">

        {/* Header Row */}
        <div className="table-row header text-white">
          <div>Features</div>
          <div>Wash & Fold</div>
          <div>Wash & Iron</div>
          <div>Woollen Laundry</div>
          <div>Express Laundry</div>
        </div>

        {/* Discount */}
        <div className="table-row text-white">
          <div>Offer</div>
          <div className="highlight text-white">Flat 20% Off</div>
          <div className="highlight text-white">Flat 20% Off</div>
          <div>No Discount</div>
          <div className="danger">Double Charges</div>
        </div>

        {/* Wash */}
        <div className="table-row text-white">
          <div>Wash</div>
          <div>✔</div>
          <div>✔</div>
          <div>✔</div>
          <div>✔</div>
        </div>

        {/* Dry */}
        <div className="table-row text-white">
          <div>Dry</div>
          <div>✔</div>
          <div>✔</div>
          <div>✔</div>
          <div>✔</div>
        </div>

        {/* Finish */}
        <div className="table-row text-white">
          <div>Finishing</div>
          <div>Fold</div>
          <div>Steam Iron</div>
          <div>Fold</div>
          <div>Steam Iron</div>
        </div>

        {/* Packing */}
        <div className="table-row">
          <div>Packing</div>
          <div>Multi Packing</div>
          <div>Multi Packing</div>
          <div>Multi Packing</div>
          <div>Unit Packing</div>
        </div>

        {/* Delivery Time */}
        <div className="table-row">
          <div>Delivery Time</div>
          <div>48 Hours</div>
          <div>48 Hours</div>
          <div>48 Hours</div>
          <div className="highlight text-white">Same Day</div>
        </div>

      </div>
    </section>
  );
}

export default PricingComparison;