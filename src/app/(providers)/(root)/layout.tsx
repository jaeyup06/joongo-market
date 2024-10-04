import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
