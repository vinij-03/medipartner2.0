import React from 'react'

function cards(props) {
    const { title, des, image } = props
    function changeBackground(e) {
        
    }

    return (
        <>
        
            <div className="crd flex flex-col w-80 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 justify-center "
            style={{}}>
                <a href="#" className="flex justify-center ">
                    <img className="rounded-t-lg" src={image} alt="image" />
                </a>
                <div className="p-5  ">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-center">{des}</p>

                </div>
            </div>

        </>

    )
}

export default cards
