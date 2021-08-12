import Navbar from './components/navbar';
import WeatherCard from './components/weatherCard';

function App() {
  const imageSP = 'https://assistentedeviagem.com.br/blog/wp-content/uploads/2019/02/pontos-tur%C3%ADsticos-de-S%C3%A3o-Paulo-%E2%80%93-ponte-estaiada.jpg';
  const imageRJ = 'https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg';
  const imageES = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Webysther_20131025132658_-_Terceira_Ponte.jpg/1024px-Webysther_20131025132658_-_Terceira_Ponte.jpg';
  const imageMG = 'https://live.staticflickr.com/8339/8251497793_cbe3b1ac27_b.jpg';

  return (
      <div className="page-content page-container" id="page-content">
        <Navbar />
        <div className='container'>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 grid-margin stretch-card">
              <WeatherCard station={'SBSP'} cityId={244} cityscape={imageSP}/>
              <WeatherCard station={'SBGL'} cityId={241} cityscape={imageRJ}/>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <WeatherCard station={'SBVT'} cityId={246} cityscape={imageES}/>
              <WeatherCard station={'SBCF'} cityId={222} cityscape={imageMG}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
