import React,{useState} from 'react';
import { Flex } from '@chakra-ui/react';
import classes from './Polls.module.scss';
import Button from '../../../../components/Button/Button';
import ChooseBook from './ChooseBook/ChooseBook';
import AskQuestion from './AskQuestion/AskQuestion';
import PollsModal from './PollsModal/PollsModal';

const Polls = () => {
  const [open,setOpen] = useState(false)
  const onOpenHandler = () => {
    setOpen(true)
  }
  const onCloseHandler = () => {
    setOpen(false)
  }

  return (
    <>
    <PollsModal open={open} onOpen={onOpenHandler} onClose={onCloseHandler} />
    <div className={classes.Polls}>
      <Flex justifyContent='space-between' alignItems='center'>
        <h2 className={classes.Polls__Upcoming__Title}>Upcoming Poll</h2>
        <Button onClick={onOpenHandler} type='underline'>Create New Poll</Button>
      </Flex>
      <ChooseBook />
      <AskQuestion />
    </div></>
  );
};

export default Polls;
