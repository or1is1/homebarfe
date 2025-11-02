export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh min-w-fit flex-col gap-y-4">{children}</div>
  );
}
