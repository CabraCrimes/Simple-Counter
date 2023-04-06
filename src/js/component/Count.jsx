import React from "react";


//create your first component
const Timer = ({count}) => {
	return (
		<div className="text-center  ">
            <div className="bg-black text-white p-3 rounded w-75  ">
			{count}
			</div>
		</div>
	);
};

export default Timer;