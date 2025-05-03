interface PowerLevelCardProps {
  name: string;
  level: string;
  color: string;
  percentage: number;
}

export default function PowerLevelCard({
  name,
  level,
  color,
  percentage,
}: PowerLevelCardProps) {
  return (
    <div className="rounded-xl bg-blue-800/50 p-6 backdrop-blur-sm">
      <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
      <div className="mb-4 text-2xl font-extrabold text-yellow-400">
        {level}
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-blue-700">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
