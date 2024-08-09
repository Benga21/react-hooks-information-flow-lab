import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Filter from '../components/Filter'; 
describe('Filter Component', () => {
  test('renders correctly', () => {
    const mockCallback = jest.fn();
    render(<Filter onCategoryChange={mockCallback} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument()
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Produce')).toBeInTheDocument();
    expect(screen.getByText('Dairy')).toBeInTheDocument();
    expect(screen.getByText('Dessert')).toBeInTheDocument();
  });
  test('calls onCategoryChange when selection changes', () => {
    const mockCallback = jest.fn();
    render(<Filter onCategoryChange={mockCallback} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Produce' } });
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(expect.any(Object)); 
  });
});
