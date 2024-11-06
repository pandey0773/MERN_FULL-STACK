// import { render, screen } from '@testing-library/react';
import { fireEvent, render, screen } from "@testing-library/react";
import AddProduct from "./addProduct";

test("renders Product name", () => {
  render(<AddProduct />);
  const d = screen.getByText("+ Add New Product");
  expect(d).toBeInTheDocument();
});

test('on click Add new product',()=>{
    render(<AddProduct/>);
    const d = screen.getByText("+ Add New Product");
    fireEvent.click(d);
    expect(screen.getByText('Create New Product')).toBeInTheDocument()
})
