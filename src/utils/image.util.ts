/* libs */
import { notification } from 'antd';
/* apps */
import { errorMessage } from './message.util';

class Image {
  listType: string[] = [];
  constructor() {
    this.listType = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  }
  checkType = (type: string): boolean => {
    if (this.listType.indexOf(type) !== -1) {
      return true;
    }
    notification.error({
      message: errorMessage.BASE,
      description: errorMessage.IMAGE_TYPE,
    });
    return false;
  };
  checkSize = (size: number): boolean => {
    if (size / (1024 * 1024) > 1) {
      notification.error({
        message: errorMessage.BASE,
        description: errorMessage.IMAGE_SIZE,
      });
      return false;
    }
    return true;
  };
  onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src =
      'https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg';
  };
}

export default new Image();
