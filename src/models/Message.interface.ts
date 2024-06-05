interface IMessage {
  from: {
    name: string;
  };
  message: {
    time: string;
    text?: string;
  };
}

export default IMessage;
