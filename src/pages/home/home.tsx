// Home.tsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Data } from '../../utils/getData';
import Header from '../../components/header/header';

interface Props {
  data: Data | null;
  fetchData: (owner: string, repo: string) => void;
  error: string | null;
}

export default function Home({ data, fetchData, error }: Props) {
  const { owner, repo } = useParams<{ owner: string; repo: string }>();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!owner || !repo) {
      alert('Invalid URL parameters. Redirecting to the homepage.');
      navigate('/');
    } else {
      fetchData(owner, repo);
    }
  }, [owner, repo]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleCopy = () => {
    const textToCopy = data.mail; // La stringa da copiare
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Imposta lo stato per applicare la classe 'copied' al pulsante
        setIsCopied(true);

        // Dopo 2 secondi, rimuovi la classe
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <>
      <Header />

      <div className='bg-[#1B1B1B] border-2 border-[#262626] px-6 py-16 rounded-2xl'>
        <div className="flex max-md:flex-col-reverse gap-4 justify-between w-full mb-16">
          {
            data.roles && data.roles.length > 0 &&
            <div className='text-[#C0C0C0] text-2xl'>{data.roles[0]}</div>
          }

          {
            data['avaible-for-works'] &&
            <div className='flex'>
              <div className='border-2 border-[#262626] font-medium flex items-center justify-center gap-2 rounded-full py-1 px-4 max-md:text-sm'>
                <div className='w-2 aspect-square rounded-full bg-[#E63E21]'></div>
                AVAILABLE FOR JOB
              </div>
            </div>
          }
        </div>
        <h1 className='font-semibold text-4xl'>Hi, I'm {data.name} {data.lastname}</h1>

        <p className='text-[#C0C0C0] text-xl mt-4'>{data.description}</p>

        <div className='mt-7'>
          <button
            onClick={handleCopy}
            className="bg-[#161616] border-2 border-[#262626] text-[#C0C0C0] py-2 px-4 rounded-lg inline-flex items-center gap-2 transition"
            style={{ borderColor: isCopied ? "#F35034" : "" }}
          >
            Copy Email
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 0.000488281H5.25C5.05109 0.000488281 4.86032 0.0795061 4.71967 0.220158C4.57902 0.360811 4.5 0.551576 4.5 0.750488V4.50049H0.75C0.551088 4.50049 0.360322 4.57951 0.21967 4.72016C0.0790178 4.86081 0 5.05158 0 5.25049V17.2505C0 17.4494 0.0790178 17.6402 0.21967 17.7808C0.360322 17.9215 0.551088 18.0005 0.75 18.0005H12.75C12.9489 18.0005 13.1397 17.9215 13.2803 17.7808C13.421 17.6402 13.5 17.4494 13.5 17.2505V13.5005H17.25C17.4489 13.5005 17.6397 13.4215 17.7803 13.2808C17.921 13.1402 18 12.9494 18 12.7505V0.750488C18 0.551576 17.921 0.360811 17.7803 0.220158C17.6397 0.0795061 17.4489 0.000488281 17.25 0.000488281ZM12 16.5005H1.5V6.00049H12V16.5005ZM16.5 12.0005H13.5V5.25049C13.5 5.05158 13.421 4.86081 13.2803 4.72016C13.1397 4.57951 12.9489 4.50049 12.75 4.50049H6V1.50049H16.5V12.0005Z" fill="#C0C0C0" />
            </svg>
          </button>
        </div>
      </div>

      <div className='flex gap-3 max-md:flex-col'>
        <div className='bg-[#1B1B1B] border-2 border-[#262626] px-6 py-16 w-1/2 max-md:w-full rounded-2xl'>
          <div className='flex items-center gap-2 mb-16 font-medium'>
            <span className='w-2 aspect-square rounded-full bg-[#E63E21]'></span>
            Recent Works
          </div>

          <div className='flex flex-col gap-8'>
            {
              data['works-history']?.slice(0, 3).map((work, index) => (
                <div key={index} className='flex justify-between items-start'>
                  <div>
                    <div className={`${index == 0 ? 'text-[#F35034]' : ''} font-medium`}>{work.position}</div>
                    <div>
                      {
                        work.period && work.period.length == 2 && (
                          <span key={index} className='text-[#C0C0C0]'>{work.period[0]} - {work.period[1]}</span>
                        )
                      }
                    </div>
                  </div>
                  <div className='text-[#C0C0C0]'>{work.company}</div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='w-1/2 max-md:w-full flex gap-3 items-start'>
          {
            data.roles && data.roles.length > 0 &&
            data.roles.map((role, index) => (
              <div key={index} className="w-1/2 flex justify-center items-center p-[2px] rounded-xl bg-[linear-gradient(45deg,#262626,90%,#E63E21)]">
                <div className="font-medium flex justify-between items-center rounded-[10px] px-6 py-5 w-full bg-[linear-gradient(45deg,#1b1b1b,90%,#7a2d20)]">
                  {role}
                </div>
              </div>
            ))
          }
        </div>
      </div>



      <div className="flex justify-center items-center p-[2px] rounded-xl bg-[linear-gradient(225deg,#262626,95%,#E63E21)]">
        <div className="flex max-md:flex-col-reverse max-md:gap-2 justify-between items-center rounded-[10px] px-6 py-5 w-full bg-[linear-gradient(225deg,#1b1b1b,95%,#7a2d20)]">
          <div className="w-1/3 max-md:text-center">
            <Link to={"https://github.com/pietropeerani/portify"} target='_blank'>Portify</Link>
          </div>
          <nav className="w-1/3 flex justify-center">
            {
              data.contacts && data.contacts.length > 0 &&
              data.contacts.map((item, index) => (
                <a key={index} href={item.href} target='_blank' className='p-2'>{item.label}</a>
              ))
            }
          </nav>
          <div className='w-1/3 max-md:w-full flex justify-end max-md:justify-center'>
            {
              data['avaible-for-works'] &&
              <div className='border-2 border-[#262626] font-medium inline-flex items-center justify-center gap-2 rounded-full py-1 px-4 max-md:text-[9px]'>
                <span className='w-2 aspect-square rounded-full bg-[#E63E21]'></span>
                AVAILABLE FOR JOB
              </div>
            }
          </div>

        </div>
      </div>



    </>
  );
};