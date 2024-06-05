import IMessage from '../../models/Message.interface';

const Message = (props: IMessage) => {
  const { name } = props.from;
  const { time, text } = props.message;
  return (
    <>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i>
          {name}
        </span>
        <span className='message-data-time'>{time}</span>
      </div>
      <div className='message my-message'>{text ? text : ''}</div>
    </>
  );
};

export default Message;
