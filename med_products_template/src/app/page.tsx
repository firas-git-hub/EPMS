import "./page.scss";
import { Button } from "@mui/material";

export default function Home() {
	return (
		<>
			<div className="page">
				<div className="imgs-container">
					<img src="healthcare_devices.png" />
				</div>
				<div className="info">
					<h1>
						Medical Equipment
					</h1>
					<p>
						Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed.
					</p>
					<Button variant="contained">
						Explore
					</Button>
					<img src="water.png"/>
				</div>
			</div>
		</>
	);
}
