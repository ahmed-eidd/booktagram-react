import React, { useState } from 'react';
import classes from './Meetings.module.scss';
import { Flex } from '@chakra-ui/react';
import CreateMeetingModal from './CreateMeetingModal/CreateMeetingModal';
import SingleMeeting from './SingleMeeting/SingleMeeting';
import Button from '../../../../components/Button/Button';

const Meetings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onCreateMeetingHandler = () => {
    setModalOpen(true);
  };

  return (
    <div className={classes.Meetings}>
      <Flex justifyContent='space-between' alignItems='center'>
        <h2 className={classes.Meetings__Upcoming__Title}>Upcoming Meetings</h2>
        <Button type='underline' onClick={onCreateMeetingHandler}>Create new meetings</Button>
        {/* <div
          className={classes.Meetings__CreateMeetingBtn}
          onClick={onCreateMeetingHandler}
        >
          Create new meeting
        </div> */}
      </Flex>
      <SingleMeeting />
      <h2 className={classes.Meetings__Finished__Title}>Finished Meetings</h2>
      <SingleMeeting />
      <CreateMeetingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Meetings;
