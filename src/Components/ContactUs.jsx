import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6 font-serif">
      <h1 className=" text-center font-extrabold text-3xl py-8"> Contant Us</h1>
      <div className="bg-white  p-6 rounded-lg shadow-md text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          LICENSE REGISTERED OFFICE
        </h2>
        <p className="mb-2">
          Room No 13, Ground Floor, Omkar Building,
          <br />
          Dr B.A Road, Dadar (East), Mumbai 4000014
        </p>
        <div className="mb-4">
          <p className="font-semibold">Email:</p>
          <a
            href="mailto:nselectricals@yahoo.in"
            className="text-blue-600 hover:underline"
          >
            nselectricals@yahoo.in
          </a>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Mobile:</p>
          <a href="tel:+919819249480" className="text-blue-600 hover:underline">
            +91 9819249480
          </a>
          <span className="mx-2">|</span>
          <a href="tel:+918010909525" className="text-blue-600 hover:underline">
            +91 8010909525
          </a>
        </div>
        <p className="font-semibold text-xl text-blue-600">CONTACT</p>
        <p className="font-bold text-lg">N.S. Enterprises</p>
      </div>
    </section>
  );
};

export default Contact;
