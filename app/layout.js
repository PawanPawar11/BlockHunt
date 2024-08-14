import "@styles/app.scss";

export const metadata = {
  title: "BlockHunt: The Decentralized Treasure Hunt ",
  description: "Mystery game along with chatbot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
