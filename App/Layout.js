export const metadata = {
  title: "Divinize JUPEB Practice",
  description:
    "Prepare for JUPEB examinations with Divinize JUPEB Practice."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
