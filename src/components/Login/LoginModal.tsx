import { MdCancel } from "react-icons/md";

interface LoginModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginModal = ({ setOpenModal }: LoginModalProps) => {
  return (
    <div className="p-2 bg-gray-300 absolute top-[67%] left-[13%] h-screen  opacity-70">
      <div className="text-2xl relative ">
        <span>
          kjhg
          ;'lpihuygtfdresfcgvhbjkl;pghfdesdrtyuiolp;kjnhbgvfesr5t6iokljnbhgvfdesr56t7y8u'
        </span>
        <span>
          Git check
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
