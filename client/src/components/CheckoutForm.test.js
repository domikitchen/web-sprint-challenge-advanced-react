import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    
    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    //inital values
    const firstName = screen.getByLabelText(/first name:/i, {selector: 'input'});
    const lastName = screen.getByLabelText(/last name:/i, {selector: 'input'});
    const address = screen.getByLabelText(/address:/i, {selector: 'input'});
    const city = screen.getByLabelText(/city:/i, {selector: 'input'});
    const state = screen.getByLabelText(/state:/i, {selector: 'input'});
    const zip = screen.getByLabelText(/zip:/i, {selector: 'input'});
    const checkout = screen.getAllByText(/checkout/i);
    const checkoutBtn = checkout[1];

    //changes to the values

    fireEvent.change(firstName, {target: {value: "Bill"}});
    fireEvent.change(lastName, {target: {value: "Joe"}});
    fireEvent.change(address, {target: {value: "1234 W. Downsworth Ave."}});
    fireEvent.change(city, {target: {value: "Delebore"}});
    fireEvent.change(state, {target: {value: "Stawe"}});
    fireEvent.change(zip, {target: {value: "12345"}});

    fireEvent.click(checkoutBtn);

    //after button click output checks

    const successMsg = screen.getByTestId('successMessage');
    const newFirstName = screen.getByText(/bill/i);
    const newLastName = screen.getByText(/joe/i);
    const newAddress = screen.getByText(/1234 w. downsworth ave./i);
    const newCity = screen.getByText(/delebore/i);
    const newState = screen.getByText(/stawe/i);
    const newZip = screen.getByText(/12345/i);

    expect(successMsg).toBeInTheDocument();
    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newCity).toBeInTheDocument();
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument();

});
