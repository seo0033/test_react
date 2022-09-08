import { useState } from 'react';
import './App.css';
import MainSlider from './component/MainSlider';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "smenu01", link: "/" },
      { content: "smenu02", link: "/" },
      { content: "smenu03", link: "/" }
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/s1",
    submenu: [
      { content: "smenu01", link: "/" },
      { content: "smenu02", link: "/" },
      { content: "smenu03", link: "/" }
    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/s1",
    submenu: [
      { content: "smenu01", link: "/" },
      { content: "smenu02", link: "/" },
      { content: "smenu03", link: "/" }
    ]
  },

]

function App() {
  const [CC, setCC] = useState("");
  // CC(ClassChage)내가 설정한거!
  const [TG, setTG] = useState(false);

  return (
    <div className='Wrap'>
      <header>
        <h1 className={CC} onClick={() => setCC('on')}>LOGO</h1>
        <h2 className={`ggg ${TG ? 'ox' : ''}`}>Toggle Class</h2>

        {/* <button onClick={() => setCC('on')}>class add</button> */}
        <button onClick={() => setTG(!TG)}>class toggle</button>

        <nav className='GNB'>
          <ul>
            {
              DB.map((it, idx) => (<li key={idx}>
                <a href="">{it.content}</a>

                <ul className='smenu'>
                  {
                    it.submenu.map((smenu, idx) =>
                      <li key={idx}>
                        <a href={smenu.link}>{smenu.content}</a>
                      </li>)
                  }

                  {/* <li>
                <a href=''>{it.submenu[0].content}</a>
              </li> */}
                </ul>
              </li>))
            }

            {/* <li>{DB[0].name}</li> */}
          </ul>
        </nav>
      </header>
      <main>
        <MainSlider />
      </main>
    </div>
  );
}

export default App;

