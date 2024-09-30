import { Carousel } from './components/Carousel';

const videos = [
  { id: '1', url: 'https://cozey.s3.ca-central-1.amazonaws.com/1.mp4',  title: 'Whispers of Ipsum'},
  { id: '2', url: 'https://cozey.s3.ca-central-1.amazonaws.com/2.mp4', title: 'Whispers of Ipsum'},
  { id: '3', url: 'https://cozey.s3.ca-central-1.amazonaws.com/3.mp4', title: 'Whispers of Ipsum'},
  { id: '4', url: 'https://cozey.s3.ca-central-1.amazonaws.com/4.mp4', title: 'Whispers of Ipsum'},
  { id: '5', url: 'https://cozey.s3.ca-central-1.amazonaws.com/5.mp4', title: 'Whispers of Ipsum'},
  { id: '6', url: 'https://cozey.s3.ca-central-1.amazonaws.com/6.mp4', title: 'Whispers of Ipsum'},
  { id: '7', url: 'https://cozey.s3.ca-central-1.amazonaws.com/7.mp4', title: 'Whispers of Ipsum'},
  { id: '8', url: 'https://cozey.s3.ca-central-1.amazonaws.com/8.mp4', title: 'Whispers of Ipsum'},
  { id: '9', url: 'https://cozey.s3.ca-central-1.amazonaws.com/9.mp4', title: 'Whispers of Ipsum'},
  { id: '10', url: 'https://cozey.s3.ca-central-1.amazonaws.com/10.mp4', title: 'Whispers of Ipsum'},
  { id: '11', url: 'https://cozey.s3.ca-central-1.amazonaws.com/11.mp4', title: 'Whispers of Ipsum'},
  { id: '12', url: 'https://cozey.s3.ca-central-1.amazonaws.com/12.mp4', title: 'Whispers of Ipsum'},
  { id: '13', url: 'https://cozey.s3.ca-central-1.amazonaws.com/13.mp4', title: 'Whispers of Ipsum'},
  { id: '14', url: 'https://cozey.s3.ca-central-1.amazonaws.com/14.mp4', title: 'Whispers of Ipsum'},
  { id: '15', url: 'https://cozey.s3.ca-central-1.amazonaws.com/15.mp4', title: 'Whispers of Ipsum'}
];

function App() {
  return (
    <div className="App">
      <Carousel videos={videos} />
    </div>
  );
}

export default App;