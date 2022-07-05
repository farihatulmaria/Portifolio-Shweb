import { useState } from 'react';

const ScrollToTop = () => {
    const [isVisable, setIsVisable] = useState(false);
    const toggleVisibility = ()=>{
        if(window.pageYOffset > 300){
            console.log(300);
        }
    }
    return <p>hi {toggleVisibility}</p>
    
};

export default ScrollToTop;