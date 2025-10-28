import React from "react"
import { DotFilledIcon } from "@radix-ui/react-icons"

const StackedListBadgeActionButton = () => {
  const array = [
    {
      name: "Doctorat en Sciences et Technologies",
      status: "Diplome",
      desc:
        "École Doctorale Thématique, Antsiranana",
      start_date: "2018",
      end_date: "2022"
    },
    {
      name: "Diplôme d’Ingénieur en Informatique Industrielle",
      status: "Diplome",
      desc: "École Supérieure Polytechnique d’Antsiranana",
      start_date: "2010 ",
      end_date: "2017"
    }
  ]

  return (
    <ul role="list" className="space-y-3">
      {array.map((item, index) => (
        <li
          key={index}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className=" text-xs   md:text-2xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <span
              className={`px-3 py-1 hidden md:block  rounded-full font-medium ${
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

          <div className="w-full h-px bg-gray-300 dark:bg-gray-600 mb-1" />

          <div className=" flex flex-col md:flex-row items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
            <p className=" md:w-3/4 text-justify">{item.desc}</p>
            <p className="md:w-1/4 font-medium text-xs text-end">
              {item.start_date} – {item.end_date}
            </p>
            
          </div>
        </li>
      ))}
    </ul>
  )
}

export default StackedListBadgeActionButton
