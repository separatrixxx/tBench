import { useEffect, useState } from 'react';

export const useResize = (): number => {
	const [resize, setResize] = useState<number>(0);

	useEffect(() => {
		setResize(window.innerWidth);
		
		window.addEventListener('resize', function(){
            setResize(window.innerWidth);
        });
        
	}, []);

	return resize;
};