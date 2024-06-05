import IMessage from '../../models/Message.interface';

const Typing = (props: IMessage) => {
  const { name } = props.from;
  const { time } = props.message;
  return (
    <>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i>
          {name}
        </span>
        <span className='message-data-time'>{time}</span>
      </div>
      <i
        className='fa fa-spinner fa-spin fa-1x fa-fw'
        style={{ color: '#86BB71' }}
      ></i>
    </>
  );
};

export default Typing;
