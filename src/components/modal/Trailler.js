import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export function Trailler({ title, handleOnClick }) {
    const [movieKey, setMovieKey] = useState('')
    const getHandleOnClick = async () => {
        const keyCode = await handleOnClick()
        setMovieKey(keyCode)
    }
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button
                    onClick={getHandleOnClick}
                    className="mt-10 text-violet11 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center border-violet-800 rounded-[4px] bg-violet-800 px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                    Reprodizir trailer
                </button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-black opacity-[0.8] data-[state=open]:animate-overlay Show fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-content Show fixed top-[61%] left-[50%] max-h-[90vh] w-[100vw] max-w-[918px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <div className="flex justify-end gap-[25px]">
                        <AlertDialog.Cancel asChild>
                            <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                Fechar
                            </button>
                        </AlertDialog.Cancel>

                    </div>
                    <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        {title}
                    </AlertDialog.Title>
                    <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
                        <ReactPlayer
                            url={`https://www.youtube.com/embed/${movieKey}`}
                            controls={true}
                            width={918}
                            height={516}
                        />

                    </AlertDialog.Description>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );

}