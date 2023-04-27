import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function News() {
  return (
    <main className='h-[93vh] flex px-16 py-5 gap-8'>
      <Sidebar />
      <div className='  flex-1 overflow-y-scroll'>
        <div className=''>
          <img
            src='prox1.jpeg'
            alt=''
            className='w-full h-72 object-cover object-top rounded-2xl'
          />
          <div className='pt-10 flex items-center justify-between flex-wrap gap-5'>
            <Card
              image={'prox2.webp'}
              title={'Star Wars Jedi: Survivor'}
              plataform={'PS5 / Xbox series X / PC'}
              price={52}
            />
            <Card
              image={'prox5.jpeg'}
              title={'Age of Wonders 4 '}
              plataform={'PS5 / Xbox series X / PC'}
              price={40}
            />
            <Card
              image={'prox6.webp'}
              title={'Ghost of Tsushima'}
              plataform={'PS5 / Xbox series X / PC'}
              price={48}
              fecha='21/4/2023'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default News
