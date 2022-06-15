import React from 'react'

export default function TestimonialsCircle({ index, data }) {
    return (
        <div
            className="md:h-44 md:w-44 w-44 h-44 rounded-full bg-gray-900 
          flex items-center justify-center flex-col"
            style={{ backgroundImage: `url('https://i.pravatar.cc/300')` }}
        >
            <div className="bg-gradient-to-b 
                                from-gray-900  via-transparent  
                                to-gray-900 h-full w-full rounded-full  flex items-center justify-center flex-col">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-md font-medium bg-white text-gray-900">
                    */account{index}
                </span>
            </div>
        </div>
    )
}
