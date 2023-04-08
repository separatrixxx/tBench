import styles from './Looking3D.module.css';
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";


const Model = React.lazy(() => import('./Model'));


export const Looking3D = (): JSX.Element => {
	return (
		<div id='wrapper' className={styles.lookingWrapper}>
			<Canvas className="z-10 mx-10"
				camera={{ position: [1, 0, 100], fov: 15 }}
				style={{
					width: '80vw',
					height: '80vh',
				}}
			>
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model position={[0, 0, 0]} />
				</Suspense>
			</Canvas>
		</div>
	);
};