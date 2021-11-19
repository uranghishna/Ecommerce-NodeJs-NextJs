// import React, {useState} from "react"
// import { Button } from "@chakra-ui/button"
// import { Modal, ModalContent, ModalCloseButton, ModalOverlay, ModalHeader, ModalBody } from "@chakra-ui/modal"
// import { useColorMode } from "@chakra-ui/color-mode"

// const UserPage = () => {
//     const { colorMode, toggleColorMode } = useColorMode()


//     const [isModalShow, setIsModalShow] = useState(false)

//     const handleOpenModal = () => {
//         setIsModalShow(true)
//     }

//     const handleCloseModal = () => {
//         setIsModalShow(false)
//     }

//     return (
//         <div>

//         <Button colorScheme="blue" onClick={handleOpenModal}>Modal</Button>
//         <Button colorScheme="blue" onClick={toggleColorMode}>Color Mode</Button>

//             <Modal motionPreset="slideInBottom" isOpen={isModalShow} onClose={handleCloseModal}>
//                 <ModalOverlay />
//                 <ModalContent pb={5}>
//                 <ModalHeader>Login now</ModalHeader>
//                 <ModalCloseButton />
//                 <ModalBody>
//                 <h1>HAI</h1>
//                 </ModalBody>
//                 </ModalContent>
//             </Modal>
//         </div>
//     )
// }

// export default UserPage
