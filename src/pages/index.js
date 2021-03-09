import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListFailed, getListLoadedData, getListLoading } from '../store/reducers/list';
import { BodyText, Container, ItemChildList, ItemList } from '../styles/pages/Home';

export default function Home() {

  const dispatch = useDispatch();
  const fromListStore = useSelector((state) => state.list);
  
  async function getList() {
    getListLoading();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      return getListLoadedData(json);
    } catch (error) {
      return getListFailed(error);
    }
  };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const {isLoading, heading, lists} = fromListStore;

  return (
    <Container>
      <BodyText>{heading}</BodyText>
      {isLoading ? 
        <BodyText>Loading...</BodyText> :
        <ItemList>
          {lists.map((item, idx) => (
            <ItemChildList key={idx}>{item.name}</ItemChildList>
          ))}
        </ItemList>
      }
    </Container>
  );
}


















// import wallpaper from '../assets/img.png';
// {/* <img src={wallpaper} alt="wallpaper" /> */}