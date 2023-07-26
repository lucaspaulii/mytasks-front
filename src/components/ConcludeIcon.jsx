import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import ConfirmActionModal from "./ConfirmActionModal";

export default function ConcludeIcon({ id, concluded, triggerUpdate }) {
  const [concludeModal, setConcludeModal] = useState(false);

  return (
    <>
      <div>
        <BsCheckCircleFill
          onClick={() => !concluded && setConcludeModal(true)}
          className={
            concluded
              ? "text-green-600"
              : "text-gray-500 hover:scale-110 transition-all duration-150 hover:cursor-pointer"
          }
        />
      </div>
      {concludeModal && (
        <ConfirmActionModal
          role="conclude"
          id={id}
          setModal={setConcludeModal}
          triggerUpdate={triggerUpdate}
        />
      )}
    </>
  );
}
