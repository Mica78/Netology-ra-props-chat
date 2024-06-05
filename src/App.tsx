import './components/MessageHistory/MessageHistory.css';
import './App.css';
import MessageHistory from './components/MessageHistory/MessageHistory';
import messages from './messages';
import IMessageHistory from './models/MessageHistory.interface';

function App() {
  //* что-то типа тайпгарда
  const fixedMessages: IMessageHistory[] = messages.map((message) => ({
    ...message,
    type:
      message.type === 'message'
        ? 'message'
        : message.type === 'response'
          ? 'response'
          : 'typing',
  }));

  return (
    <div className='clearfix container'>
      <div className='chat'>
        <div className='chat-history'>
          <MessageHistory list={fixedMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;
