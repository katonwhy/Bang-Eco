import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Table from "./index";
import userEvent from "@testing-library/user-event";


  test("it should able to input letter", () => {
    render (<Table />);
    const InputElement = screen.getByPlaceholderText(/Masukan kecamatan atau kelurahan anda/i);
    userEvent.type(InputElement, "Jakarta");
    expect(InputElement.value).toBe("Jakarta");


  });

  test('It should allow the letter to be deleted', () => {
    render (<Table />);
    const InputElement = screen.getByPlaceholderText(/Masukan kecamatan atau kelurahan anda/i);
        fireEvent.change(InputElement, {target: {value: 'Jakarta'}})
        expect(InputElement.value).toBe('Jakarta') // need to make a change so React registers "" as a change
        fireEvent.change(InputElement, {target: {value: ''}})
        expect(InputElement.value).toBe('')
      })

   
    

   