import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import ConfirmActionModal from "./ConfirmActionModal";

export default function DeleteIcon({ id, color, triggerUpdate }) {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <div>
        <BsFillTrashFill
          onClick={() => setDeleteModal(true)}
          className={
            color +
            " hover:scale-110 transition-all duration-150 hover:cursor-pointer"
          }
        />
      </div>
      {deleteModal && (
        <ConfirmActionModal
          role="delete"
          id={id}
          setModal={setDeleteModal}
          triggerUpdate={triggerUpdate}
        />
      )}
    </>
  );
}
