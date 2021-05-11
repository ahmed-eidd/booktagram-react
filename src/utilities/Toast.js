import { createStandaloneToast } from '@chakra-ui/react';


const toast = createStandaloneToast();

export const toastSuccess = (msg) =>
  toast({
    position: 'top-right',
    status: 'success',
    title: msg,
    isClosable: true,
  });

export const toastFail = (msg) => {
  toast({
    position: 'top-right',
    status: 'error',
    title: msg,
    isClosable: true,
  });
};
