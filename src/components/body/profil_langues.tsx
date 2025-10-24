type Langue = {
  name: string
  progress: number
}

const langues: Langue[] = [
  { name: "Malagasy", progress: 100 },
  { name: "Français", progress: 80 },
  { name: "Anglais", progress: 60 }
]

export default function Langues() {
  return (
    <div className="space-y-4">
      {langues.map((langue, index) => (
        <div
          key={index}
          className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4 transition-colors duration-300"
          role="alert"
          tabIndex={-1}
          aria-labelledby={`langue-label-${index}`}
        >
          <div className="flex items-center gap-4">
            {/* Icône circulaire */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
            </div>

            {/* Texte + barre */}
            <div className="flex-1">
              <h3
                id={`langue-label-${index}`}
                className="text-lg font-semibold text-gray-800 dark:text-white"
              >
                {langue.name}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {langue.progress}% maîtrisé
              </span>

              <div
                className="mt-2 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={langue.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500"
                  style={{ width: `${langue.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
