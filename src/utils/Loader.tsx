import { Spinner, Dialog, Portal, createOverlay } from "@chakra-ui/react";
import { useEffect } from "react";

interface DialogProps {
    open: boolean,
}

const dialog = createOverlay<DialogProps>((props) => {
  return (
        <Dialog.Root placement={"center"} open={props.open} size={"lg"} >
        <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content display={"flex"} alignItems={"center"} justifyContent={"center"} width={"50px"} height={"50px"} background={"white"}>
                        <Spinner color={"black"} />
                    </Dialog.Content>
                </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
  )
})

const Loader = ({show}: {show: boolean}) => {

    useEffect(()=>{
        dialog.open("a", {
            open: show
        });
    },[show])

  return (
      <>
        hii
        <dialog.Viewport />
      </>
  );
}


export default Loader;