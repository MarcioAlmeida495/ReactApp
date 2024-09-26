import { render, screen } from "@testing-library/react"
import { Posts } from ".";

const props = {
    posts:[{
        id: 1,
        title: 'title 1',
        body: 'body1',
        cover: 'img/img1.png'
    },{
        id: 2,
        title: 'title 3',
        body: 'body2',
        cover: 'img/img2.png'
    },{
        id: 3,
        title: 'title 3',
        body: 'body3',
        cover: 'img/img3.png'
    }]
}

describe('<Posts />', () => {
    it('should render posts', ()=> {
        render(<Posts {...props} />);
        expect(screen.getAllByRole('heading', {name: /title/i})).toHaveLength(3);
        //debug();
    })
    it('should match a snapshot', ()=> {
        const {container} = render(<Posts {...props} />);
        expect(container).toMatchSnapshot();
    })
})
