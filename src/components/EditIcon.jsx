import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

export default function EditIcon({ id, triggerUpdate, title, description }) {
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <div>
        <FaEdit
          onClick={() => setEditModal(true)}
          className="text-gray-500 hover:scale-110 transition-all duration-150 hover:cursor-pointer"
        />
      </div>
      {editModal && (
        <Modal
          setModal={setEditModal}
          role={"edit"}
          id={id}
          triggerUpdate={triggerUpdate}
          existingTitle={title}
          existingDescription={description}
        />
      )}
    </>
  );
}
