import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { className } from '../utils/className';
import { withRouter } from '../utils/withRouter';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const Totop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    // <div className="">
    <button
      onClick={Totop}
      className={className(
        isVisible ? 'opacity-100' : 'opacity-0',
        'bg-primary totop'
      )}
    >
      <BiArrowFromBottom size={30} />
    </button>
    // </div>
  );
}

export default withRouter(ScrollToTop);
