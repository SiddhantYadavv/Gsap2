import { useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
const Dog = () => {
    const model = useGLTF("/dog.drc.glb")

    useThree(({ camera }) => {
        camera.position.z = 0.7
    })
    return (
        <>
            <primitive object={model.scene} position={[0.2, -0.5, 0]} rotation={[0, -5.7, 0]} />
            <directionalLight position={[-10, 10, 20]} intensity={20} color={"#D4AF37"} />
            <directionalLight position={[10, 10, -20]} intensity={20} color={"#D4AF37"} />
            {/* <OrbitControls /> */}
        </>
    )
}

export default Dog