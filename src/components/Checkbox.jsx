

function Checkbox({text}) {
  return (
    <div className="flex items-center gap-2 pb-3">
      <input type="checkbox" name="" id={text} className="accent-[#e58d27] " />
      <label htmlFor={text}>{text}</label>
    </div>
  )
}

export default Checkbox