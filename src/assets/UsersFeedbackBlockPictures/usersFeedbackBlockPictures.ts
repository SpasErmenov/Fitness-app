import imgg1 from "../UsersFeedbackBlockPictures/user1.jpg";
import imgg2 from "../UsersFeedbackBlockPictures/user2.jpg";
import imgg3 from "../UsersFeedbackBlockPictures/user3.jpg";
import imgg4 from "../UsersFeedbackBlockPictures/user4.jpg";
import imgg5 from "../UsersFeedbackBlockPictures/user5.jpg";
import imgg6 from "../UsersFeedbackBlockPictures/user6.jpg";

interface IUsers {
  id: number;
  name: string;
  imgPath: string;
}

export const usersFeedbackBlockPicture: IUsers[] = [
  { id: 1, name: "Spas", imgPath: imgg1 },
  { id: 2, name: "Ivan", imgPath: imgg2 },
  { id: 3, name: "Valio", imgPath: imgg3 },
  { id: 4, name: "Stefan", imgPath: imgg4 },
  { id: 5, name: "Gosho", imgPath: imgg5 },
  { id: 6, name: "Petar", imgPath: imgg6 },
];
