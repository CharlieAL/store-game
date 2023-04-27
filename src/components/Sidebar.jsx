import Checkbox from "./Checkbox"
import InputRange from "./InputRange"


function Sidebar() {
  return (
    <div className='w-80 h-full overflow-y-scroll text-gray-400'>
      {/* search */}
      <div className="bg-gradient-to-b from-[#362c29] to-[#3b3a3a70] p-4 rounded-xl">
        <h4 className="my-4 text-white font-bold text-xl">Categories</h4>
        <Checkbox text={'Indy'}/>
        <Checkbox text={'MMO'}/>
        <Checkbox text={'Casual Game'}/>
        <Checkbox text={'Straregy'}/>
        <Checkbox text={'Simulator'}/>
        <Checkbox text={'Sports Game'}/>
        <Checkbox text={'Action Game'}/>
        <h4 className="my-2 text-white font-bold text-xl">Plataforms</h4>

        <Checkbox text={'PC'}/>
        <Checkbox text={'Playstation 5'}/>
        <Checkbox text={'Playstation 4'}/>
        <Checkbox text={'Xbox series'}/>
        <Checkbox text={'Nintendo Switch'}/>

        <form action="#">
          <InputRange/>
          <button className="text-center bg-[#e58d27] hover:text-white transition-colors text-black font-bold w-full py-2 rounded-xl">Apply Filter</button>
        </form>
      </div>
    </div>
  )
}

export default Sidebar