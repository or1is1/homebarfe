export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center">
      {children}
    </main>
  );
}
