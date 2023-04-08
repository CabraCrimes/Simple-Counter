import React, {useEffect, useState} from "react";
import Count from "./Count";




const Home = () => {

	const [time, setTime] = useState(0);
	const [isPlay, setPlay] = useState(true);
	const [isShowButtons, setShowButtons] = useState(true);

	useEffect(() => {
		if(isPlay) {
			const interval = setInterval(() => {
				setTime(preTime => preTime + 1);
			}, 1000);
			return () => clearInterval(interval);
			}
		}, [isPlay]);
	  
		//<div><i className="bi bi-clock"></i></div>
		//https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
		return (
			<div className="container"> 
			<div className="d-flex vh-100 justify-content-center align-items-center">
				<div>
					<div className=" text-center row row-cols-7 g-2 align-items-center">
						<Count count={<i class="fa-solid fa-clock"></i>}/>
						<Count count={Math.floor(time / 100000) % 10}/>
						<Count count={Math.floor(time / 10000) % 10}/>
						<Count count={Math.floor(time / 1000) % 10}/>
						<Count count={Math.floor(time / 100) % 10}/>
						<Count count={Math.floor(time / 10) % 10}/>
						<Count count={Math.floor(time) % 10}/>
					</div>
					<div className="d-flex ">
						<button className={`btn btn-${isShowButtons ? "secondary" : "light" } text-center  mx-auto mt-4`}onClick={()=>{
							setShowButtons(!isShowButtons)
						}}>{isShowButtons  ? "Hide" : "Show"}</button>
						{ isShowButtons ? <>
						<button className={`btn btn-${isPlay ? "danger" : "success" } text-center d-flex mx-auto mt-4`}onClick={() => {
							setPlay(!isPlay);
						}}>{isPlay === false ? "Play" : "Pause"}</button>
						<button className={`btn btn-${time ? "secondary" : "light" } text-center d-flex mx-auto mt-4`}onClick={() => {
							setTime(0);
							isPlay === false;
						}}>{"Restart"}</button></> : null 
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
