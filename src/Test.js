import Chat from './Chat';

console.log('TEST', Chat);

const resp = Chat({
  id: '123',
  author: {
    name: '[deleted]',
    avatar: 'https://robohash.org/%5Bdeleted%5D',
  },
  text: 'Goodbye nested discussions, see you in a year :(',
  replies: [
    {
      author: {
        name: 'Maybe_not',
        avatar: 'https://robohash.org/Maybe_not',
      },
      id: '456',
      text: 'Remember to crouch and learn to dolphindive. I spent a great deal of my service in battlefield 2, and dolphindive saved my butt many times. Also beware of the respawn rate, i also heard some stories about people lagging out down there.\n\nNo seriously, I wish you the best of luck, take care.',
    },
  ],
});

const chatWrapperEle = resp.getElementById('chat-wrapper-123');
let expandBtnEle = resp.getElementById('expand-btn-123');
let chatMessageBoxEle = resp.getElementById('chat-message-box-123');

if (!expandBtnEle && chatMessageBoxEle) {
  console.log('SUCCESS');
} else {
  console.log('Fail');
}

chatWrapperEle.click();

if (expandBtnEle && !chatMessageBoxEle) {
  console.log('SUCCESS');
} else {
  console.log('Fail');
}
