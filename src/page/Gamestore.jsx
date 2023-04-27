import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function GameStore() {
  return (
    <main className='h-[93vh] flex px-16 py-5 gap-8'>
      <Sidebar />
      <div className='  flex-1 overflow-y-scroll'>
        <div className=''>
          <img
            src='game1.jpg'
            alt=''
            className='w-full h-72 object-cover object-center rounded-2xl'
          />
          <div className='pt-10 flex items-center justify-between flex-wrap gap-5'>
            <Card
              image={'game2.jpeg'}
              title={'Fortnite'}
              plataform={'PC / PS5 / Xbox series / Switch'}
              price={52}
            />
            <Card
              image={'game3.webp'}
              title={'Formula 1 2022'}
              plataform={'PC / PS5 / Xbox series'}
              price={40}
            />
            <Card
              image={'game5.jpeg'}
              title={'Dying Light 2'}
              plataform={'PS5 / Xbox series X / PC '}
              price={48}
              fecha='21/4/2023'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default GameStore
