import { useState } from "react"


function InputRange() {
  const [price, setPrice] = useState(50)
  return (
    <div>
      <label
        htmlFor='medium-range'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Price: ${price}.00
      </label>
      <input
        id='medium-range'
        type='range'
        value={price}
        onChange={(e) => {

          setPrice(e.target.value)
        }}
        min={20}
        max={500}
        className='w-full h-2 mb-6 bg-[#181a20] rounded-lg appearance-none cursor-pointer accent-[#e58d27]'
      />
    </div>
  )
}

export default InputRange
