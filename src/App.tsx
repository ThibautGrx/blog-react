import { NavBar } from './components/navBar.tsx';
import { useHashNavigation } from './hooks/useHashNavigation.tsx';
import { Home } from './pages/home.tsx';
import { Article } from './pages/article.tsx';
import { Contact } from './pages/contact.tsx';
import { NotFound } from './pages/notFound.tsx';


function App(){
  const {page} = useHashNavigation()

  const getPage = (page:string) => {
    switch(page) {
      case 'home' : return <Home/>
      case 'contact' : return <Contact/>
      case 'article' : return <Article/>
      default : return <NotFound/>
    }

  }
  return (
    <>
      <NavBar page={page} />
      {getPage(page)}
    </>
  )
}

export default App
