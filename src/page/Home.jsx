import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <main className='h-[93vh] flex px-16 py-5 gap-8'>
      <Sidebar />
      <div className='  flex-1 overflow-y-scroll'>
        <div className=''>
          <img
            src='horizon.jpeg'
            alt=''
            className='w-full h-72 object-cover object-top rounded-2xl'
          />
          <div className='pt-10 flex items-center justify-between flex-wrap gap-5'>
            <Card
              image={'spiderman.webp'}
              title={'Marvel`s Spiderman'}
              plataform={'PS5'}
              price={52}
            />
            <Card
              image={'juego2.webp'}
              title={'Little Nightmares 2'}
              plataform={'PS5'}
              price={40}
            />
            <Card
              image={'juego3.jpeg'}
              title={'Ghost of Tsushima'}
              plataform={'PS5'}
              price={48}
            />
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
            <Card
              image={'prox4.png'}
              title={'Ghost of Tsushima'}
              plataform={'PS5 / Xbox series X / PC'}
              price={48}
              fecha='21/4/2023'
            />
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

export default Home
