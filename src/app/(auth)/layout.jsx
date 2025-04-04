export default function AuthLayout({
  children,
}) {
  return (
    <div>
      <nav>Auth Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
