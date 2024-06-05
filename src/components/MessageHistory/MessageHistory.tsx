import IMessageHistory from '../../models/MessageHistory.interface';
import Message from './Message';
import Typing from './Typing';
import ResponseComponent from './ResponseComponent';

type Props = {
  list: IMessageHistory[] | [];
};

// eslint-disable-next-line no-undef
const MessageHistory = (props: Props): JSX.Element | undefined => {
  if (!props.list.length) return;

  const typeHandler = (
    typeMessage: string,
    message: IMessageHistory
    // eslint-disable-next-line no-undef
  ): JSX.Element | undefined => {
    const from: { name: string } = message.from;
    const sMessage: { time: string; text?: string | undefined } = {
      time: message.time,
      text: message.text ?? message.text,
    };

    switch (typeMessage) {
      case 'message':
        return <Message from={from} message={sMessage} />;
      case 'response':
        return <ResponseComponent from={from} message={sMessage} />;
      case 'typing':
        return <Typing from={from} message={sMessage} />;
    }
  };

  return (
    <ul>
      {props.list.map((message: IMessageHistory) => (
        <li
          className={message.type === 'response' ? 'clearfix' : ''}
          key={message.id}
        >
          {typeHandler(message.type, message)}
        </li>
      ))}
    </ul>
  );
};

export default MessageHistory;
