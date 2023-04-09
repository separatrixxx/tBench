import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
	const { nodes, materials }: any = useGLTF(
		'scene.gltf'
	);

	const ref: any = useRef();

	useFrame(({ mouse }: any) => {
		const x = 0 + mouse.x / 2;
		const y = 10 + mouse.y * 7;

		if (ref.current) {
			ref.current.lookAt(x, y, 1);
		}
	});

	return (
		<group {...props} ref={ref} dispose={null}>
			<mesh geometry={nodes.Object_2.geometry} material={materials.DefaultMaterial} />
		</group>
	);
}

useGLTF.preload('/scene.gltf');