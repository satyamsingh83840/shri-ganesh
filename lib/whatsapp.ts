export function buyOnWhatsApp({
  name,
  price,
  url,
}: {
  name: string;
  price: number;
  url: string;
}) {
  const phone = "919560112230";

  const message = `Hello Shri Ganesh Enterprises,

I am interested in this fan.

Model: ${name}

Price: ₹${price.toLocaleString("en-IN")}

Product Link:
${url}

Please let me know the availability.

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}
