interface GridProps {
  children: React.ReactNode;
}

export function Grid({ children }: GridProps) {
  return (
    <div className="mx-10 grid grid-cols-6 gap-x-20 gap-y-32 sm:grid-cols-12">
      {children}
    </div>
  );
}
