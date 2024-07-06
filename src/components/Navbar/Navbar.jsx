
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isUnitedStatesOpen, setIsUnitedStatesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const toggleTracking = () => {
    setIsTrackingOpen(!isTrackingOpen);
  };

  const toggleUnitedStates = () => {
    setIsUnitedStatesOpen(!isUnitedStatesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='right-end '>
        <ul className='navbar-menu'>
          <li className='menu-item'>
            <Link to='' className='menu' onClick={toggleContact}>
              Contact Us{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${isContactOpen ? 'open' : ''}`}
              />
            </Link>
            {isContactOpen && (
              <div className='dropdown'>
                <Link to='' className='dropdown-item'>
                  Tracking Portal
                </Link>
                <Link to='' className='dropdown-item'>
                  Business Enquiries
                </Link>
              </div>
            )}
          </li>
          <li className='menu-item'>
            <Link to='' className='menu' onClick={toggleTracking}>
              Tracking{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${isTrackingOpen ? 'open' : ''}`}
              />
            </Link>
            {isTrackingOpen && (
              <div className='dropdown'>
                <Link to='' className='dropdown-item'>
                  Mercury
                </Link>
                <Link to='/tracking' className='dropdown-item'>
                  Tracking
                </Link>
              </div>
            )}
          </li>
          <li className='menu-item'>
            <Link to='' className='menu' onClick={toggleUnitedStates}>
              United States & Canada - EN{' '}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${isUnitedStatesOpen ? 'open' : ''}`}
              />
            </Link>
            {isUnitedStatesOpen && (
              <div className='dropdown'>
                <Link to='' className='dropdown-item'></Link>
                <Link to='' className='dropdown-item'></Link>
                <Link to='' className='dropdown-item'></Link>
              </div>
            )}
          </li>
        </ul>
      </div>
      
      <div className='right-end'>
        <hr className='navbar-divider' />
      </div>
      <div className=' flex justify-start items-center'>
        <Link to='/'>
          <img
            src={assets.logo}
            alt='LogoImage'
            className='logo w-[20%] h-[20%] relative ml-10'
          />
        </Link>
        <div className='navbar '>
          <button className='menu-toggle' onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className='menu-item '>
              <Link to='' className='menu' onClick={toggleSolutions}>
                Solutions{' '}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`dropdown-icon ${isSolutionsOpen ? 'open' : ''}`}
                />
              </Link>
              {isSolutionsOpen && (
                <div className='dropdown'>
                  <Link to='/parcel-delivery' className='dropdown-item'>
                    Parcel Delivery
                  </Link>
                  <Link to='' className='dropdown-item'>
                    Fulfillment Solutions
                  </Link>
                  <Link to='' className='dropdown-item'>
                    Trade Services
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link to='/approach' className='menu'>
                Approach
              </Link>
            </li>
            <li>
              <Link to='' className='menu'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='' className='menu'>
                News & Insights
              </Link>
            </li>
          </ul>
        </div>
      </div>
       </ul>
    </div>
    <div className="right-end">
    <hr className="navbar-divider" />
    </div>
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="LogoImage" className="logo" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      <ul  className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <Link to="" className="menu" onClick={toggleSolutions}>
          Solutions <FontAwesomeIcon icon={faChevronDown} className={`dropdown-icon ${isSolutionsOpen ? 'open' : ''}`} />
          </Link>
          {isSolutionsOpen && (
            <div className="dropdown">
              <Link to="/parcel-delivery" className="dropdown-item">Parcel Delivery</Link>
              <Link to="/approach" className="dropdown-item">Fulfillment Solutions</Link>
              <Link to="" className="dropdown-item">Trade Services</Link>
            </div>
          )}
        </li>
        <li><Link to="/approach" className="menu">Approach</Link></li>
        <li><Link to="" className="menu">About Us</Link></li>
        <li><Link to="" className="menu">News & Insights</Link></li>
      </ul>
    </div>
    </>
  );
};

export default Navbar;
