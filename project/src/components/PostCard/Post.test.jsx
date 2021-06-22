import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: "algum title" }))
    .toHaveAttribute("src", props.cover);

    expect(screen.getByRole("heading", { name: "algum title 1"})).toBeInTheDocument();

    expect(screen.getByText("algum body")).toBeInTheDocument();

  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();

  });
});