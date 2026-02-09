import { useThree } from "@react-three/fiber"
import * as THREE from "three"
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei"
const Dog = () => {
    const model = useGLTF("/models/dog.drc.glb")

    useThree(({ camera, scene, gl }) => {
        camera.position.z = 0.5
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace
    })

    const [normalMap, sampleMatCap] = (useTexture(["/dog_normals.jpg", "/matcap/mat-2.png"]))
        .map(texture => {
            texture.flipY = false
            texture.colorSpace = THREE.SRGBColorSpace
            return texture
        })

    const dogMaterial = new THREE.MeshMatcapMaterial({
        normalMap: normalMap,
        matcap: sampleMatCap,
    })

    model.scene.traverse((child) => {
        if (child.name.includes("DOG")) {
            child.material = dogMaterial
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