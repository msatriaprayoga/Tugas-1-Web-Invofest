import './App.css'
import Button from './components/ui/Button';
import SpeakerCard from './components/ui/SpeakerCard';
import Collapse from './components/Collapse';
import Header from "./components/Header";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const CollapseItems = [
    {
      title: "Apa itu Invofest?",
      description: "Invofest adalah sebuah acara yang diselenggarakan oleh Harkat Negeri yang bertujuan untuk memberikan wawasan dan pengetahuan kepada masyarakat tentang teknologi, inovasi, dan perkembangan terkini di dunia digital. Acara ini biasanya menghadirkan berbagai pembicara, seminar, workshop, dan pameran yang berkaitan dengan teknologi dan inovasi."
    },
    {
      title: "kapan dan dimana Invofest diselenggarakan?",
      description: "Invofest biasanya diselenggarakan setiap tahun di kota-kota besar di Indonesia, seperti Jakarta, Bandung, atau Surabaya. Tanggal dan lokasi pastinya dapat bervariasi setiap tahunnya, jadi sebaiknya memeriksa situs resmi Invofest atau media sosial mereka untuk informasi terbaru tentang acara tersebut."
    },
    {
      title: "Siapa saja yang mengikuti Invofest?",
      description: "Invofest diikuti oleh berbagai kalangan, termasuk mahasiswa, profesional, pengusaha, dan masyarakat umum yang tertarik dengan teknologi dan inovasi. Acara ini biasanya menarik peserta dari berbagai latar belakang dan industri, sehingga menjadi tempat yang ideal untuk networking dan berbagi pengetahuan."
    }
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description: "Invofest IT Seminar adalah sebuah acara yang diselenggarakan oleh Harkat Negeri yang bertujuan untuk memberikan wawasan dan pengetahuan kepada masyarakat tentang teknologi, inovasi, dan perkembangan terkini di dunia digital. Acara ini biasanya menghadirkan berbagai pembicara, seminar, workshop, dan pameran yang berkaitan dengan teknologi dan inovasi."
    },
    {
      title: "IT Talkshow",
      description: "Invofest IT Talkshow adalah sebuah acara yang diselenggarakan oleh Harkat Negeri yang bertujuan untuk memberikan wawasan dan pengetahuan kepada masyarakat tentang teknologi, inovasi, dan perkembangan terkini di dunia digital. Acara ini biasanya menghadirkan berbagai pembicara, seminar, workshop, dan pameran yang berkaitan dengan teknologi dan inovasi."
    },
    {
      title: "IT  Competition",
      description: "Invofest IT Competition adalah sebuah acara yang diselenggarakan oleh Harkat Negeri yang bertujuan untuk memberikan wawasan dan pengetahuan kepada masyarakat tentang teknologi, inovasi, dan perkembangan terkini di dunia digital. Acara ini biasanya menghadirkan berbagai pembicara, seminar, workshop, dan pameran yang berkaitan dengan teknologi dan inovasi."
    },
    {
      title: "IT Workshop",
      description: "Invofest IT Workshop adalah sebuah acara yang diselenggarakan oleh Harkat Negeri yang bertujuan untuk memberikan wawasan dan pengetahuan kepada masyarakat tentang teknologi, inovasi, dan perkembangan terkini di dunia digital. Acara ini biasanya menghadirkan berbagai pembicara, seminar, workshop, dan pameran yang berkaitan dengan teknologi dan inovasi."
    }
  ];

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto">
      <section 
      id="hero"
      className='py-10 flex gap-10 justify-between items-center'>
        <div className='w-2/3 flex flex-col gap-6'>
        <img
        src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
        alt=""
        className='w-96'/>
        <p>
          Invofest (Informatics Vocational Festival) adalah festival tahunan
          yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
          Indonesia dalam menghadapi era digital. Dengan mengusung tema
          "Beyond Limits, Beyond Intelligence: Innovate for a Smarter
          Tomorrow ".
        </p>
        <div className='flex gap-3'>
          <Button label='Info Selengkapnya' variant='primary'/>
          <Button label='Hubungi Panitia' variant='outline'/>
          </div>
        </div>
        <div className='w-1/3'>
          <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          alt=""
          />
        </div>
      </section>

      <section id="speakers" className='py-24'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3'>
          {speakers.map((speaker) => (
            <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            role={speaker.role}
            imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>

      <section 
      id="cards"
      className='py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3'>
        {cardItems.map((item, index) => (
          <div key={index} className='w-full border rounded-lg p-4'>
            <h3 className='text-2xl text-red-900 mb-4'>{item.title}</h3>
            <p>{item.description}</p>
            <Button 
            label='Info Selengkapnya'
            variant='primary'
            className='mt-4'
            />
          </div>
        ))}
      </section>
      <section 
      id="Collapse" className='py-24 flex flex-col gap-2 px-3'>
        {CollapseItems.map((item, index) => (
          <Collapse
          key={index}
          title={item.title}
          description={item.description}
          />
        ))}
      </section>
        </div>
    </>
  );
}

export default App;

