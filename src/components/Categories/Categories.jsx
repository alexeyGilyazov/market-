import './Categories.css'

export default function Categories({ allCategory, chooseCategory }) {
  return (
    <div className='category'>
      {allCategory.map((el, index) => (
        <div onClick={() => chooseCategory(el)} className='category__name' key={index}>{el}</div>
      ))}
    </div>
  );
}