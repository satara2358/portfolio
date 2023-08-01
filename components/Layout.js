import Nav from '../components/Nav';
import { Sora } from '@next/font/google';
import  Header  from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';


const sora = Sora({
  subsets: ['Latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
});

const Layout = () => {
  return (
    <div>
      <Nav />
      <Header/>
      <TopLeftImg/>
    </div>
  )
};

export default Layout;
