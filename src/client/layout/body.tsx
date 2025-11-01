export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen min-w-fit flex-col space-y-4">
      {children}
    </div>
  );
}
