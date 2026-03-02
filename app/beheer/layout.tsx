export const metadata = {
  title: "Beheer – Mingelmous",
  description: "Beheerdersomgeving voor Mingelmous.",
};

export default function BeheerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="beheer-layout">
      {children}
    </div>
  );
}
