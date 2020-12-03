import React from 'react';
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test('renders without errors', () => {
    render(<ContactForm />);
});

test('Renders first name input', () => {
    // Arrange
    render(<ContactForm />);

    // Act: Execute / do the thing
    const firstNameInput = screen.getByPlaceholderText(/Edd/i); // found firstNameInput

    // Assert: Test for correct output
    expect(firstNameInput).toBeTruthy();
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveTextContent('');
    
});

test('Renders last name input', () => {
    // Arrange
    render(<ContactForm />);

    // Act: Execute / do the thing
    const lastNameInput = screen.getByPlaceholderText(/Burke/i); // found lastNameInput

    // Assert: Test for correct output
    expect(lastNameInput).toBeTruthy();
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveTextContent('');
    
});

test('Renders email input', () => {
    // Arrange
    render(<ContactForm />);

    // Act: Execute / do the thing
    const emailInput = screen.getByAltText('emailInput'); 

    // Assert: Test for correct output
    expect(emailInput).toBeTruthy();
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveTextContent('');
    
});

test('Renders message input', () => {
    // Arrange
    render(<ContactForm />);

    // Act: Execute / do the thing
    const messageInput = screen.getByAltText('Message Input'); 

    // Assert: Test for correct output
    expect(messageInput).toBeTruthy();
    expect(messageInput).toBeInTheDocument();
    expect(messageInput).toHaveTextContent('');
    
});

test('Whole form inputs and submits correctly', async () => {
    // Arrange
    render(<ContactForm />);

    // Act: Do the thing
    const firstNameInput = screen.getByPlaceholderText(/Edd/i);
    const lastNameInput = screen.getByPlaceholderText(/Burke/i);
    const emailInput = screen.getByAltText('emailInput');
    const messageInput = screen.getByAltText('Message Input'); 
    const submitButton = screen.getByAltText('submit button');

    userEvent.type(firstNameInput, 'Remy');
    userEvent.type(lastNameInput, 'Vila');
    userEvent.type(emailInput, 'remy@gmail.com');
    userEvent.type(messageInput, 'OOGA BOOGA');
    userEvent.click(submitButton);

    // const firstNameRender = screen.queryByText(/Remy/i);
    // const lastNameRender = screen.queryByText(/Vila/i);
    // const emailRender = screen.queryByText(/remy@gmail.com/i);
    // const messageRender = screen.queryByText(/OOGA BOOGA/i);

    const jsonPreTag = await screen.findByText(/firstName/)

    expect(jsonPreTag).toBeInTheDocument();
    console.log(jsonPreTag);
    
});