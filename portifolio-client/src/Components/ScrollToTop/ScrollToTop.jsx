import { useEffect, useState } from 'react';
import Icofont from 'react-icofont';

const ScrollToTop = () => {
    const [isVisable, setIsVisable] = useState(false);
    const toggleVisibility = ()=>{
        if(window.pageYOffset > 300){
            setIsVisable(true)
        }else{
            setIsVisable(false)
        }
    }
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(() => {
      window.addEventListener('scroll',toggleVisibility);
      return ()=>{
          window.removeEventListener('scroll',toggleVisibility)
      }
    }, [])
    
    return(
        <div>
            <button onClick={scrollToTop} className={isVisable ? 'd-block rounded-3 scrollToTopBtn' :'d-none'}>
                <span>
                    <Icofont className='fs-3' icon={'dotted-up'}/>
                </span>
            </button>
        </div>
    )
};

export default ScrollToTop;


