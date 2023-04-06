import React, {useEffect, useState} from "react";
import Timer from "./Count.jsx";


const Home = () => {

	const [time, setTime] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
		  setTime(time => time + 1);
		}, 1000);
		return () => clearInterval(interval);
	  }, []);
	
	return (
		<div className="container  ">
			<div className="vh-100 text-center row row-cols-6 g-2 align-items-center ">
				<Timer count={time / 100000}/>
				<Timer count={time / 10000}/>
				<Timer count={time / 1000}/>
				<Timer count={time / 100}/>
				<Timer count={time / 10}/>
				<Timer count={time}/>
			</div>
		</div>
	);
};

export default Home;
