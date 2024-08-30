import Modal from "../Components/Modal";
import { useState } from "react";

const Testpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Use lowercase 'true'
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page</p>
      <Modal isOpen={isModalOpen} />
      <style>
        {`
          body {
            background-color: white;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Testpage;
