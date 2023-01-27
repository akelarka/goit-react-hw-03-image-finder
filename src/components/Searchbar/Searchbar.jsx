import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from './Searchbar.styled';

const Searchbar = ({ search }) => {
    return (
        <SearchbarHeader>
            <SearchForm onSubmit={search}>
                <SearchFormButton type="submit">
                    <ImSearch style={{ width: 22, height: 22 }} />
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
                <SearchFormInput
                type="text"
                name="findForm"
                autocomplete="off"
                placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchbarHeader>
    )
};

export default Searchbar;

Searchbar.propType = {
    search: PropTypes.func.isRequired,
};