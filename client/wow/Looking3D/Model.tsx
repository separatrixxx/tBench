import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
	const { nodes, materials }: any = useGLTF(
		'scene.gltf'
	);

	const ref: any = useRef();

	useFrame(({ mouse, viewport }: any) => {
		const x = (mouse.x * viewport.width) / 2.5;
		const y = (mouse.y * viewport.height) / 2.5;

		if (ref.current) {
			ref.current.lookAt(x, y, 1);
		}
	});

	return (
		<group {...props} dispose={null}>
			<group rotation={[Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 1, 0, 0]}>
					<mesh ref={ref} geometry={nodes.Object_2.geometry} material={materials.DefaultMaterial} />
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/scene.gltf');