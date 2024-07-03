const domainName = window.location.hostname;
const email = import.meta.env.VITE_EMAIL;
const phone = import.meta.env.VITE_PHONE;

const whatsappMessage = `Hello, I'm interested in purchasing the domain name ${domainName}. Can you please provide me with more information?`;
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
  whatsappMessage
)}`;

document.title = `Buy ${domainName}`;

function App() {
  return (
    <main className="font-inter text-black max-w-3xl mx-auto">
      <div className="flex flex-col items-center mt-6 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Premium Domain For Sale
        </h1>
        <p className="text-xl md:text-2xl mt-5">
          Own this unique and memorable domain today!
        </p>

        <h2 className="mt-10 text-2xl md:text-3xl font-semibold">
          How to purchase?
        </h2>

        <p className="mt-4">
          Acquiring <strong className="text-lg">{domainName}</strong> is simple
          and straightforward. Just contact us using;
          <br />
          <br />
          Email:{" "}
          <a className="hover:underline" href={`mailto:${email}`}>
            <strong>{email}</strong>
          </a>{" "}
          <br />
          WhatsApp:{" "}
          <a
            href={whatsapp}
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <strong>{formatPhone(phone)}</strong>
          </a>
          <br />
          <br />
          We’ll get back to you with all the details and guide you through the
          purchase process.
        </p>
      </div>
    </main>
  );
}

export default App;

function formatPhone(phoneNumber: string) {
  return phoneNumber.replace(
    /(\+90)(\d{3})(\d{3})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5"
  );
}
