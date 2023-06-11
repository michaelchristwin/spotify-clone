import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isopen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

function Modal({ isopen, onChange, title, description, children }: ModalProps) {
  return (
    <Dialog.Root open={isopen} defaultOpen={isopen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed focus:outline-none drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] translate-y-[-50%] translate-x-[-50%] rounded-md bg-neutral-800 p-[25px]">
          <Dialog.Title className="text-center font-bold mb-4 text-xl">
            {title}
          </Dialog.Title>
          <Dialog.Description className={`mb-5 text-sm text-center`}>
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="text-neutral-400 rounded-full focus:outline-none hover:text-white absolute right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center top-[10px]">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
