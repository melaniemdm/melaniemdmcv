import image from '../../assets/image2.jpg';
import './style.scss';

export default function Image() {
  return (
    <div className="containerImage">
      <img src={image} className="image" alt="idMe" />
    </div>
  );
}