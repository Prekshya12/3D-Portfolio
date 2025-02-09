import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Color } from "three";
import '/src/index.css'
const Navbar = () => {
    const handleDownload = () => {
        // Add the logic to trigger the download here
        // For example, you can use window.open or create a download link
        const resumeUrl = 'https://drive.google.com/file/d/1WQZ5beka6fGiRmwb2ekYx-S_9JJJ43El/view';

        // Open the resume URL in a new window to trigger the download
        window.open(resumeUrl, '_blank');
      };
    
  return (

      <header className="header">
        <NavLink to='/' className='w-10  rounded-lg bg-white items-center justify-center flex font-bold shadow-md fixed left-10 top-5'>
        <div>
      {/* Button with download icon and same color */}
      <button className="downloader" onClick={handleDownload}>
        <FontAwesomeIcon icon={faDownload} color="#0072ff" />
        <p className="tooltip-text">Download Resume</p>
      </button>
    </div>
        </NavLink>
            <nav className="flex text-lg gap-7 font-medium fixed right-14 top-5">
                <NavLink to='about' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='projects' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to='contact' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
            </nav>

      </header>

  )
}

export default Navbar