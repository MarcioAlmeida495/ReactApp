import { render, screen } from "@testing-library/react"
import { SearchInput } from "."
import userEvent from "@testing-library/user-event";

describe('<input />', () => {
    it('should be in the screen', () => {
        const fn = jest.fn();
         render(<SearchInput onChange={fn} />);
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input).toBeInTheDocument();
        const value = 'Marcio';
        userEvent.type(input, value);

        expect(fn).toHaveBeenCalledTimes(value.length);
    })
})
