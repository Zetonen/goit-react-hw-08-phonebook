import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { search } from 'redux/contacts/sliceFilter';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const handleChangeFilter = (e) =>{
    console.log(e.target.value.trim());
    dispatch(search(e.target.value.trim()))
  }
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        />
      </Label>
    </div>
  );
};
