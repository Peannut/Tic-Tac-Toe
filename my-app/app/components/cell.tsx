import { Dispatch, SetStateAction } from "react";

type CellProps = {
	go: string;
	id :number;
	setGo: Dispatch<SetStateAction<string>>;
	cells: string[];
	setCells: Dispatch<SetStateAction<string[]>>;
	cell: string;
	winingmessage: string;

}

const Cell = ( {go, setGo , id, cells, setCells, cell, winingmessage} : CellProps) => {

	const handleCellchange = (celltochange : string) => {
		let copyCells = [...cells];

		copyCells[id] = celltochange;

		setCells(copyCells);

	}
	
	const handleClick = (e) => {
		if (winingmessage){
			return;
		}

		const notTaken = !cells[id];

		if (notTaken)
		{
			if (go === "circle"){
				handleCellchange("circle");
				setGo("cross");
			}
			else if (go === "cross"){
				handleCellchange("cross");
				setGo("circle");
			}
		}


	}

	  return <div className="square" onClick={handleClick}>
		<div className={cell} > {cell? (cell === "circle" ? "O" : "X") : ""} </div>
	  </div>;
}

export default Cell;