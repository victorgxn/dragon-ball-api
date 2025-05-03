interface CharacterDescriptionProps {
  description: string;
}

export function CharacterDescription({
  description,
}: CharacterDescriptionProps) {
  return (
    <div className="mt-8 bg-white dark:bg-blue-950 rounded-3xl p-6 shadow-xl border-2 border-blue-100 dark:border-blue-800">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Descripción
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
