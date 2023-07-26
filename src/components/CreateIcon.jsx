import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from "./Modal";

export default function CreateIcon({ triggerUpdate }) {
  const [createModal, setCreateModal] = useState(false);

  return (
    <>
      <div>
        <BsFillPlusCircleFill
          onClick={() => setCreateModal(true)}
          className="shadow-black drop-shadow-xl scale-125 text-teal-700 hover:scale-[140%] transition-all duration-300 hover:cursor-pointer hover:text-teal-800"
        />
      </div>
      {createModal && (
        <Modal
          setModal={setCreateModal}
          role={"create"}
          id={null}
          triggerUpdate={triggerUpdate}
        />
      )}
    </>
  );
}
