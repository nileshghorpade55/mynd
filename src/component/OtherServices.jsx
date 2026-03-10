import "./OtherServices.css";

const services = [
  { icon: "bi-steam", title: "Steam Iron" },
  { icon: "bi-basket", title: "Laundry By Kg" },
  { icon: "bi-person", title: "Men Dry Clean" },
  { icon: "bi-person-dress", title: "Women Dry Clean" },
  { icon: "bi-emoji-smile", title: "Shoe Cleaning" },
  { icon: "bi-stack", title: "Non Wearables" },
  { icon: "bi-handbag", title: "Bag Cleaning" },
  { icon: "bi-person-hearts", title: "Kids Dry Clean" },
];

function OtherServices({ openModal }) {
  return (
    <div id="OtherServices" className="container py-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-3" key={index}>
            <div className="service-card text-center p-4">
              <i className={`bi ${service.icon} service-icon`}></i>
              <h5 className="mt-3 text-white">{service.title}</h5>

              <button
                className="btn btn-outline-primary mt-2 text-white"
                onClick={openModal}
              >
                Book Now
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherServices;