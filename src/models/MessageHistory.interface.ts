interface IMessageHistory {
  id: string;
  from: {
    name: string;
  };
  type: 'message' | 'response' | 'typing';
  time: string;
  text?: string;
}

export default IMessageHistory;
