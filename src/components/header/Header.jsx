import React from 'react'

function Header() {
  return (
    <header>
        <div className='flex justify-between'>
            <img className='w-[130px] m-2' src="./img/logo.png" alt="" />
            {/* <fieldset className="w-full space-y-1 dark:text-gray-800">
    <label htmlFor="Search" className="hidden">Məhsulu axtarın</label>
    <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-orange-700 dark:text-gray-800">
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
            </button>
        </span>
        <input
            type="search"
            name="Search"
            placeholder="Məhsulu axtarın..."
            className="min-w-40 py-2 pl-10 text-sm rounded-md border border-orange-600 focus:border-orange-700 focus:ring focus:ring-orange-300"
        />
        <button className="bg-orange-600 rounded-xl text-white py-2 px-4">Axtar</button>
    </div>
</fieldset> */}

<fieldset className="w-full space-y-1 dark:text-gray-800">
    <label htmlFor="Search" className="hidden">Məhsulu axtarın</label>
    <div className="flex items-center">
        <input
            type="search"
            name="Search"
            placeholder="Məhsulu axtarın..."
            className="min-w-0 py-2 pl-10 pr-16 text-sm rounded-md border border-orange-600 focus:border-orange-700 focus:ring focus:ring-orange-300 flex-grow"
        />
        <button className="bg-orange-600 rounded-xl text-white py-2 px-4 ml-2">Axtar</button>
    </div>
</fieldset>

        </div>
    </header>
  )
}

export default Header