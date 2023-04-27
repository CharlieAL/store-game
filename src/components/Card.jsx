

function Card({image, title,plataform, price, fecha = ''}) {
  return (
    <div className=" bg-[#3b3a3a70] p-5 rounded-lg ">
      <img src={image} alt="" className="rounded-lg w-56 h-56 object-cover object-top" />
      <h4 className="font-bold py-2">{title}</h4>
      <p className="font-light text-gray-500">{plataform}</p>
      <div className="py-3 flex gap-3 items-center">
        <span className="font-light text-xl text-[#e58d27]">${price}</span>
        <button className="w-full py-1 rounded-full hover:text-white text-black transition-colors 
          font-bold text-lg bg-[#e58d27]">{fecha ? fecha :'Buy'}</button>
      </div>
    </div>
  )
}

export default Card