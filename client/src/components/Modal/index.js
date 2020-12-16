import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { newDiary, editDiary } from '../../actions/diaryAction';

import './styles.scss';

const ModalPage = ({ date, openModal }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(openModal);
  const [mood, setMood] = useState('');
  const [content, setContent] = useState('');
  const [isEditDiary, setIsEditDiary] = useState(false); // true면 글을 수정하는것, false면 글을 처음쓰는것
  const [diaryId, setDiaryId] = useState('');
  const diaries = useSelector((state) => state.diaryReducer.diaries);

  const findDiaryData = () => {
    console.log(diaries);
    console.log('이거좀실행되라ㅡㅡ');
    const splitedDate = date.split('-');

    let dayInfo = [];
    dayInfo =
      diaries &&
      diaries.filter((item) => {
        if (
          item.post_year === Number(splitedDate[0]) &&
          item.post_month === Number(splitedDate[1]) &&
          item.post_day === Number(splitedDate[2])
        ) {
          return true;
        }
      });
    if (dayInfo !== null) {
      if (dayInfo.length > 0) {
        setIsEditDiary(true);
        setMood(dayInfo[0].mood);
        setContent(dayInfo[0].content);
        setDiaryId(dayInfo[0]._id);
      } else {
        setIsEditDiary(false);
        setMood('');
        setContent('');
      }
    }
  };

  const handleOk = (e) => {
    e.preventDefault();
    if (mood === '') {
      alert('mood를 선택해 주세요');
      return;
    }
    if (content === '') {
      alert('일기를 작성해 주세요');
      return;
    }
    setVisible(false);
    setMood('');
    setContent('');

    if (isEditDiary) {
      dispatch(
        editDiary({
          diaryId,
          mood,
          content
        })
      );
    } else {
      dispatch(
        newDiary({
          date,
          mood,
          content
        })
      );
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setMood('');
    setContent('');
  };

  useEffect(() => {
    console.log(date);
    if (openModal) {
      setVisible(true);
      findDiaryData();
    }
  }, [openModal]);

  return (
    <>
      <Modal
        title={date}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width='600px'
        wrapClassName='modal-container'
      >
        <form className='form-diary'>
          <ul className='mood'>
            <li
              value='1'
              onClick={(e) => setMood(`${e.target.value}`)}
              className={mood === '1' ? 'listClicked' : ''}
              title='SOOOO HAPPY'
            >
              😁
            </li>
            <li
              value='2'
              onClick={(e) => setMood(`${e.target.value}`)}
              className={mood === '2' ? 'listClicked' : ''}
              title='=HAPPY'
            >
              🌝
            </li>
            <li
              value='3'
              onClick={(e) => setMood(`${e.target.value}`)}
              className={mood === '3' ? 'listClicked' : ''}
              title='SOSO'
            >
              😐
            </li>
            <li
              value='4'
              onClick={(e) => setMood(`${e.target.value}`)}
              className={mood === '4' ? 'listClicked' : ''}
              title='BAD'
            >
              😭
            </li>
            <li
              value='5'
              onClick={(e) => setMood(`${e.target.value}`)}
              className={mood === '5' ? 'listClicked' : ''}
              title='UPSET'
            >
              😡
            </li>
          </ul>
          <textarea
            onChange={(e) => setContent(e.currentTarget.value)}
            value={content}
          ></textarea>
        </form>
      </Modal>
    </>
  );
};

export default ModalPage;
