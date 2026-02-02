import { useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
const Dog = () => {
    const { camera } = useThree()
    console.log(camera.position)
    return (
        <>
            <mesh>
                <meshBasicMaterial color={"red"} />
                <boxGeometry args={[1, 1, 1]} />
            </mesh>
            <OrbitControls />
        </>
    )
}

export default Dog