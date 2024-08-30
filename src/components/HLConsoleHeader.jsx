import logo from '../logo.svg';

export const HLConsoleHeader = () => {
  const repositoryUrl = 'https://github.com/diegovaldesjr/half-life-console'
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Steam Icon" width={32}/>
        <span className='ml-1'>Console</span>
      </div>

      <a href={repositoryUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  )
}
