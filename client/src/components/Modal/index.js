import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import {newDiary} from '../../actions/diaryAction';

import './styles.scss';

const ModalPage = ({ date, diaryInfo, openModal }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(openModal);
  const [mood, setMood] = useState('');
  const [content, setContent] = useState('');
  const [editDiary, setEditDiary] = useState(false); // true면 글을 수정하는것, false면 글을 처음쓰는것

  /*const sendDiaryInfo = useCallback((diaryInfo) => {
    dispatch({ type: POST_DIARY, diaryInfo });
  });

  const editDiary = useCallback((diaryInfo) => {
    dispatch({ type: EDIT_DIARY, diaryInfo });
  });*/

  /*const showData = () => {
    // 기존에 데이터가 적혀있다면 그 데이터들을 보여줌
    const splitedDate = date.split('-');
    const dayInfo =
      diaryInfo &&
      diaryInfo.filter((item) => {
        if (
          `${item.POST_YEAR}-${item.POST_MONTH}-${item.POST_DAY}` ===
          `${splitedDate[0]}-${parseInt(splitedDate[1])}-${parseInt(
            splitedDate[2]
          )}`
        ) {
          return true;
        }
      });
    if (dayInfo !== 'undifined') {
      if (dayInfo.length > 0) {
        setIsUpload(false); // 에딧한다고 알려줌
        setMood(parseInt(dayInfo[0].MOOD));
        setContent(dayInfo[0].CONTENT);
      }
    } else {
      setIsUpload(true); // 처음 글쓴다고 알려줌
    }
  };*/

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

    if (editDiary) {
      /*sendDiaryInfo({
        date,
        mood,
        content
      });*/
    } else {
        dispatch(newDiary({
            date,
            mood,
            content
          })
        )
      }
  };

  const handleCancel = () => {
    setVisible(false);
    setMood('');
    setContent('');
  };

  useEffect(() => {
    /*if (date.length > 7) {
      showData();
    }*/
    if (openModal) {
      setVisible(true);
    }
  },[openModal]);

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
              onClick={(e) => setMood(e.target.value)}
              className={mood === 1 ? 'listClicked' : ''}
            >
              😁
            </li>
            <li
              value='2'
              onClick={(e) => setMood(e.target.value)}
              className={mood === 2 ? 'listClicked' : ''}
            >
              🌝
            </li>
            <li
              value='3'
              onClick={(e) => setMood(e.target.value)}
              className={mood === 3 ? 'listClicked' : ''}
            >
              😐
            </li>
            <li
              value='4'
              onClick={(e) => setMood(e.target.value)}
              className={mood === 4 ? 'listClicked' : ''}
            >
              😭
            </li>
            <li
              value='5'
              onClick={(e) => setMood(e.target.value)}
              className={mood === 5 ? 'listClicked' : ''}
            >
              😱
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
