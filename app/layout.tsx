export const metadata = {
  title: "Movara AI",
  description: "Assistente para fisioterapeutas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}