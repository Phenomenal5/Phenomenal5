import React, { useState } from 'react'

const AddMovie = ({addMovie, setModal}) => {
    // input fields
    const inputs = [
        {label: "Title", type: "text", id: "title"},
        {label: "Description", type: "text", id: "description"},
        {label: "Poster URL", type: "text", id: "poster"},
        {label: "Rating", type: "number", id: "rating"}
    ]
    // form data state
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        poster: "",
        rating: 0
    })

  return (
    <div className='fixed w-[40%] mx-auto my-4 rounded-lg shadow-lg left-0 right-0 top-20 bg-gray-100 p-8 z-50'>
            {/* Modal Header */}
            <div className='flex justify-between items-center inset-0'>
                <h1 className='text-2xl font-bold'>Add Movies</h1>
                {/* Close Modal Button */}
                <button onClick={() => setModal(false)} className='text-2xl cursor-pointer'>❌</button>
            </div>
            <p className='text-gray-600'>Fill in the details below to add a new movie.</p>
            {/* Form Inputs */}
        <form className='flex flex-col' onSubmit={(e) => {
            e.preventDefault();
            addMovie(formData);
        }}>
            {inputs.map((input) => (
                <div className='flex flex-col' key={input.id}>
                    <label htmlFor={input.id}>{input.label}: </label>
                    <input type={input.type} id={input.id} className='border border-gray-300 p-2 rounded-md' value={formData[input.id]} onChange={(e) => setFormData({...formData, [input.id]: e.target.value})} min={0}/>
                </div>
            ))}
            {/* Form Actions */}
            <div className='flex justify-between mt-2'>
                {/* Submit Button */}
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>OK</button>
                {/* Close Modal Button */}
                <button type='button' onClick={() => setModal(false)} className='bg-red-500 text-white p-2 rounded-md'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default AddMovie