import React, { Suspense } from 'react';
import styles from './Looking3D.module.css';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Model = React.lazy(() => import('./Model'));

export const Looking3D = (): JSX.Element => {
	return (
		<div className={styles.lookingWrapper}>
			{/* <Canvas className="z-10 mx-10"
				camera={{ position: [1, 0, 10], fov: 15 }}
				style={{
					width: '96vw',
					height: '100vh'
				}}
			>
				<ambientLight intensity={1.25} />
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model position={[0, 0, 0]} />
				</Suspense>
				<OrbitControls />
			</Canvas> */}
		</div>
	);
};