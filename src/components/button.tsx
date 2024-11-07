type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
    <button className="px-6 py-3 rounded bg-green-600 text-white">
      {label}
    </button>
  );
};
