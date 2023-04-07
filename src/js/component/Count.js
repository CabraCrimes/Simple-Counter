import React from "react";


//create your first component
const Count = ({count}) => {
	return (
		<div className="col text-center bg-dark p-2 rounded border border-white border-1 ">
            <div className="bg-black text-white fs-3 p-3 rounded ">
			{count}
			</div>
		</div>
	);
};

export default Count;