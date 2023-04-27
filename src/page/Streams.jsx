import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function Stream() {
  return (
    <main className='h-[93vh] flex px-16 py-5 gap-8'>
      <Sidebar />
      <div className='  flex-1 overflow-y-scroll'>
        <div className=''>
          <img
            src='stream1.jpeg'
            alt=''
            className='w-full h-72 object-cover object-center rounded-2xl'
          />
          <div className='pt-10 flex items-center justify-between flex-wrap gap-5'>
            <Card
              image={'stream2.jpeg'}
              title={'Valorant'}
              plataform={'PC'}
              price={52}
            />
            <Card
              image={'stream3.jpeg'}
              title={'Counter Strike: Global ...'}
              plataform={'PC'}
              price={40}
            />
            <Card
              image={'stream4.jpeg'}
              title={'Minecraft'}
              plataform={'PS5 / Xbox series X / PC / Switch'}
              price={48}
              fecha='21/4/2023'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Stream
