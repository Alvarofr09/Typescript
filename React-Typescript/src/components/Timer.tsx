import { useEffect, useRef, useState } from "react";

type TimerProps = {
	milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerProps) => {
	const [segundos, setSegundos] = useState(0);
	const ref = useRef<number>();

	useEffect(() => {
		console.log("UseEffect");
		ref.current = setTimeout(() => setSegundos(segundos + 1), milisegundos);

		ref.current && clearTimeout(ref.current);
	}, [milisegundos, segundos]);

	return (
		<h4>
			Timer: <small>{segundos}</small>
		</h4>
	);
};
