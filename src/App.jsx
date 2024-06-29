import './App.css';

const links = {
  Github: 'https://github.com/justinsane',
  'Frontend Mentor': 'https://www.frontendmentor.io/profile/justinsane',
  LinkedIn: 'https://www.linkedin.com/in/justlevy/',
  X: 'https://www.x.com/just_levy',
  Instagram: 'https://instagram.com',
};

function App() {
  return (
    <main className='sm:mx-auto mx-6 max-w-sm bg-dark-grey mt-32 rounded-xl p-6'>
      <TopHalf />
      <LinkTree />
    </main>
  );
}

function TopHalf() {
  return (
    <div className='flex flex-col items-center'>
      <img
        src='./avatar-jessica.jpeg'
        alt='Jessica'
        className='rounded-full w-20'
      />
      <h1 className='text-xl pt-4 font-semibold'>Jessica Randall</h1>
      <h2 className='text-xs font-semibold text-green pb-5 pt-1'>
        London, United Kingdom
      </h2>
      <p className='text-xs pb-3'>
        &quot;Front-end developer and avid reader.&quot;
      </p>
    </div>
  );
}

function LinkTree() {
  return (
    <ul className='flex flex-col' role='list'>
      {Object.entries(links).map(([name, url]) => (
        <li
          key={name}
          className='text-center w-full h-full text-sm bg-grey rounded-md font-bold m-2 no-underline'
        >
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full p-3'
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
