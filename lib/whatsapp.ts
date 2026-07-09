export function buyOnWhatsApp({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) {
  const phone = "919999999999"; // Replace with your WhatsApp number

  const message = `Hello Shri Ganesh Enterprises,

I am interested in this fan.

Model: ${name}

Price: ₹${price.toLocaleString("en-IN")}

Image:
${window.location.origin}${image}

Please let me know the availability.

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}
