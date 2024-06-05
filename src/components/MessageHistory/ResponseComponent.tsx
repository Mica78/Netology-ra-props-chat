import IMessage from '../../models/Message.interface';

const ResponseComponent = (props: IMessage) => {
  const { name } = props.from;
  const { time, text } = props.message;
  return (
    <>
      <div className='message-data align-right'>
        <span className='message-data-time'>{time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{name}</span>
        <i className='fa fa-circle me'></i>
      </div>
      <div className='message other-message float-right'>
        {text ? text : ''}
      </div>
    </>
  );
};

export default ResponseComponent;
