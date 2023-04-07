import React from "react";


//create your first component
const Timer = ({count}) => {
	return (
		<div className="text-center bg-dark p-2 rounded border border-white border-1 ">
            <div className="bg-black text-white fs-3 p-3 rounded ">
			{count}
			</div>
		</div>
	);
};

export default Timer;