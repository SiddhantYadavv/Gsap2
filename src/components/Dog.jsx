import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei"
const Dog = () => {
    const model = useGLTF("/models/dog.drc.glb")

    useThree(({ camera }) => {
        camera.position.z = 0.5
    })
    const texture = useTexture({
        normalMap: "/dog_normals.jpg",
        sampleMatCap: "/matcap/mat-2.png"
    })
    texture.normalMap.flipY = false

    model.scene.traverse((child) => {
        if (child.name.includes("DOG")) {
            child.material = new THREE.MeshMatcapMaterial({
                normalMap: texture.normalMap,
                matcap: texture.sampleMatCap,
                // color: "#D4AF37",
            })
        }
    })
    return (
        <>
            <primitive object={model.scene} position={[0.2, -0.58, 0]} rotation={[0, -5.7, 0]} />
            <directionalLight position={[-10, 10, 20]} intensity={10} color={"#ffffff"} />
            <directionalLight position={[10, 10, -20]} intensity={10} color={"#ffffff"} />
            {/* <OrbitControls /> */}
        </>
    )
}

export default Dog