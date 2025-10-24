import React from "react"
import { DotFilledIcon } from "@radix-ui/react-icons"

const StackedListBadgeActionButton = () => {
  const array = [
    {
      name: "GraphQL API",
      status: "Certificat",
      date: "March 17, 2023",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores aliquid eligendi repudiandae ullam suscipit reprehenderit odit quaerat quod? Porro quia voluptate, delectus unde pariatur tempore reiciendis iure animi aut.",
      start_date: "March 5, 2023",
      end_date: "February 5, 2024"
    },
    {
      name: "New benefits plan",
      status: "Diplome",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      start_date: "March 5, 2023",
      end_date: "February 5, 2024"
    },
    {
      name: "GraphQL API",
      status: "Certificat",
      date: "March 17, 2023",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores aliquid eligendi repudiandae ullam suscipit reprehenderit odit quaerat quod? Porro quia voluptate, delectus unde pariatur tempore reiciendis iure animi aut.",
      start_date: "March 5, 2023",
      end_date: "February 5, 2024"
    }
  ]

  return (
    <ul role="list" className="space-y-6">
      {array.map((item, index) => (
        <li
          key={index}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                item.status === "Diplome"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                  : item.status === "Certificat"
                  ? "bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-100"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
              }`}
            >
              {item.status}
            </span>
          </div>

          <div className="w-full h-px bg-gray-300 dark:bg-gray-600 mb-4" />

          <div className="flex flex-col md:flex-row items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
            <p className="md:w-1/4 font-medium text-xs">
              {item.start_date} – {item.end_date}
            </p>
            <DotFilledIcon className="text-gray-400 mt-1" />
            <p className="md:w-3/4 text-justify">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default StackedListBadgeActionButton
