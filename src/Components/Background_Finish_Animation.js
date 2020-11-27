import React, {useState} from  'react';
import './Form.css';
import $ from 'jquery'



const Falling_Confetti = () =>{
	const [confetti, setconfetti] = useState([ '1', '2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2',     
    ]);

    return(
        <div className='container'>
			<ul className='container'>
					{confetti.map(confetti1 => (
                	<li className='confetti'>{confetti1.id}</li>
            	))}
			</ul>
		
        </div>
    )
}

export default Falling_Confetti;