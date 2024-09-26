import { render, screen } from "@testing-library/react"
import { Button } from "."
import userEvent from "@testing-library/user-event";

describe('<button />', ()=>{
    it('should render with the text', () => {
      render(
        <Button text='load more posts'/>
      );
      const button = screen.getByRole('button', {name: /load more posts/i} );

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('class', 'myButton')
    })

    it('should call function on button click', ()=>{
      const fn = jest.fn();
      render(
        <Button
          text='load more posts'
          onClick={fn}
        />
      );
      const button = screen.getByRole('button', {name: /load more posts/i} );

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('class', 'myButton')
      userEvent.click(button)
      expect(fn).toHaveBeenCalled();

    })
  })
